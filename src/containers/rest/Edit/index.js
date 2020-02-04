import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import i18n from 'i18next';
import { goBack as goBackAction, replace } from 'connected-react-router';
import { Icon } from 'antd';
import Text from '../../../components/common/Text';
import CRUDActions from '../../../redux/crudActions';
import RestEditComponent from '../../../components/RestLayout/Edit';
import { getIdByUrl } from '../../../utils/tools';
import { PRIMARY_KEY } from '../../../redux/crudCreator/slice';
import crudSelectors from '../../../redux/crudSelectors';

class RestEdit extends Component {
  componentDidMount() {
    this.props.retrieveOneRecord(getIdByUrl(this.props));
  }

  componentWillUnmount() {
    this.props.clearCurrent();
  }

  closeModal = () => {
    const { replaceRoute, location } = this.props;
    replaceRoute(location.pathname);
  };

  onBack = () => {
    const { visibleModal, goBack } = this.props;
    if (!visibleModal) {
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
      <RestEditComponent
        {...this.props}
        onBack={this.onBack}
        onSubmit={this.onSubmit}
      />
    ) : (
      <>
        {header !== null && (
          <Text type="h3" className="modalTitleContent">
            <div className="modalTitle">
              {!header || typeof header === 'string'
                ? i18n.t(header || `${resource}.editPage`)
                : header}
            </div>
            <Icon
              onClick={this.onBack}
              className="modalBtnBack"
              type="ic-close"
            />
          </Text>
        )}
        <RestEditComponent
          {...this.props}
          showModal
          onBack={this.onBack}
          onSubmit={this.onSubmit}
        />
      </>
    );
  }
}
RestEdit.propTypes = {
  retrieveOneRecord: PropTypes.func,
  onSubmit: PropTypes.func,
  title: PropTypes.any,
  resource: PropTypes.string,
  goBack: PropTypes.func,
  location: PropTypes.object,
  showModal: PropTypes.bool,
  replaceRoute: PropTypes.func,
  header: PropTypes.string,
  visibleModal: PropTypes.bool,
  clearCurrent: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  loading: crudSelectors[props.resource].getLoadingCurrentRecord(state),
  errorRequest: crudSelectors[props.resource].getError(state),
  record: crudSelectors[props.resource].getCurrentData(state),
  location: state.router.location,
});

const mapDispatchToProps = (dispatch, props) => ({
  retrieveOneRecord: id =>
    dispatch(
      CRUDActions[props.resource].getById({
        [PRIMARY_KEY]: id,
      }),
    ),
  clearCurrent: () => dispatch(CRUDActions[props.resource].clearCurrent()),
  onSubmit: (id, data) =>
    dispatch(
      CRUDActions[props.resource].edit({
        ...data,
        [PRIMARY_KEY]: id,
      }),
    ),
  gotoShowPage: id =>
    props.history.push(
      `${props.match.path.replace('/:id/edit', '')}/${id}/show`,
    ),
  goBack: () => dispatch(goBackAction()),
  replaceRoute: data => dispatch(replace(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestEdit);
