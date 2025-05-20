import React, { useEffect } from 'react';
import { Head, usePage, router } from '@inertiajs/react';
import { USER_TYPES } from '../lib/constants';

interface DashboardProps {
  auth: {
    user: {
      name?: string;
      first_name: string;
      last_name: string;
      user_type_id: number;
    };
  };
}

export default function Dashboard({ auth }: DashboardProps) {
  const { user } = auth;
  
  useEffect(() => {
    // Redirect based on user type
    if (user) {
      switch (user.user_type_id) {
        case USER_TYPES.PATIENT:
          router.visit('/patient/dashboard');
          break;
        case USER_TYPES.DOCTOR:
          router.visit('/doctor/dashboard');
          break;
        case USER_TYPES.STAFF:
        case USER_TYPES.ADMIN:
          router.visit('/staff/dashboard');
          break;
        default:
          // If user type is unknown, redirect to the landing page
          console.log('Unknown user type:', user.user_type_id);
          router.visit('/');
      }
    }
  }, [user]);

  return (
    <>
      <Head title="Redirecting..." />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-xl font-medium text-gray-900">Redirecting to your dashboard...</h2>
          <p className="mt-2 text-sm text-gray-500">Please wait while we direct you to the appropriate area.</p>
          <div className="mt-4">
            <svg className="animate-spin h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
} 