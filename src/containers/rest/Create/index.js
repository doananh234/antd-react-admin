import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import I18n from 'i18next';
import { goBack as goBackAction } from 'connected-react-router';
import CRUDActions from '../../../redux/crudActions';
import RestCreateComponent from '../../../components/RestLayout/Create';
import Text from '../../../components/common/Text';
import { closeModal as closeModalAction } from '../../../redux/modal/actions';
import { upperCaseFirstChart } from '../../../utils/tools';
import { getDefaultCreateData } from '../../../redux/crudCreator/selectors';

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
    const { showModal, title, resource } = this.props;
    return !showModal ? (
      <RestCreateComponent {...this.props} onBack={this.onBack} />
    ) : (
      <div>
        <Text type="h4White" className="modalTitle">
          {!title || typeof title === 'string' ? I18n.t(title || resource) : title}
        </Text>
        <RestCreateComponent {...this.props} onBack={this.onBack} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  route: state.modal.current,
  record: getDefaultCreateData(state, props),
});

const mapDispatchToProps = (dispatch, props) => {
  const resourceUpperFirstChart = upperCaseFirstChart(props.resource);
  return {
    onSubmit: data =>
      dispatch(CRUDActions[props.resource][`create${resourceUpperFirstChart}`](data)),
    gotoShowPage: id => props.history.push(`${props.match.path.replace('create', '')}/${id}/edit`),
    closeModal: () => dispatch(closeModalAction()),
    goBack: () => dispatch(goBackAction()),
  };
};

RestCreate.propTypes = {
  closeModal: PropTypes.func,
  resource: PropTypes.string,
  title: PropTypes.any,
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
