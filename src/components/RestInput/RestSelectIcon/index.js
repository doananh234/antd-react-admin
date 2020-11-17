import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import SelectIcon from 'components/common/SelectIcon';
import { getRecordData } from 'utils/tools';
import FormItem from '../../form/FormItem';
import { RestInputContext } from '../RestInputContext';

const RestSelectIcon = props => (
  <RestInputContext.Consumer>
    {({ record, form }) => (
      <>
        <FormItem
          {...props}
          form={form}
          defaultValue={
            props.defaultValue || getRecordData(record, props.source)
          }
        >
          <Input style={{ display: 'none' }} />
        </FormItem>
        <SelectIcon
          defaultValue={
            props.defaultValue || getRecordData(record, props.source)
          }
          onChange={e => {
            form.setFieldsValue({ [props.source]: e });
          }}
        />
      </>
    )}
  </RestInputContext.Consumer>
);

RestSelectIcon.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
  defaultValue: PropTypes.string,
};

export default RestSelectIcon;
