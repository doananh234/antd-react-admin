import React from 'react';
import PublicLayout from '../../layout/PublicLayout';
import RegisterForm from '../../containers/Register';
import RegisterWrapper from './styles';

export default function Register() {
  return (
    <PublicLayout>
      <RegisterWrapper>
        <RegisterForm />
      </RegisterWrapper>
    </PublicLayout>
  );
}
