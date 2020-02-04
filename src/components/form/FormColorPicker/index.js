import React from 'react';
import PropTypes from 'prop-types';
import { Popover, Button } from 'antd';
import { SketchPicker } from 'react-color';
import FormItemUI from '../FormItem';

class RestColorPicker extends React.Component {
  handleChangeComplete = color => {
    this.props.form.setFieldsValue({ [this.props.source]: color.hex });
  };

  render() {
    const { form, source, defaultValue } = this.props;
    const colorStr = form.getFieldValue(source);
    return (
      <FormItemUI {...this.props} defaultValue={defaultValue}>
        <Popover
          content={<SketchPicker color={colorStr} onChangeComplete={this.handleChangeComplete} />}
          placement="bottom"
          trigger="click"
        >
          <Button block style={{ textAlign: 'left', color: colorStr || '#000' }}>
            <div>{colorStr || '#000'}</div>
          </Button>
        </Popover>
      </FormItemUI>
    );
  }
}

RestColorPicker.propTypes = {
  form: PropTypes.object,
  record: PropTypes.object,
  source: PropTypes.string,
  defaultValue: PropTypes.any,
};

export default RestColorPicker;
