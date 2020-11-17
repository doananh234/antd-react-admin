import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  linearGradient,
} from 'recharts';
import i18next from 'i18next';
import { CHART_LINES } from 'configs/localData';
import Text from 'components/common/Text';
import StylesChartRevenue, { LegendStyles, TooltipStyles } from './styles';

const data = [
  {
    name: '0:00',
    nameNote: '19/09/19 0:00',
    sales: 88,
    profit: 98,
  },
  {
    name: '1:00',
    nameNote: '19/09/19 1:30',
    sales: 26,
    profit: 38,
  },
  {
    name: '2:00',
    nameNote: '19/09/19 2:30',
    sales: 171,
    profit: 122,
  },
  {
    name: '3:00',
    nameNote: '19/09/19 3:30',
    sales: 30,
    profit: 41,
  },
  {
    name: '4:00',
    nameNote: '19/09/19 4:30',
    sales: 80,
    profit: 90,
  },
  {
    name: '5:00',
    nameNote: '19/09/19 5:30',
    sales: 50,
    profit: 47,
  },
  {
    name: '6:00',
    nameNote: '19/09/19 6:30',
    sales: 190,
    profit: 170,
  },
  {
    name: '7:00',
    nameNote: '19/09/19 7:30',
    sales: 38,
    profit: 28,
  },
  {
    name: '8:00',
    nameNote: '19/09/19 8:30',
    sales: 150,
    profit: 130,
  },
  {
    name: '9:00',
    nameNote: '19/09/19 9:30',
    sales: 62,
    profit: 51,
  },
  {
    name: '10:00',
    nameNote: '19/09/19 10:30',
    sales: 150,
    profit: 130,
  },
  {
    name: '11:00',
    nameNote: '19/09/19 11:30',
    sales: 90,
    profit: 80,
  },
];

const renderLegend = props => {
  const { payload, handleMouseEnter, handleMouseLeave } = props;
  return (
    <LegendStyles>
      {payload.map((entry, index) => {
        return (
          <div
            key={String(index)}
            className="legend-item"
            onMouseEnter={() => handleMouseEnter({ dataKey: entry.value })}
            onMouseLeave={() => handleMouseLeave({ dataKey: entry.value })}
          >
            <div className="dot" style={{ background: entry.payload.stroke }} />
            {i18next.t(entry.payload.text)}
          </div>
        );
      })}
    </LegendStyles>
  );
};

renderLegend.propTypes = {
  payload: PropTypes.array,
  handleMouseEnter: PropTypes.func,
  handleMouseLeave: PropTypes.func,
};

const renderTooltip = ({ active, payload }) => {
  // console.log(active, payload, label, 'custom');
  return active ? (
    <TooltipStyles>
      <div className="title-tooltip">{payload[0].payload.nameNote}</div>
      <div className="content-tooltip">
        {payload.map((item, i) => (
          <div className="value-item" key={String(i)}>
            <div
              className="circle-tooltip"
              style={{
                backgroundColor: CHART_LINES.find(
                  chart => chart.value === item.name,
                ).fillColor,
              }}
            />
            <div>
              {`${i18next.t(
                CHART_LINES.find(chart => chart.value === item.name).text,
              )}:`}
              <strong className="strong-value">{item.value}</strong>
            </div>
          </div>
        ))}
      </div>
    </TooltipStyles>
  ) : null;
};

renderTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

const ChartRevenue = ({ revenue, dataKey }) => {
  const [opacity, setOpacity] = useState({ sales: 1, profit: 1 });

  const handleMouseEnter = o => {
    const { dataKey } = o;
    const opacityNew = { ...opacity };
    Object.keys(opacity).forEach(item => {
      if (item !== dataKey) opacityNew[item] = 0.3;
    });
    setOpacity({ ...opacityNew });
  };

  const handleMouseLeave = () => {
    // const { dataKey } = o;
    const opacityNew = { ...opacity };
    Object.keys(opacity).forEach(item => {
      if (opacity[item] !== 1) opacityNew[item] = 1;
    });
    setOpacity({ ...opacityNew });
  };

  return (
    <StylesChartRevenue>
      <div className="row-header">
        <Text type="h5" className="title">
          {i18next.t('home.chart.title')}
        </Text>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          className="area-chart"
          data={revenue || data}
          // margin={{
          //   top: 10,
          //   right: 30,
          //   left: 0,
          //   bottom: 0,
          // }}
        >
          <CartesianGrid vertical={false} strokeWidth={0.5} stroke="#b6b6b6" />
          <XAxis dataKey={dataKey} />
          <YAxis />
          <Tooltip content={renderTooltip} />
          <Legend
            verticalAlign="top"
            content={data =>
              renderLegend({ handleMouseLeave, handleMouseEnter, ...data })}
          />
          {CHART_LINES.map((item, i) => (
            <Area
              key={String(i)}
              fillOpacity={opacity[item.dataKey]}
              type="monotone"
              dataKey={item.dataKey}
              stroke={item.stroke}
              strokeOpacity={opacity[item.dataKey]}
              fill={`url(#${item.fillId})`}
              strokeWidth={1.25}
              text={item.text}
            />
          ))}
          <defs>
            {CHART_LINES.map((item, i) => (
              <linearGradient
                id={item.fillId}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
                key={String(i)}
              >
                <stop
                  offset="5%"
                  stopColor={item.fillColor}
                  stopOpacity={0.5}
                />
                <stop
                  offset="70%"
                  stopColor={item.fillColor}
                  stopOpacity={0.2}
                />
              </linearGradient>
            ))}
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </StylesChartRevenue>
  );
};

ChartRevenue.propTypes = {
  revenue: PropTypes.object,
  dataKey: PropTypes.string,
};

export default ChartRevenue;
