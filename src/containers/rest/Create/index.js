import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import I18n from 'i18next';
import { closeModal as closeModalAction } from 'redux/modal/slice';
import { useLocation, useHistory } from 'react-router';
import RestCreateComponent from 'components/RestLayout/Create';
import Text from 'components/common/Text';
import CRUDActions from '../../../redux/crudActions';
import crudSelectors from '../../../redux/crudSelectors';

const RestCreate = (props) => {
  const {
    showModal,
    header,
    defaultOptions,
    customOnSubmit,
    resource,
    customOnBack,
  } = props;
  const route = useSelector((state) => state.modal.current);
  const location = useLocation();
  const record = useSelector((state) =>
    crudSelectors[props.resource].getDefaultCreateData(state, {
      ...props,
      location,
    }),
  );
  const loading = useSelector(crudSelectors[props.resource].getCreateLoading);
  const error = useSelector(crudSelectors[props.resource].getError);

  const history = useHistory();
  const dispatch = useDispatch();

  const onBack = () => {
    if (!route) {
      history.goBack();
    } else {
      dispatch(closeModalAction());
    }
  };

  const gotoShowPage = (id) => {
    history.push(`${location.pathname.replace('create', '')}/${id}/edit`);
  };

  const onSubmit = (data) => {
    if (customOnSubmit) {
      dispatch(
        customOnSubmit({
          data,
          options: {
            isBack: true,
            ...defaultOptions,
          },
        }),
      );
    } else
      dispatch(
        CRUDActions[props.resource].create({
          data,
          options: {
            isBack: !customOnBack,
            ...defaultOptions,
          },
        }),
      ).then(({ payload: { data } }) => {
        if (data.id && !(!defaultOptions || defaultOptions.isBack === false)) {
          customOnBack ? customOnBack() : onBack();
        }
      });
  };

  const content = (
    <RestCreateComponent
      {...props}
      gotoShowPage={gotoShowPage}
      onSubmit={onSubmit}
      onBack={onBack}
      record={record}
      loading={loading}
      error={error}
    />
  );

  return !showModal ? (
    content
  ) : (
    <>
      {header !== null && (
        <Text type="h4White" className="modalTitleContent">
          <div className="modalTitle">
            {!header || typeof header === 'string'
              ? I18n.t(header || `${resource}.createPage`)
              : header}
          </div>
          <span
            onClick={onBack}
            role="presentation"
            className="modalBtnBack"
            type="anticon ic-close"
          />
        </Text>
      )}
      {content}
    </>
  );
};

RestCreate.propTypes = {
  closeModal: PropTypes.func,
  resource: PropTypes.string,
  header: PropTypes.any,
  route: PropTypes.string,
  showModal: PropTypes.bool,
  goBack: PropTypes.func,
  goShowPageWhenSuccess: PropTypes.bool,
  defaultOptions: PropTypes.object,
  customOnSubmit: PropTypes.func,
  customOnBack: PropTypes.func,
};

RestCreate.defaultProps = {
  goShowPageWhenSuccess: true,
  defaultOptions: {
    isBack: true,
  },
};
export default RestCreate;
