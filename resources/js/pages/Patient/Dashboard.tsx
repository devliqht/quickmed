import React from 'react';
import { Head } from '@inertiajs/react';
import { AppLayout } from '../../components/layout/AppLayout';
import { PatientDashboard } from '../../components/dashboard/PatientDashboard';

interface DashboardProps {
  auth: {
    user: {
      name: string;
    };
  };
  stats: {
    upcomingAppointments: number;
    prescriptions: number;
    pendingInvoices: number;
  };
}

export default function Dashboard({ auth, stats }: DashboardProps) {
  return (
    <AppLayout title="Dashboard">
      <Head>
        <title>Patient Dashboard</title>
      </Head>
      
      <PatientDashboard user={auth.user} stats={stats} />
    </AppLayout>
  );
} 