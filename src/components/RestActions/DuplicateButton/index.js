import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { pick } from 'lodash';
import I18n from 'i18next';
import { Tooltip, Popconfirm } from 'antd';
import moment from 'moment';
import { createOrders } from 'redux/orders/actions';
import { CopyOutlined } from '@ant-design/icons';
import { ButtonWrapper } from './styles';

const DuplicateButton = ({ source, record }) => {
  const dispatch = useDispatch();
  useEffect(() => () => {}, [dispatch]);
  const handleDuplicate = () => {
    const data = pick(record, [
      'priceOrder',
      'customerRequirements',
      'customerNote',
      'infoOrderLink',
      'niche',
      'platform',
      'orderFeature',
      'productCatalogIds',
      'deadline',
      'orderRequirementId',
      'name',
      'thumbnail',
    ]);
    dispatch(
      createOrders({
        data: {
          ...data,
          status: 'pre_order',
          finishedDate: moment().add(1, 'day').toISOString(),
          deadline: moment().add(1, 'day').toISOString(),
        },
        options: {
          isBack: false,
          isShowSuccessNoti: true,
          successDescription: 'Clone new order successfully!',
          customApiResource: 'orders/clone',
        },
      }),
    );
  };

  return (
    <Popconfirm
      placement="topLeft"
      title={I18n.t('orders.cloneConfirm')}
      onConfirm={handleDuplicate}
      okText="Yes"
      cancelText="No"
    >
      <Tooltip placement="bottom" title={I18n.t('button.duplicate')}>
        <ButtonWrapper source={source} icon={<CopyOutlined />} />
      </Tooltip>
    </Popconfirm>
  );
};

DuplicateButton.propTypes = {
  record: PropTypes.object,
  source: PropTypes.string,
};

DuplicateButton.defaultProps = {
  source: 'duplicate',
};

export default DuplicateButton;
