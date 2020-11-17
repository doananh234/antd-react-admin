import React from 'react';
import PropTypes from 'prop-types';
import { LOCALES } from 'configs/localData';
import { Tabs, Form, Card } from 'antd';
import i18next from 'i18next';

const RestMultiLocale = ({ source, header, renderItem }) => (
  <Form.Item>
    <Card title={i18next.t(header)}>
      <Tabs defaultActiveKey={LOCALES[0].value}>
        {LOCALES.map((e) => (
          <Tabs.TabPane
            forceRender
            key={e.value}
            tab={e.value.toLocaleUpperCase()}
          >
            {renderItem({ source: `${source}.${e.value}` })}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </Card>
  </Form.Item>
);
RestMultiLocale.propTypes = {
  source: PropTypes.string,
  renderItem: PropTypes.func,
  header: PropTypes.string,
};

export default RestMultiLocale;
