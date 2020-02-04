import React from 'react';
import PropTypes from 'prop-types';
import I18n from 'i18next';
import styled from 'styled-components';
import { Button } from 'antd';

const StyledButton = styled(Button)`
  && {
    width: 124px;
    height: 40px;
    border-radius: 2px;
  }
`;

const CreateButton = ({ header, gotoCreatePage, source }) => (
  <StyledButton source={source} type="primary" onClick={gotoCreatePage}>
    <span className="t-500-14px-1.57">{I18n.t(header)}</span>
  </StyledButton>
);
CreateButton.propTypes = {
  gotoCreatePage: PropTypes.func,
  header: PropTypes.string,
  source: PropTypes.string,
};

CreateButton.defaultProps = {
  source: 'create',
  header: 'button.create',
};

export default CreateButton;
