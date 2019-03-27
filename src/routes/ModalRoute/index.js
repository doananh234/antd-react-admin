import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from '../../components/common/Modal';
import Companies from '../../pages/Companies';
import Clients from '../../pages/Clients';
import ActivityTypes from '../../pages/ActivityTypes';
import Titles from '../../pages/Titles';
import Departments from '../../pages/Departments';
import Statuses from '../../pages/Statuses';
import Projects from '../../pages/Projects';
import Users from '../../pages/Users';
import ProductTypes from '../../pages/ProductTypes';
import { closeModal as closeModalAction } from '../../redux/modal/actions';

const modalRoutes = [
  {
    path: '/companies',
    routes: [
      {
        path: '/create',
        component: Companies.Create,
      },
      {
        path: '/edit',
        component: Companies.Edit,
      },
    ],
  },

  {
    path: '/clients',
    routes: [
      {
        path: '/create',
        component: Clients.Create,
      },
      {
        path: '/edit',
        component: Clients.Edit,
      },
    ],
  },
  {
    path: '/activityTypes',
    routes: [
      {
        path: '/create',
        component: ActivityTypes.Create,
      },
      {
        path: '/edit',
        component: ActivityTypes.Edit,
      },
    ],
  },

  {
    path: '/titles',
    routes: [
      {
        path: '/create',
        component: Titles.Create,
      },
      {
        path: '/edit',
        component: Titles.Edit,
      },
    ],
  },
  {
    path: '/departments',
    routes: [
      {
        path: '/create',
        component: Departments.Create,
      },
      {
        path: '/edit',
        component: Departments.Edit,
      },
    ],
  },
  {
    path: '/statuses',
    routes: [
      {
        path: '/create',
        component: Statuses.Create,
      },
      {
        path: '/edit',
        component: Statuses.Edit,
      },
    ],
  },
  {
    path: '/projects',
    routes: [
      {
        path: '/create',
        component: Projects.Create,
      },
      {
        path: '/edit',
        component: Projects.Edit,
      },
    ],
  },

  {
    path: '/users',
    routes: [
      {
        path: '/create',
        component: Users.Create,
      },
      {
        path: '/edit',
        component: Users.Edit,
      },
    ],
  },

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
