import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import i18n from 'i18next';
import { useHistory, useLocation } from 'react-router';
import Text from 'components/common/Text';
import RestEditComponent from 'components/RestLayout/Edit';
import CRUDActions from 'redux/crudActions';
import { getIdByUrl } from 'utils/tools';
import { PRIMARY_KEY } from 'redux/crudCreator/dataProvider';
import crudSelectors from 'redux/crudSelectors';

const RestEdit = (props) => {
  const {
    showModal,
    visibleModal,
    header,
    resource,
    customOnSubmit,
    defaultOptions,
    customOnBack,
  } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const id = getIdByUrl(props, location);
  const loading = useSelector(
    crudSelectors[props.resource].getLoadingCurrentRecord,
  );
  const errorRequest = useSelector(crudSelectors[props.resource].getError);
  const record = useSelector(crudSelectors[props.resource].getCurrentData);
  const closeModal = () => {
    history.replace(location.pathname);
  };
  const gotoShowPage = (id) =>
    history.push(`${location.pathname.replace('/:id/edit', '')}/${id}/show`);

  const onBack = () => {
    if (!visibleModal) {
      history.goBack();
    } else {
      closeModal();
    }
  };

  const onSubmit = (data) => {
    if (customOnSubmit) {
      dispatch(
        customOnSubmit({
          id,
          data,
          options: {
            isBack: true,
            ...defaultOptions,
          },
        }),
      );
    } else
      dispatch(
        CRUDActions[resource].edit({
          data: {
            ...data,
            [PRIMARY_KEY]: id,
          },
          options: { isBack: !customOnBack, ...defaultOptions },
        }),
      ).then(({ payload: { data, error } }) => {
        if (
          data.id &&
          !error &&
          !(!defaultOptions || defaultOptions.isBack === false)
        ) {
          customOnBack ? customOnBack() : onBack();
        }
      });
  };

  useLayoutEffect(() => {
    dispatch(
      CRUDActions[resource].getDataById({
        data: {
          [PRIMARY_KEY]: id,
        },
        options: { isRequestApi: true, isRefresh: true, ...defaultOptions },
      }),
    );
    return () => {
      dispatch(CRUDActions[resource].clearCurrent());
    };
    // eslint-disable-next-line
  }, []);
  const content = (
    <RestEditComponent
      {...props}
      resource={resource}
      header={header}
      customOnSubmit={customOnSubmit}
      showModal={showModal}
      onBack={onBack}
      onSubmit={onSubmit}
      loading={loading}
      record={record}
      error={errorRequest}
      gotoShowPage={gotoShowPage}
    />
  );
  return !showModal ? (
    content
  ) : (
    <>
      {header !== null && (
        <Text type="h3" className="modalTitleContent">
          <div className="modalTitle">
            {!header || typeof header === 'string'
              ? i18n.t(header || `${resource}.editPage`)
              : header}
          </div>
          <span
            role="presentation"
            onClick={onBack}
            className="modalBtnBack"
            type="anticon ic-close"
          />
        </Text>
      )}
      {content}
    </>
  );
};

RestEdit.propTypes = {
  resource: PropTypes.string,
  showModal: PropTypes.bool,
  header: PropTypes.string,
  visibleModal: PropTypes.bool,
  defaultOptions: PropTypes.object,
  customOnSubmit: PropTypes.func,
  customOnBack: PropTypes.func,
};

RestEdit.defaultProps = {
  defaultOptions: {},
};

export default RestEdit;
