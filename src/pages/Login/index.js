import React from 'react';
import PublicLayout from '../../layout/PublicLayout';
import LoginForm from '../../containers/Login';
import LoginWrapper from './styles';

export default function Login() {
  return (
    <PublicLayout>
      <LoginWrapper>
        <LoginForm />
      </LoginWrapper>
    </PublicLayout>
  );
}
