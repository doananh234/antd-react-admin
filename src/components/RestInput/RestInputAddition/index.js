import React, { Component, useContext } from 'react';
import PropTypes from 'prop-types';
import I18n from 'i18next';
import { Form, Input, Button, Card, Modal } from 'antd';
import {
  MinusCircleOutlined,
  PlusCircleOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { getRecordData } from 'utils/tools';
import { InputAdditionWrapper } from './InputAdditionWrapper';
import { RestInputContext } from '../RestInputContext';

const { confirm } = Modal;

const FormItem = Form.Item;

class InputAddition extends Component {
  static getDerivedStateFromProps = (nextProps, prevState) => {
    const data = getRecordData(nextProps.record, nextProps.source);
    if (data !== prevState.data) {
      return { data, formDatas: data };
    }
    return {};
  };

  constructor(props) {
    super(props);
    const { record, source } = props;
    const data = getRecordData(record, source);
    this.state = {
      // eslint-disable-next-line
      data,
      formDatas: data || [{}],
    };
  }

  remove = (index) => {
    const { form, source, extraAction, record } = this.props;
    // const { formDatas } = this.state;
    const formDatas = form.getFieldValue(source);
    // can use data-binding to get
    // We need at least one passenger
    // if (formDatas.length === 1) {
    //   return;
    // }
    if (extraAction) {
      record[source][index]?.id &&
        extraAction({ id: record[source][index].id, quoteId: record.id });
    }
    const tempContents = [...formDatas];
    tempContents.splice(index, 1);
    this.setState({ formDatas: tempContents });
    // can use data-binding to set
    form.setFieldsValue({
      [source]: [...tempContents],
    });
  };

  add = () => {
    const { form, source } = this.props;
    const { formDatas } = this.state;
    // can use data-binding to get
    const tempContents = [...formDatas, {}];
    this.setState({ formDatas: tempContents });
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      [source]: tempContents,
    });
  };

  renderInput = (key, data, index, isTitle) => (placeholder) => {
    const { source } = this.props;
    const { formDatas } = this.state;
    const ComponentInput = isTitle ? Input : Input.TextArea;
    return (
      <div className="inputRow">
        <div>{key === 'vi' ? `${index}. ` : null}</div>
        <FormItem
          required={false}
          key={index}
          className="input"
          name={`${source}[${index}].${key}`}
          validateTrigger={['onChange', 'onBlur']}
          rules={[
            {
              whitespace: true,
            },
          ]}
          initialValue={getRecordData(data, key)}
        >
          <ComponentInput
            autosize={{ minRows: 2, maxRows: 3 }}
            placeholder={placeholder}
          />
        </FormItem>
        <div style={{ width: 20 }}>
          {formDatas.length > 1 && key === 'name.en' ? (
            <MinusCircleOutlined
              disabled={formDatas.length === 1}
              onClick={() => this.remove(index)}
            />
          ) : null}
        </div>
      </div>
    );
  };

  handleRemove = (index) => {
    const { hasConfirm, record, source } = this.props;
    if (hasConfirm && record[source][index]?.id) {
      confirm({
        title: `${I18n.t('popup.alertDelete')}`,
        content: I18n.t('popup.alertDeleteDes', {
          customMessage: `${record[source][index]?.id}`,
        }),
        okText: I18n.t('button.ok'),
        cancelText: I18n.t('button.cancel'),
        onOk: () => this.remove(index),
        onCancel: () => {},
      });
    } else {
      this.remove(index);
    }
  };

  render() {
    const { formDatas } = this.state;
    const { form, source, children, record, header } = this.props;
    const extraAction = (index) => (
      <DeleteOutlined onClick={() => this.handleRemove(index)} />
    );
    const formItems = formDatas ? (
      formDatas.map((k, index) => (
        <Card
          title={`${I18n.t(header)} (${index + 1})`}
          key={String(index)}
          // extra={formDatas.length === 1 ? null : extraAction(index)}
          extra={extraAction(index)}
        >
          {React.Children.map(children, (node) =>
            React.cloneElement(node, {
              form,
              record,
              key: `${source}[${String(index)}].${node.props.source}`,
              source: `${source}[${index}].${node.props.source}`,
            }),
          )}
        </Card>
      ))
    ) : (
      <span />
    );
    return (
      <InputAdditionWrapper>
        {formItems}
        <Button className="btnAdd" type="dashed" onClick={this.add}>
          <PlusCircleOutlined />
          {`${I18n.t('button.add')} `}
          {I18n.t(header)}
        </Button>
      </InputAdditionWrapper>
    );
  }
}
InputAddition.propTypes = {
  form: PropTypes.object,
  record: PropTypes.object,
  source: PropTypes.string,
  children: PropTypes.any,
  header: PropTypes.any,
  extraAction: PropTypes.func,
  hasConfirm: PropTypes.bool,
};

InputAddition.defaultProps = {};

const RestInputAddition = (props) => {
  const { record, form } = useContext(RestInputContext);
  return <InputAddition {...props} {...{ record, form }} />;
};

export default RestInputAddition;
