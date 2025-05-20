import React from 'react';
import { Link } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Button } from '../ui/Button';
import { DASHBOARD_STATS } from '../../lib/constants';
import { formatDate, formatTime } from '../../lib/utils';

interface DoctorDashboardProps {
  user: {
    first_name: string;
    last_name: string;
    specialty?: string;
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

export function DoctorDashboard({ user, stats, appointments = [] }: DoctorDashboardProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Welcome, Dr. {user.first_name} {user.last_name}
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          {user.specialty ? `${user.specialty} Specialist` : 'Medical Professional'}
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 rounded-full bg-blue-100 p-3">
                {getIconByName(DASHBOARD_STATS.DOCTOR[0].icon)}
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">
                  {DASHBOARD_STATS.DOCTOR[0].name}
                </p>
                <p className="text-3xl font-bold text-gray-900">{stats.todaysAppointments || 0}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 rounded-full bg-amber-100 p-3">
                {getIconByName(DASHBOARD_STATS.DOCTOR[1].icon)}
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">
                  {DASHBOARD_STATS.DOCTOR[1].name}
                </p>
                <p className="text-3xl font-bold text-gray-900">{stats.pendingReports || 0}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 rounded-full bg-green-100 p-3">
                {getIconByName(DASHBOARD_STATS.DOCTOR[2].icon)}
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">
                  {DASHBOARD_STATS.DOCTOR[2].name}
                </p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalPatients || 0}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Today's appointments */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Today's Appointments</CardTitle>
          {/* <Button variant="outline" size="sm" as={Link} href="/doctor/appointments">
            View All
          </Button> */}
        </CardHeader>
        <CardContent>
          {appointments.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Patient
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {appointments.map((appointment) => (
                    <tr key={appointment.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {appointment.patientName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatTime(appointment.time)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          appointment.status === 'Confirmed' 
                            ? 'bg-green-100 text-green-800' 
                            : appointment.status === 'Pending' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {appointment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link
                          href={`/doctor/appointments/${appointment.id}`}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Start Session
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-6">
              <p className="text-gray-500">No appointments scheduled for today.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recent patients */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Patients</CardTitle>
          {/* <Button variant="outline" size="sm" as={Link} href="/doctor/patients">
            View All
          </Button> */}
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <p className="text-gray-500">No recent patient data to display.</p>
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
    case 'ClipboardList':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
      );
    case 'Users':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      );
    default:
      return null;
  }
} 