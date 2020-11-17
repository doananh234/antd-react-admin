import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { useSelector } from 'react-redux';
import { BarChart, Bar, Tooltip, ResponsiveContainer } from 'recharts';
import Text from 'components/common/Text';
import { DETAIL_SUMMARY_CARD_TYPES } from 'configs/localData';
import { FolderOpenOutlined } from '@ant-design/icons';
import DetailSummaryRevenueStyles, { BarChartStyles } from './styles';
import { TooltipStyles } from '../../ChartRevenue/styles';

const renderTooltip = ({ active, payload }) => {
  return active ? (
    <TooltipStyles>
      <div className="title-tooltip">
        {payload[0] && payload[0].payload.name}
      </div>
      <div className="content-tooltip">
        <div className="value-item">
          <div
            className="circle-tooltip"
            style={{
              backgroundColor: payload[0] && payload[0].fill,
            }}
          />
          <div>
            {`${i18next.t('home.detailedSummary.chartRevenue.revenue')}
              :`}
            <strong className="strong-value">
              {payload[0] && payload[0].value}
            </strong>
          </div>
        </div>
      </div>
    </TooltipStyles>
  ) : null;
};
renderTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};
const BarChartCustom = ({ data }) => {
  return (
    <BarChartStyles>
      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={data} style={{ transform: 'scale(1.025)' }}>
          <Tooltip content={renderTooltip} />
          <Bar dataKey="revenue" fill="#4AC7EC" barSize={4} opacity={0.5} />
        </BarChart>
      </ResponsiveContainer>
    </BarChartStyles>
  );
};

BarChartCustom.propTypes = {
  data: PropTypes.array,
};

const DetailedSummaryRevenue = () => {
  const dataRevenue = useSelector((state) => state.config.revenue?.byMonth);
  const [data, setData] = useState({});

  const SummaryCardIcon =
    DETAIL_SUMMARY_CARD_TYPES.find((card) => card.value === data.type)?.icon ||
    DETAIL_SUMMARY_CARD_TYPES[0].icon;
  const getData = () => {
    const dataNew = [];
    for (let i = 0; i < 30; i += 1) {
      if (i % 2) dataNew.push({ name: `${i + 1}-Jan`, revenue: 50 });
      else dataNew.push({ name: `${i + 1}-Jan`, revenue: 60 });
    }
    return dataNew;
  };
  useEffect(() => {
    setData({
      value: 57,
      percentage: 14.5,
      type: 'up',
      revenue: getData(),
    });
  }, []);

  return (
    <DetailSummaryRevenueStyles>
      <div className="description">
        <div className="value-div">
          <Text className="value">
            {`${i18next.t('currencyUnit.sign')} ${data?.value}k`}
          </Text>
          <FolderOpenOutlined className="icon" />
        </div>
        <div className="row-text-bottom">
          <span className="text-bottom">
            <span
              className="percent-value"
              style={{
                color: DETAIL_SUMMARY_CARD_TYPES.find(
                  (card) => card.value === data.type,
                )?.color,
              }}
            >
              <SummaryCardIcon
                style={{
                  color: DETAIL_SUMMARY_CARD_TYPES.find(
                    (card) => card.value === data.type,
                  )?.color,
                }}
              />
              {`${data?.percentage}% `}
            </span>
            <span className="text">
              {`${i18next.t(
                DETAIL_SUMMARY_CARD_TYPES.find(
                  (card) => card.value === data.type,
                )?.text,
              )}`}
            </span>
          </span>
        </div>
      </div>
      <BarChartCustom data={dataRevenue?.revenue || data?.revenue} />
    </DetailSummaryRevenueStyles>
  );
};

export default DetailedSummaryRevenue;
