import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import i18n from 'i18next';
import { Button, Form } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { updateCurrentUser } from 'redux/auth/actions';
import ProfileForm from '../Form';
import ProfileDetail from '../ProfileDetail';
import ProfileInfoStyles from './styles';

const ProfileInfo = () => {
  const [form] = Form.useForm();
  const { validateFields } = form;
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.data);
  const currentRole = useSelector((state) => state.auth.role);
  const handleSubmit = () => {
    validateFields().then(({ email, ...values }) => {
      dispatch(
        updateCurrentUser({
          displayName: values.displayName,
          avatar:
            values['customer.avatar'] ||
            'https://cdn2.vectorstock.com/i/thumb-large/02/71/profile-placeholder-default-avatar-girl-vector-23890271.jpg',
          phoneNumber: String(values['customer.phoneNumber']),
          note: values['customer.note'],
          facebookLink: values['customer.facebookLink'],
          birthday: values['customer.birthday']?.toISOString(),
          address: values['customer.address'],
          national: values['customer.national'],
        }),
      );
      setIsEdit(!isEdit);
    });
  };
  const handleClick = () => {
    setIsEdit(!isEdit);
  };
  return (
    <ProfileInfoStyles>
      {isEdit ? (
        <div className="edit-section">
          <Form initialValues={currentUser} form={form}>
            <ProfileForm record={currentUser} form={form} />
          </Form>
          <div className="action-section">
            <Button type="primary" onClick={handleSubmit}>
              {i18n.t('button.save')}
            </Button>
            <Button onClick={() => setIsEdit(!isEdit)}>
              {i18n.t('button.cancel')}
            </Button>
          </div>
        </div>
      ) : (
        <ProfileDetail
          record={currentUser}
          handleClick={handleClick}
          currentRole={currentRole}
          isProfile
        />
      )}
    </ProfileInfoStyles>
  );
};

ProfileInfo.propTypes = {};

export default ProfileInfo;
