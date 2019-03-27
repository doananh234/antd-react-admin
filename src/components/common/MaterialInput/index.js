import React, { PureComponent } from 'react';
import { Input } from 'antd';
import MaterialInputWrapper from './styles';

class MaterialInput extends PureComponent {
  componentDidMount() {}

  render() {
    const { placeholder, prefix, suffix, ...params } = this.props;
    return (
      <MaterialInputWrapper isPrefix={!!prefix} isSuffix={!!suffix}>
        <Input {...params} />
        {prefix}
        <span className="suffix">{suffix}</span>
        <label>{placeholder}</label>
        <span className="bar" />
      </MaterialInputWrapper>
    );
  }
}

export default MaterialInput;
