import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { APP_NAME, APP_TAGLINE, APP_DESCRIPTION } from '../lib/constants';

export default function Landing() {
  return (
    <>
      <Head title="Welcome">
        <meta name="description" content="QuickMed - Modern Clinic Management System" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
        {/* Header */}
        <header className="bg-[var(--quickmed-yellow)] border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-[var(--quickmed-blue)]">{APP_NAME}</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <Link href="/login" className="ml-6 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    Sign in
                  </Link>
                  <Link href="/register" className="ml-4 px-4 py-2 rounded-md text-sm font-medium bg-[var(--quickmed-orange)] text-white hover:bg-blue-700">
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="bg-[#fff7e8] flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 text-center">
            <div>
              <h1 className="text-4xl font-extrabold text-[var(--quickmed-blue)]">{APP_NAME}</h1>
              <p className="mt-2 text-xl text-[var(--quickmed-orange)]">{APP_TAGLINE}</p>
              <p className="mt-3 text-base text-gray-500">
                {APP_DESCRIPTION}
              </p>
            </div>
            
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900">Get Started</h2>
                    <p className="mt-1 text-sm text-gray-500">
                      Please sign in or create an account to access the system.
                    </p>
                  </div>
                  <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <Link href="/login" className="w-full">
                      <Button 
                        className="w-full justify-center" 
                        size="lg"
                      >
                        Sign in
                      </Button>
                    </Link>
                    <Link href="/register" className="w-full">
                      <Button 
                        className="w-full justify-center"
                        variant="outline" 
                        size="lg"
                      >
                        Create account
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-lg p-6 border border-gray-100">
                <div className="text-blue-600 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 text-left">For Patients</h3>
                <p className="mt-1 text-sm text-gray-500 text-left">
                  Schedule appointments, view medical records, and manage prescriptions.
                </p>
              </div>
              
              <div className="rounded-lg p-6 border border-gray-100">
                <div className="text-blue-600 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 text-left">For Healthcare Providers</h3>
                <p className="mt-1 text-sm text-gray-500 text-left">
                  Manage patients, update medical records, and coordinate care efficiently.
                </p>
              </div>
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="bg-[var(--quickmed-orange)] border-t border-gray-200">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between md:flex-row">
            <div className="flex-shrink-0">
              <p className="text-[var(--quickmed-blue)] text-sm">
                &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
              </p>
            </div>
            <nav className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-[var(--quickmed-blue)] hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="text-sm text-[var(--quickmed-blue)] hover:text-gray-900">Terms of Service</a>
              <a href="#" className="text-sm text-[var(--quickmed-blue)] hover:text-gray-900">Contact</a>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
} 