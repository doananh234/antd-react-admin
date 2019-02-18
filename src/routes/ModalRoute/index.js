import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from '../../components/common/Modal';
import ProductTypes from '../../pages/ProductTypes';
import TypeGroups from '../../pages/TypeGroups';
import CaseTypes from '../../pages/CaseTypes';
import { closeModal as closeModalAction } from '../../redux/modal/actions';

const modalRoutes = [

  {
    path: '/productTypes',
    routes: [
      {
        path: '/create',
        component: ProductTypes.Create,
      },
      {
        path: '/edit',
        component: ProductTypes.Edit,
      },
    ],
  },

  {
    path: '/typeGroups',
    routes: [
      {
        path: '/create',
        component: TypeGroups.Create,
      },
      {
        path: '/edit',
        component: TypeGroups.Edit,
      },
    ],
  },
  {
    path: '/caseTypes',
    routes: [
      {
        path: '/create',
        component: CaseTypes.Create,
      },
      {
        path: '/edit',
        component: CaseTypes.Edit,
      },
    ],
  },
];

const getModalRoute = currentModal => {
  const modalRoute =
    currentModal && modalRoutes.find(route => currentModal.search(route.path) > -1);
  if (modalRoute) {
    return modalRoute.routes.find(route => currentModal.indexOf(route.path) > -1);
  }
  return modalRoute;
};

class ModalRoute extends Component {
  closeModal = () => {
    const { closeModal } = this.props;
    closeModal();
  };

  render() {
    const { location, currentModal } = this.props;
    this.modal = getModalRoute(currentModal) || this.modal;
    const modalOptions = this.modal && this.modal.modalOptions ? this.modal.modalOptions : {};
    return (
      <Modal
        {...modalOptions}
        visible={currentModal && currentModal !== ''}
        footer={null}
        onCancel={this.closeModal}
      >
        {this.modal && this.modal.component && (
          <this.modal.component showModal location={location} />
        )}
      </Modal>
    );
  }
}

ModalRoute.propTypes = {
  location: PropTypes.object,
  currentModal: PropTypes.string,
  closeModal: PropTypes.func,
};

const mapStateToProps = state => ({
  location: state.router.location,
  currentModal: state.modal.current,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModalAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalRoute);
