import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import I18n from 'i18next';
import { goBack as goBackAction } from 'connected-react-router';
import { Icon } from 'antd';
import { closeModal as closeModalAction } from 'redux/modal/slice';
import CRUDActions from '../../../redux/crudActions';
import RestCreateComponent from '../../../components/RestLayout/Create';
import Text from '../../../components/common/Text';
import crudSelectors from '../../../redux/crudSelectors';

const RestCreate = props => {
  const onBack = () => {
    const { route, closeModal, goBack } = props;
    if (!route) {
      goBack();
    } else {
      closeModal();
    }
  };

  const { showModal, header, resource } = props;
  return !showModal ? (
    <RestCreateComponent {...props} onBack={onBack} />
  ) : (
    <>
      {header !== null && (
        <Text type="h4White" className="modalTitleContent">
          <div className="modalTitle">
            {!header || typeof header === 'string'
              ? I18n.t(header || `${resource}.createPage`)
              : header}
          </div>
          <Icon onClick={onBack} className="modalBtnBack" type="ic-close" />
        </Text>
      )}
      <RestCreateComponent {...props} onBack={onBack} />
    </>
  );
};

const mapStateToProps = (state, props) => ({
  route: state.modal.current,
  record: crudSelectors[props.resource].getDefaultCreateData(state, props),
  loading: crudSelectors[props.resource].getCreateLoading(state, props),
  error: crudSelectors[props.resource].getError(state, props),
  location: state.router.location,
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmit: data =>
      dispatch(CRUDActions[props.resource].create(data, props.defaultOptions)),
    gotoShowPage: id =>
      props.history.push(
        `${props.match.path.replace('create', '')}/${id}/edit`,
      ),
    closeModal: () => dispatch(closeModalAction()),
    goBack: () => dispatch(goBackAction()),
  };
};

RestCreate.propTypes = {
  closeModal: PropTypes.func,
  resource: PropTypes.string,
  header: PropTypes.any,
  route: PropTypes.string,
  showModal: PropTypes.bool,
  goBack: PropTypes.func,
};
const ConnectedRestCreate = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestCreate);

ConnectedRestCreate.propTypes = {
  goShowPageWhenSuccess: PropTypes.bool,
};
ConnectedRestCreate.defaultProps = {
  goShowPageWhenSuccess: true,
};
export default ConnectedRestCreate;
