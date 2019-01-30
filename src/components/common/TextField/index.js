import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';
import Text from '../Text';
import { DivWrapper, IconWrapper } from './styles';

const TextField = props => {
  const { title, value, icon } = props;
  return (
    <DivWrapper>
      <Title>
        {icon && <IconWrapper type={icon} />}
        <Text type="smallText">{title}</Text>
      </Title>
      <Text type="body">{value}</Text>
    </DivWrapper>
  );
};

TextField.propTypes = {
  title: PropTypes.node,
  value: PropTypes.string,
  icon: PropTypes.node,
};

export default TextField;
