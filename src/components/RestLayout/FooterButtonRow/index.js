import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import I18n from 'i18next';
import { ButtonWrapper, FooterButtonRowWrapper } from './styles';

const ButtonRow = props => {
  const { loading, onBack, handleSubmit, type, showModal } = props;
  if (showModal) {
    return (
      <FooterButtonRowWrapper>
        <ButtonWrapper
          onClick={() => {
            handleSubmit();
          }}
          type="primary"
          loading={loading}
        >
          {I18n.t(type === 'create' ? 'button.create' : 'button.save')}
        </ButtonWrapper>
        <span style={{ width: 20 }} />
        <ButtonWrapper
          onClick={() => {
            onBack();
          }}
        >
          {I18n.t('button.cancel')}
        </ButtonWrapper>
      </FooterButtonRowWrapper>
    );
  }
  return (
    <Row gutter={8} type="flex" justify="end" style={{ marginTop: 20 }}>
      <Col lg={12} md={0} sm={0} xs={24} />
      <Col lg={showModal ? 6 : 3} md={3} sm={24} xs={24}>
        <ButtonWrapper
          onClick={() => {
            handleSubmit();
          }}
          type="primary"
          loading={loading}
        >
          {I18n.t(type === 'create' ? 'button.create' : 'button.save')}
        </ButtonWrapper>
      </Col>
      <Col md={0} sm={0} xs={24} />
      <Col lg={showModal ? 6 : 3} md={3} sm={24} xs={24}>
        <ButtonWrapper
          onClick={() => {
            onBack();
          }}
        >
          {I18n.t('button.cancel')}
        </ButtonWrapper>
      </Col>
    </Row>
  );
};

ButtonRow.propTypes = {
  onBack: PropTypes.func,
  showModal: PropTypes.bool,
  loading: PropTypes.bool,
  handleSubmit: PropTypes.func,
  type: PropTypes.oneOf(['create', 'edit']),
};

ButtonRow.defaultProps = {
  type: 'edit',
};
export default ButtonRow;
