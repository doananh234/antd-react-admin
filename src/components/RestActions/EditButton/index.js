import React from 'react';
import PropTypes from 'prop-types';
import I18n from 'i18next';
// import { Tooltip } from 'antd';
import { ButtonWrapper } from './styles';

const EditButton = props => (
  // <Tooltip header={<IntlMessages id="tooltip.edit" />}>
  <ButtonWrapper
    source={props.source}
    icon="edit"
    onClick={() => props.gotoEditPage(props.record ? props.record.id : '')}
  >
    {I18n.t('button.edit')}
  </ButtonWrapper>
  // </Tooltip>
);

EditButton.propTypes = {
  gotoEditPage: PropTypes.func,
  record: PropTypes.object,
  source: PropTypes.string,
};

EditButton.defaultProps = {
  source: 'edit',
};

export default EditButton;
