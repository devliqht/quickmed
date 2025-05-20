import React from 'react';
import { Link } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { DASHBOARD_STATS } from '../../lib/constants';

interface PatientDashboardProps {
  user: {
    name: string;
  };
  stats: {
    upcomingAppointments: number;
    prescriptions: number;
    pendingInvoices: number;
  };
}

export function PatientDashboard({ user, stats }: PatientDashboardProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Welcome back, {user.name}!
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Here's an overview of your healthcare information and upcoming activities.
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link href="/patient/appointments" className="block">
          <Card className="hover:bg-gray-50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 rounded-full bg-blue-100 p-3">
                  {getIconByName(DASHBOARD_STATS.PATIENT[0].icon)}
                </div>
                <div className="ml-5">
                  <p className="text-sm font-medium text-gray-500">
                    {DASHBOARD_STATS.PATIENT[0].name}
                  </p>
                  <p className="text-3xl font-bold text-gray-900">{stats.upcomingAppointments || 0}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/patient/prescriptions" className="block">
          <Card className="hover:bg-gray-50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 rounded-full bg-green-100 p-3">
                  {getIconByName(DASHBOARD_STATS.PATIENT[1].icon)}
                </div>
                <div className="ml-5">
                  <p className="text-sm font-medium text-gray-500">
                    {DASHBOARD_STATS.PATIENT[1].name}
                  </p>
                  <p className="text-3xl font-bold text-gray-900">{stats.prescriptions || 0}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/patient/invoices" className="block">
          <Card className="hover:bg-gray-50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 rounded-full bg-yellow-100 p-3">
                  {getIconByName(DASHBOARD_STATS.PATIENT[2].icon)}
                </div>
                <div className="ml-5">
                  <p className="text-sm font-medium text-gray-500">
                    {DASHBOARD_STATS.PATIENT[2].name}
                  </p>
                  <p className="text-3xl font-bold text-gray-900">{stats.pendingInvoices || 0}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Recent appointments */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Appointments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <p className="text-gray-500">You don't have any upcoming appointments.</p>
            <Link
              href="/patient/appointments/new"
              className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Book an Appointment
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Medical records */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Medical Records</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <p className="text-gray-500">No recent medical records available.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function getIconByName(iconName: string) {
  switch (iconName) {
    case 'Calendar':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      );
    case 'Pill':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a3 3 0 00-3 3v2H7a1 1 0 000 2h1v2a3 3 0 003 3h.5a.5.5 0 000-1H11a2 2 0 01-2-2v-2h2a1 1 0 000-2H9V7a2 2 0 012-2h.5a.5.5 0 000-1H11z" clipRule="evenodd" />
        </svg>
      );
    case 'Receipt':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M8 7v4a1 1 0 102 0V7a1 1 0 10-2 0zM8 15a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
      );
    default:
      return null;
  }
} 