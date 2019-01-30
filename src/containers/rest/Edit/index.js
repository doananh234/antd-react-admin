import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import i18n from 'i18next';
import { goBack as goBackAction } from 'connected-react-router';
import Text from '../../../components/common/Text';
import CRUDActions from '../../../redux/crudActions';
import RestEditComponent from '../../../components/RestLayout/Edit';
import { getCurrentData, getError, getLoading } from '../../../redux/crudCreator/selectors';
import { getIdByUrl, upperCaseFirstChart } from '../../../utils/tools';
import { closeModal as closeModalAction } from '../../../redux/modal/actions';
import { PRIMARY_KEY } from '../../../redux/crudCreator/actions';

class RestEdit extends Component {
  static propTypes = {
    retrieveOneRecord: PropTypes.func,
    showModal: PropTypes.bool,
    onSubmit: PropTypes.func,
    title: PropTypes.any,
    resource: PropTypes.string,
    closeModal: PropTypes.func,
    goBack: PropTypes.func,
    route: PropTypes.string,
  };

  constructor(props) {
    super(props);
    props.retrieveOneRecord(getIdByUrl(props));
  }

  onBack = () => {
    const { route, closeModal, goBack } = this.props;
    if (!route) {
      goBack();
    } else {
      closeModal();
    }
  };

  onSubmit = data => {
    const { onSubmit } = this.props;
    onSubmit(getIdByUrl(this.props), data);
  };

  render() {
    const { showModal, title, resource } = this.props;
    return !showModal ? (
      <RestEditComponent {...this.props} onBack={this.onBack} onSubmit={this.onSubmit} />
    ) : (
      <div>
        <Text type="h4White" className="modalTitle">
          {!title || typeof title === 'string' ? i18n.t(title || resource) : title}
        </Text>
        <RestEditComponent
          {...this.props}
          showModal
          onBack={this.onBack}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  loading: getLoading(state, props),
  errorRequest: getError(state, props),
  record: getCurrentData(state, props),
  route: state.modal.current,
});

const mapDispatchToProps = (dispatch, props) => ({
  retrieveOneRecord: id =>
    dispatch(
      CRUDActions[props.resource][`getById${upperCaseFirstChart(props.resource)}`]({
        [PRIMARY_KEY]: id,
      })
    ),
  onSubmit: (id, data) =>
    dispatch(
      CRUDActions[props.resource][`edit${upperCaseFirstChart(props.resource)}`]({
        ...data,
        [PRIMARY_KEY]: id,
      })
    ),
  gotoShowPage: id => props.history.push(`${props.match.path.replace('/:id/edit', '')}/${id}/show`),
  closeModal: () => dispatch(closeModalAction()),
  goBack: () => dispatch(goBackAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestEdit);
