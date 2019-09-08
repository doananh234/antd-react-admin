import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import FormItem from '../../form/FormItem';
import { getRecordData } from '../../../utils/tools';
import { RestInputContext } from '../RestInputContext';

const RestInputItem = ({ ContentComponent, isReference, children, ...props }) => (
  <RestInputContext.Consumer>
    {({ record, form, handleSubmit }) =>
      isReference ? (
        React.cloneElement(children, {
          record,
        })
      ) : (
        <FormItem
          {...props}
          form={form}
          defaultValue={props.defaultValue || getRecordData(record, props.source)}
        >
          <ContentComponent {...props} record={record} handleSubmit={handleSubmit} />
        </FormItem>
      )
    }
  </RestInputContext.Consumer>
);

RestInputItem.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
  defaultValue: PropTypes.any,
  ContentComponent: PropTypes.any,
  isReference: PropTypes.bool,
  children: PropTypes.any,
};

RestInputItem.defaultProps = {
  ContentComponent: Input,
};

export default RestInputItem;
