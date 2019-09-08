import React from 'react';
import PublicLayout from '../../layout/PublicLayout';
import InviteForm from '../../containers/Invite';
import InviteWrapper from './styles';

export default function Register() {
  return (
    <PublicLayout>
      <InviteWrapper>
        <InviteForm />
      </InviteWrapper>
    </PublicLayout>
  );
}
