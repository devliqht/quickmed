import React, { useState } from 'react';
import { Head, usePage } from '@inertiajs/react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { APP_NAME } from '../../lib/constants';

interface AppLayoutProps {
  title?: string;
  children: React.ReactNode;
}

export function AppLayout({ title, children }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { auth } = usePage().props as any;

  return (
    <>
      <Head title={title ? `${title} - ${APP_NAME}` : APP_NAME} />
      
      <div className="h-screen bg-gray-50 flex">
        <Sidebar 
          open={sidebarOpen} 
          setOpen={setSidebarOpen} 
          user={auth?.user}
        />

        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar 
            onMenuButtonClick={() => setSidebarOpen(true)} 
            user={auth?.user}
          />
          
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}