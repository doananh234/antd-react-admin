import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';
import { Progress, Col, Button } from 'antd';
import i18next from 'i18next';
import ReactTooltip from 'react-tooltip';
import Text from 'components/common/Text';
import { COUNTRY } from 'configs/localData';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import StylesWorldMap from './styles';

const WorldMap = ({ data }) => {
  const [zoom, setZoom] = useState(1.5);
  const [content, setContent] = useState('');
  const geoUrl =
    'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

  const handleZoomIn = () => {
    setZoom(zoom * 1.5);
  };
  const handleZoomOut = () => {
    setZoom(zoom / 1.5);
  };
  const handleScroll = (e) => {
    e.stopPropagation();
    if (e.deltaY > 0) {
      setZoom(zoom * 1.5);
    } else {
      setZoom(zoom / 1.5);
    }
  };
  const rounded = (num) => {
    if (num > 1000000000) {
      return `${Math.round(num / 100000000) / 10}Bn`;
    }
    if (num > 1000000) {
      return `${Math.round(num / 100000) / 10}M`;
    }
    return `${Math.round(num / 100) / 10}K`;
  };
  return (
    <StylesWorldMap>
      <div className="row-header">
        <Text type="h5" className="title">
          {i18next.t('home.map.title')}
        </Text>
      </div>

      <div onWheel={handleScroll} className="map-div">
        <div className="zoom-div">
          <Button type="icon" icon={<PlusOutlined />} onClick={handleZoomIn} />
          <Button
            type="icon"
            icon={<MinusOutlined />}
            onClick={handleZoomOut}
          />
        </div>
        <ComposableMap
          data-tip=""
          projectionConfig={{
            rotate: [0, 0, 0],
            scale: 150,
          }}
        >
          <ZoomableGroup zoom={zoom}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies &&
                geographies.map((geo, i) => (
                  <Geography
                    key={String(i)}
                    geography={geo}
                    stroke="white"
                    strokeWidth={0.5}
                    style={{
                      default: {
                        fill: '#e0e7fd',
                        // outline: 'none',
                      },
                      hover: {
                        fill: '#cdd6f5',
                        // outline: 'none',
                        cursor: 'pointer',
                      },
                      pressed: {
                        fill: '#cdd6f5',
                        // outline: 'none',
                        cursor: 'pointer',
                      },
                    }}
                    onMouseEnter={() => {
                      const { NAME, POP_EST } = geo.properties;
                      setContent(`${NAME} — ${rounded(POP_EST)}`);
                    }}
                    onMouseLeave={() => {
                      setContent('');
                    }}
                  />
                ))}
            </Geographies>
            {data?.map(({ value, coordinates }, i) => (
              <Marker
                key={String(i)}
                coordinates={coordinates}
                onMouseEnter={() => {
                  setContent(
                    i18next.t(
                      COUNTRY.find((country) => country.value === value).name,
                    ),
                  );
                }}
                onMouseLeave={() => {
                  setContent('');
                }}
              >
                <circle
                  className="circle"
                  r={10}
                  fill={COUNTRY.find((item) => item.value === value).color}
                  style={{
                    cursor: 'pointer',
                    hover: {
                      'stroke-width': 1,
                      stroke: '#098b94',
                    },
                  }}
                />
                {/* <text
                    textAnchor="middle"
                    style={{ fontFamily: 'system-ui', fill: '#5D5A6D' }}
                  >
                    {name}
                  </text> */}
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>
      </div>
      <ReactTooltip>{content}</ReactTooltip>
      <div className="note-map">
        {data?.map((item, i) => (
          <Col span={12} key={String(i)}>
            <span>
              {i18next.t(
                COUNTRY.find((country) => country.value === item.value).name,
              )}
            </span>
            <Progress
              percent={item.percent}
              strokeColor={
                COUNTRY.find((country) => country.value === item.value).color
              }
            />
          </Col>
        ))}
      </div>
    </StylesWorldMap>
  );
};

WorldMap.propTypes = {
  data: PropTypes.array,
};

WorldMap.defaultProps = {
  data: [
    {
      markerOffset: -15,
      value: 'buenosAires',
      coordinates: [-58.3816, -34.6037],
      percent: 81,
    },
    {
      markerOffset: 25,
      value: 'brasilia',
      coordinates: [-47.8825, -15.7942],
      percent: 68,
    },
    {
      markerOffset: 25,
      value: 'santiago',
      coordinates: [-70.6693, -33.4489],
      percent: 32,
    },
    {
      markerOffset: 25,
      value: 'bogota',
      coordinates: [-74.0721, 4.711],
      percent: 48,
    },
  ],
};

export default WorldMap;
