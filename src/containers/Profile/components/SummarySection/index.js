import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import i18n from 'i18next';
import { useSelector } from 'react-redux';
import { formatMoney } from 'utils/textUtils';
import {
  DollarCircleFilled,
  CheckCircleOutlined,
  OrderedListOutlined,
} from '@ant-design/icons';
import SummaryStyles from './styles';

const Summary = ({ theme }) => {
  const { summary } = useSelector((state) => state.auth.data);
  const SUMMARIES = [
    {
      icon: OrderedListOutlined,
      title: 'home.summary.totalOrder',
      value: summary?.totalOrder || 0,
      color: theme.palette.color[0],
    },
    {
      icon: CheckCircleOutlined,
      title: 'home.summary.totalDoneOrder',
      value: summary?.totalDoneOrder || 0,
      color: theme.palette.color[1],
    },
    {
      icon: DollarCircleFilled,
      title: 'home.summary.paidMoney',
      value: formatMoney(summary?.paidMoney || 0),
      color: theme.palette.color[2],
    },
  ];
  return (
    <SummaryStyles>
      <div className="summary-title">{i18n.t('profile.summary')}</div>
      <div className="summary-section">
        {SUMMARIES.map((data) => (
          <div className="summary-item">
            <div style={{ background: data.color }} className="summary-icon">
              <data.icon style={{ fontSize: 30, color: 'white' }} />
            </div>
            <div className="summary-content">
              <div className="total">{data.value}</div>
              <div className="title">{i18n.t(data.title)}</div>
            </div>
          </div>
        ))}
      </div>
    </SummaryStyles>
  );
};

Summary.propTypes = {
  theme: PropTypes.object,
};

export default withTheme(Summary);
