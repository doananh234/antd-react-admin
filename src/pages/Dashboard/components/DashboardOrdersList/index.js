import React from 'react';
import { Link } from 'react-router-dom';
import { Tag, Icon, Row } from 'antd';
import moment from 'moment';
import List from '../../../../containers/rest/List';
import RestFiledItem from '../../../../components/RestField/RestFieldItem/index';
import {
  PAYMENT_STATUS,
  ORDER_STATUS,
  FORMAT_DATE,
} from '../../../../configs/localData';
import { DashboardOrdersListStyles } from './style';

const DashboardOrdersList = ({ ...props }) => {
  return (
    <DashboardOrdersListStyles>
      <Row className="orders-home">
        <List
          {...props}
          resource="orders"
          hasSearch={false}
          hasExport={false}
          hasCreate={false}
          initialFilter={{ orderBy: '-createdAt', limit: '5' }}
        >
          <RestFiledItem
            source="code"
            header="orders.code"
            format={(data, record) => (
              <Link to={`/orders/${record.id}/edit`}>{`#${data}`}</Link>
            )}
          />
          <RestFiledItem
            source="createdAt"
            header="orders.createdAt"
            format={data => moment(data).format(FORMAT_DATE)}
          />
          <RestFiledItem
            source="isPaid"
            header="orders.isPaid"
            format={data => (
              <Icon
                style={{
                  color: PAYMENT_STATUS.find(item => item.value === data)
                    ?.textColor,
                  fontSize: '16px',
                }}
                type={PAYMENT_STATUS.find(item => item.value === data)?.icon}
              />
            )}
          />
          <RestFiledItem
            source="status"
            header="orders.status"
            format={data => (
              <Tag
                color={ORDER_STATUS.find(item => item.value === data)?.color}
              >
                {ORDER_STATUS.find(item => item.value === data)?.text}
              </Tag>
            )}
          />
        </List>
      </Row>
    </DashboardOrdersListStyles>
  );
};

DashboardOrdersList.propTypes = {};

export default DashboardOrdersList;
