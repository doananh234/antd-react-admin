import React, { PureComponent } from 'react';
import { Input } from 'antd';
import MaterialInputWrapper from './styles';

class MaterialInput extends PureComponent {
  componentDidMount() {}

  render() {
    const { placeholder, prefix, ...params } = this.props;
    return (
      <MaterialInputWrapper isPrefix={!!prefix}>
        <Input {...params} />
        {prefix}
        <label>{placeholder}</label>
        <span className="bar" />
      </MaterialInputWrapper>
    );
  }
}

export default MaterialInput;
