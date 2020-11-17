import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Button, Input } from 'antd';
import i18n from 'i18next';
import { useDispatch } from 'react-redux';
import { changePassword } from 'redux/auth/actions';

const ProfileDetail = () => {
  const [isShow, setIsShow] = useState(false);
  const [confirmLoading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onConfirm = () => {
    form.submit();
  };

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      setLoading(true);
      dispatch(
        changePassword({
          password: values.password,
        }),
      )
        .then(() => {
          setIsShow(false);
          setLoading(false);
          form.resetFields();
        })
        .catch(() => {
          setLoading(false);
        });
    });
  };

  return (
    <div>
      <Button type="secondary" onClick={() => setIsShow(true)}>
        {i18n.t('button.changePassword')}
      </Button>
      <Modal
        confirmLoading={confirmLoading}
        onCancel={() => setIsShow(false)}
        title={i18n.t('button.changePassword')}
        visible={isShow}
        onOk={onConfirm}
      >
        <Form onFinish={handleSubmit} layout="vertical" form={form}>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    'The two passwords that you entered do not match!',
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

ProfileDetail.propTypes = {
  record: PropTypes.object,
  isProfile: PropTypes.bool,
  handleClick: PropTypes.func,
  currentRole: PropTypes.string,
};

ProfileDetail.defaultProps = {
  isProfile: false,
  handleClick: () => {},
};

export default ProfileDetail;
