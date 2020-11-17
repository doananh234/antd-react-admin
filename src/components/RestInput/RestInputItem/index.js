import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import i18next from 'i18next';
import { getRecordData } from 'utils/tools';
import FormItem from '../../form/FormItem';
import { RestInputContext } from '../RestInputContext';

const RestInputItem = ({
  ContentComponent,
  isReference,
  children,
  format,
  placeholder,
  ...props
}) => {
  const { record, form } = useContext(RestInputContext);

  return isReference ? (
    React.cloneElement(children, {
      record,
    })
  ) : (
    <FormItem
      {...props}
      form={form}
      defaultValue={
        format(getRecordData(record, props.source)) ||
        format(props.defaultValue)
      }
      name={props.source}
    >
      <ContentComponent
        {...props}
        record={record}
        placeholder={i18next.t(placeholder)}
      />
    </FormItem>
  );
};

RestInputItem.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
  defaultValue: PropTypes.any,
  ContentComponent: PropTypes.any,
  isReference: PropTypes.bool,
  children: PropTypes.any,
  format: PropTypes.func,
  placeholder: PropTypes.string,
};

RestInputItem.defaultProps = {
  ContentComponent: Input,
  format: (data) => data,
};

export default RestInputItem;
