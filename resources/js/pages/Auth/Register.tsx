import React from 'react';
import { Head } from '@inertiajs/react';
import { RegisterForm } from '../../components/auth/RegisterForm';
import { APP_NAME } from '../../lib/constants';

export default function Register() {
  return (
    <>
      <Head title="Create account" />
      
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">{APP_NAME}</h2>
          <h3 className="mt-2 text-center text-xl font-medium text-gray-900">Create a new account</h3>
          <p className="mt-2 text-center text-sm text-gray-600">
            Join our platform to manage your healthcare experience
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <RegisterForm />
          </div>
        </div>
      </div>
    </>
  );
} 