import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router';
import Modal from 'components/common/Modal';
import Users from 'pages/Users';

const modalRoutes = [
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
];

let modal = null;

const getModalRoute = (currentModal) => {
  const modalRoute =
    currentModal &&
    modalRoutes.find((route) => currentModal.search(route.path) > -1);
  if (modalRoute) {
    return modalRoute.routes.find(
      (route) => currentModal.indexOf(route.path) > -1,
    );
  }
  return modalRoute;
};

const ModalRoute = () => {
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    console.log('lo', location.hash);
    if (location.hash && location.hash !== '#') {
      const modelRoute = location.hash.replace('#', '/');
      modal = getModalRoute(modelRoute);
    }
    // eslint-disable-next-line
  }, [location.hash]);
  const closeModal = () => {
    history.replace(`${location.pathname}${location.search}`);
  };

  const modelRoute = location.hash.replace('#', '/');
  modal = getModalRoute(modelRoute) || modal;
  const modalOptions = modal && modal?.modalOptions ? modal?.modalOptions : {};
  return (
    <Modal
      {...modalOptions}
      visible={!!(location.hash && location.hash !== '#')}
      footer={null}
      onCancel={closeModal}
      onClose={closeModal}
    >
      {modal?.component && (
        <modal.component
          showModal
          visibleModal={!!(location.hash && location.hash !== '#')}
          location={location}
        />
      )}
    </Modal>
  );
};

ModalRoute.propTypes = {
  location: PropTypes.object,
  currentModal: PropTypes.string,
  closeModal: PropTypes.func,
  showModal: PropTypes.func,
  replaceRoute: PropTypes.func,
};

export default ModalRoute;
