import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { replace } from 'connected-react-router';
import Modal from '../../components/common/Modal';

import Users from '../../pages/Users';
import Customers from '../../pages/Customers';

const modalRoutes = [
  {
    path: '/customers',
    routes: [
      {
        path: '/create',
        component: Customers.Create,
        modalOptions: {
          width: 755,
        },
      },
      {
        path: '/edit',
        component: Customers.Edit,
        modalOptions: {
          width: 755,
        },
      },
    ],
  },

  {
    path: '/users',
    routes: [
      {
        path: '/create',
        component: Users.Create,
        modalOptions: {
          width: 755,
        },
      },
      {
        path: '/edit',
        component: Users.Edit,
        modalOptions: {
          width: 755,
        },
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
  componentDidMount() {
    const { location } = this.props;
    if (location.hash && location.hash !== '#') {
      const modelRoute = location.hash.replace('#', '/');
      this.modal = getModalRoute(modelRoute);
    }
  }

  closeModal = () => {
    const { replaceRoute, location } = this.props;
    replaceRoute(location.pathname);
  };

  render() {
    const { location } = this.props;
    const modelRoute = location.hash.replace('#', '/');
    this.modal = getModalRoute(modelRoute) || this.modal;
    const modalOptions = this.modal && this.modal.modalOptions ? this.modal.modalOptions : {};
    return (
      <Modal
        {...modalOptions}
        visible={!!(location.hash && location.hash !== '#')}
        footer={null}
        onCancel={this.closeModal}
        onClose={this.closeModal}
      >
        {this.modal && this.modal.component && (
          <this.modal.component
            showModal
            visibleModal={!!(location.hash && location.hash !== '#')}
            location={location}
          />
        )}
      </Modal>
    );
  }
}

ModalRoute.propTypes = {
  location: PropTypes.object,
  currentModal: PropTypes.string,
  closeModal: PropTypes.func,
  showModal: PropTypes.func,
  replaceRoute: PropTypes.func,
};

const mapStateToProps = state => ({
  location: state.router.location,
});

const mapDispatchToProps = dispatch => ({
  replaceRoute: data => dispatch(replace(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalRoute);
