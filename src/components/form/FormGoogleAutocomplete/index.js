import React, { useState, useEffect } from 'react';
import { Form, AutoComplete } from 'antd';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import I18n from 'i18next';
import usePlacesAutocomplete, {
  getLatLng,
  getGeocode,
} from 'use-places-autocomplete';

const RestGoogleAutocomplete = ({
  header,
  required,
  debounce,
  messageRequire,
  placeholder,
  wrapperCol,
  defaultValue,
  form,
  record,
  source,
  rules,
}) => {
  const [coordinates, setCoordinates] = useState({});
  useEffect(() => {
    if (!isEmpty(record) && isEmpty(coordinates)) {
      setCoordinates({
        lat: record?.coordinates?.latitude,
        lng: record?.coordinates?.longitude,
      });
      form.setFieldsValue({
        [`coordinates.latitude`]: record?.coordinates?.latitude,
        [`coordinates.longitude`]: record?.coordinates?.longitude,
      });
    }
    // eslint-disable-next-line
  }, [record]);
  const {
    suggestions: { status, data },
    setValue,
  } = usePlacesAutocomplete({
    debounce,
  });
  const handleChange = (e) => {
    setValue(e);
    // onChange(form, e);
    form.setFieldsValue({
      [source]: e,
    });
  };

  const handleSelect = async (e) => {
    form.setFieldsValue({
      [source]: e,
    });
    try {
      const results = await getGeocode({ address: e });
      const coordinates = await getLatLng(results[0]);
      setCoordinates(coordinates);
      form.setFieldsValue({
        [`coordinates.latitude`]: coordinates.lat,
        'coordinates.longitude': coordinates.lng,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const renderSuggestions = data.map((suggestion) => {
    const {
      // eslint-disable-next-line
      structured_formatting: { main_text, secondary_text },
    } = suggestion;
    // eslint-disable-next-line
    return `${main_text} ${secondary_text}`;
  });
  return (
    <>
      <Form.Item
        wrapperCol={wrapperCol}
        label={I18n.t(header || 'text.googleAddress')}
        name={source}
        initialValue={defaultValue}
        rules={[
          {
            required,
            message: messageRequire,
          },
          ...rules,
        ]}
      >
        <AutoComplete
          dataSource={status === 'OK' && renderSuggestions}
          onSearch={handleChange}
          onChange={handleSelect}
          placeholder={placeholder}
        />
      </Form.Item>
    </>
  );
};

RestGoogleAutocomplete.propTypes = {
  source: PropTypes.string,
  header: PropTypes.string,
  required: PropTypes.bool,
  debounce: PropTypes.number,
  messageRequire: PropTypes.string,
  placeholder: PropTypes.string,
  wrapperCol: PropTypes.object,
  form: PropTypes.object,
  record: PropTypes.object,
  defaultValue: PropTypes.string,
  rules: PropTypes.array,
};

RestGoogleAutocomplete.defaultProps = {
  required: true,
  debounce: 600,
  messageRequire: I18n.t('input.address.validateMsg.required'),
  wrapperCol: { span: 24 },
  rules: [],
};

export default RestGoogleAutocomplete;
