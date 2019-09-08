import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import i18n from 'i18next';
import { goBack as goBackAction } from 'connected-react-router';
import { Icon } from 'antd';
import Text from '../../../components/common/Text';
import CRUDActions from '../../../redux/crudActions';
import RestEditComponent from '../../../components/RestLayout/Edit';
import { getIdByUrl, upperCaseFirstChart } from '../../../utils/tools';
import { PRIMARY_KEY } from '../../../redux/crudCreator/actions';
import crudSelectors from '../../../redux/crudSelectors';

class RestEdit extends Component {
  static propTypes = {
    retrieveOneRecord: PropTypes.func,
    onSubmit: PropTypes.func,
    title: PropTypes.any,
    resource: PropTypes.string,
    goBack: PropTypes.func,
    location: PropTypes.object,
    showModal: PropTypes.bool,
  };

  componentDidMount() {
    this.props.retrieveOneRecord(getIdByUrl(this.props));
  }

  closeModal = () => {
    const { replaceRoute, location } = this.props;
    replaceRoute(location.pathname);
  };

  onBack = () => {
    const { route, goBack } = this.props;
    if (!route) {
      goBack();
    } else {
      this.closeModal();
    }
  };

  onSubmit = data => {
    const { onSubmit } = this.props;
    onSubmit(getIdByUrl(this.props), data);
  };

  render() {
    const { showModal, header, resource } = this.props;
    return !showModal ? (
      <RestEditComponent {...this.props} onBack={this.onBack} onSubmit={this.onSubmit} />
    ) : (
      <Fragment>
        {header !== null && (
          <Text type="h4White" className="modalTitleContent">
            <Icon onClick={this.onBack} className="modalBtnBack" type="arrow-left" />
            <div className="modalTitle">
              {!header || typeof header === 'string'
                ? i18n.t(header || `${resource}.editPage`)
                : header}
            </div>
          </Text>
        )}
        <RestEditComponent
          {...this.props}
          showModal
          onBack={this.onBack}
          onSubmit={this.onSubmit}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = (state, props) => ({
  loading: crudSelectors[props.resource].getLoading(state),
  errorRequest: crudSelectors[props.resource].getError(state),
  record: crudSelectors[props.resource].getCurrentData(state),
  location: state.router.location,
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
  goBack: () => dispatch(goBackAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestEdit);
