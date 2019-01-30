import React from 'react';
import { t } from 'i18next';
import DashboardWrapper from './styles';
import PageTitle from '../../components/common/PageTitle';

export default function Dashboard() {
  return (
    <DashboardWrapper>
      <PageTitle>{t('dashboard.title')}</PageTitle>
      <div className="mainContent" />
    </DashboardWrapper>
  );
}
