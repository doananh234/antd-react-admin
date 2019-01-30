import React from 'react';
import PropTypes from 'prop-types';
import I18n from 'i18next';
import { ButtonWrapper } from './styles';

const EditButton = ({ title, gotoCreatePage, source }) => (
  <ButtonWrapper source={source} type="primary" onClick={gotoCreatePage}>
    {I18n.t(title)}
  </ButtonWrapper>
);
EditButton.propTypes = {
  gotoCreatePage: PropTypes.func,
  title: PropTypes.string,
  source: PropTypes.string,
};

EditButton.defaultProps = {
  source: 'create',
  title: 'button.create',
};

export default EditButton;
