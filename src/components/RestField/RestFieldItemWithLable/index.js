import React from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { Col, Row, Input } from 'antd';
import { getRecordData } from 'utils/tools';
import RestFiledItemWithLabelWrapper from './style';

const RestFieldItemWithLabel = ({
  record,
  source,
  format,
  formatSubmitData,
  valueProp,
  component,
  header,
  onChangeRecord,
  gutter,
  isEdit,
}) => {
  const element = React.cloneElement(component, {
    record,
    [valueProp]:
      typeof format(getRecordData(record, source), record) === 'undefined'
        ? i18next.t('error.waitingUpdate')
        : format(getRecordData(record, source), record),
    onChange: value => {
      onChangeRecord(formatSubmitData(value));
    },
  });
  return (
    <RestFiledItemWithLabelWrapper>
      <div>
        <Row gutter={gutter}>
          <Col
            span={8}
            className="left-card"
            style={{
              padding: '6px 12px 6px 0',
            }}
          >
            {i18next.t(header)}
            {':'}
          </Col>
          {!isEdit && (
            <Col
              span={16}
              className="right-card"
              style={{
                padding: '6px 12px 6px 0',
              }}
            >
              {element}
            </Col>
          )}
          {isEdit && (
            <Input
              placeholder={element.props.children}
              style={{ width: 150, height: 30 }}
            />
          )}
        </Row>
      </div>
    </RestFiledItemWithLabelWrapper>
  );
};
RestFieldItemWithLabel.propTypes = {
  record: PropTypes.any,
  source: PropTypes.string,
  valueProp: PropTypes.string,
  format: PropTypes.func,
  component: PropTypes.any,
  formatSubmitData: PropTypes.func,
  onChangeRecord: PropTypes.func,
  header: PropTypes.string,
  gutter: PropTypes.number,
  isEdit: PropTypes.bool,
};

RestFieldItemWithLabel.defaultProps = {
  format: data => data,
  formatSubmitData: data => data,
  onChangeRecord: () => {},
  component: <span />,
  valueProp: 'children',
};

export default RestFieldItemWithLabel;
