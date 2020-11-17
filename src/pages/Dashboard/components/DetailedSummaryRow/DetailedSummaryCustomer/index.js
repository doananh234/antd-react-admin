import React, { useState } from 'react';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import { SUMMARIES_CUSTOMER } from 'configs/localData';
import { PieChartStyles, TooltipStyles, LegendStyles } from './styles';

const sum = 900;

const renderLegend = ({ payload }) => {
  return (
    <LegendStyles>
      {payload.map((item, i) => (
        <div className="legend-item" key={String(i)}>
          <div className="value-legend">{item.payload.value}</div>
          <div className="name-legend">
            <div
              className="circle"
              style={{ backgroundColor: item.payload.fill }}
            />
            <div className="name">
              {`${i18next.t(
                SUMMARIES_CUSTOMER.find(
                  (customer) => customer.dataKey === item.value,
                )?.text,
              )}`}
            </div>
          </div>
        </div>
      ))}
    </LegendStyles>
  );
};

const renderTooltip = ({ active, payload }) => {
  return active ? (
    <TooltipStyles
      style={{
        backgroundColor: payload[0]?.payload.fill,
      }}
    >
      <div className="content-tooltip">
        {`${i18next.t(
          SUMMARIES_CUSTOMER.find(
            (customer) => customer.dataKey === payload[0].name,
          )?.text,
        )}: `}
        <strong className="strong-text">
          {`${Math.round((payload[0]?.value / sum) * 100)}%`}
        </strong>
      </div>
    </TooltipStyles>
  ) : null;
};

const DetailedSummaryCustomer = () => {
  const dataCustomers = useSelector((state) => state.config.summariesCustomers);
  const [opacity, setOpacity] = useState({
    newCustomer: 1,
    repeatedCustomer: 1,
  });
  const data = [
    { name: 'newCustomer', value: 500 },
    { name: 'repeatedCustomer', value: 400 },
  ];
  return (
    <PieChartStyles>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={dataCustomers || data}
            cx="30%"
            cy="60%"
            innerRadius={50}
            outerRadius={80}
            // fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => {
              return (
                <Cell
                  opacity={opacity[entry.name]}
                  key={String(`cell-${index}`)}
                  fill={
                    SUMMARIES_CUSTOMER.find(
                      (customer) => customer.dataKey === entry.name,
                    ).color
                  }
                  onMouseEnter={() =>
                    setOpacity({ ...opacity, [entry.name]: 0.5 })}
                  onMouseLeave={() =>
                    setOpacity({ ...opacity, [entry.name]: 1 })}
                />
              );
            })}
          </Pie>

          <Tooltip content={renderTooltip} />
          <Legend
            content={renderLegend}
            verticalAlign="middle"
            width={150}
            align="right"
          />
        </PieChart>
      </ResponsiveContainer>
    </PieChartStyles>
  );
};

renderLegend.propTypes = {
  payload: PropTypes.array,
};

renderTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default DetailedSummaryCustomer;
