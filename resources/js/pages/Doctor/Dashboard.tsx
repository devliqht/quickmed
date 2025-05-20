import React from 'react';
import { Head } from '@inertiajs/react';
import { AppLayout } from '../../components/layout/AppLayout';
import { DoctorDashboard } from '../../components/dashboard/DoctorDashboard';

interface DashboardProps {
  auth: {
    user: {
      first_name: string;
      last_name: string;
      specialty?: string;
    };
  };
  stats: {
    todaysAppointments: number;
    pendingReports: number;
    totalPatients: number;
  };
  appointments?: {
    id: number;
    patientName: string;
    time: string;
    status: string;
  }[];
}

export default function Dashboard({ auth, stats, appointments }: DashboardProps) {
  return (
    <AppLayout title="Dashboard">
      <Head>
        <title>Doctor Dashboard</title>
      </Head>
      
      <DoctorDashboard 
        user={auth.user} 
        stats={stats} 
        appointments={appointments}
      />
    </AppLayout>
  );
} 