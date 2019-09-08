import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import I18n from 'i18next';
import { goBack as goBackAction } from 'connected-react-router';
import { Icon } from 'antd';
import CRUDActions from '../../../redux/crudActions';
import RestCreateComponent from '../../../components/RestLayout/Create';
import Text from '../../../components/common/Text';
import { closeModal as closeModalAction } from '../../../redux/modal/actions';
import { upperCaseFirstChart } from '../../../utils/tools';
import crudSelectors from '../../../redux/crudSelectors';

class RestCreate extends Component {
  onBack = () => {
    const { route, closeModal, goBack } = this.props;
    if (!route) {
      goBack();
    } else {
      closeModal();
    }
  };

  render() {
    const { showModal, header, resource } = this.props;
    return !showModal ? (
      <RestCreateComponent {...this.props} onBack={this.onBack} />
    ) : (
      <Fragment>
        {header !== null && (
          <Text type="h4White" className="modalTitleContent">
            <Icon onClick={this.onBack} className="modalBtnBack" type="arrow-left" />
            <div className="modalTitle">
              {!header || typeof header === 'string'
                ? I18n.t(header || `${resource}.createPage`)
                : header}
            </div>
          </Text>
        )}
        <RestCreateComponent {...this.props} onBack={this.onBack} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state, props) => ({
  route: state.modal.current,
  record: crudSelectors[props.resource].getDefaultCreateData(state, props),
  loading: crudSelectors[props.resource].getCreateLoading(state, props),
  error: crudSelectors[props.resource].getError(state, props),
  location: state.router.location,
});

const mapDispatchToProps = (dispatch, props) => {
  const resourceUpperFirstChart = upperCaseFirstChart(props.resource);
  return {
    onSubmit: data =>
      dispatch(
        CRUDActions[props.resource][`create${resourceUpperFirstChart}`](data, props.defaultOptions)
      ),
    gotoShowPage: id => props.history.push(`${props.match.path.replace('create', '')}/${id}/edit`),
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
  mapDispatchToProps
)(RestCreate);

ConnectedRestCreate.propTypes = {
  goShowPageWhenSuccess: PropTypes.bool,
};
ConnectedRestCreate.defaultProps = {
  goShowPageWhenSuccess: true,
};
export default ConnectedRestCreate;
