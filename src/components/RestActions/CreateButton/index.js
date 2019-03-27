import React from 'react';
import PropTypes from 'prop-types';
import I18n from 'i18next';
import { ButtonWrapper } from './styles';

const EditButton = ({ header, gotoCreatePage, source }) => (
  <ButtonWrapper source={source} type="primary" onClick={gotoCreatePage}>
    {I18n.t(header)}
  </ButtonWrapper>
);
EditButton.propTypes = {
  gotoCreatePage: PropTypes.func,
  header: PropTypes.string,
  source: PropTypes.string,
};

EditButton.defaultProps = {
  source: 'create',
  header: 'button.create',
};

export default EditButton;
