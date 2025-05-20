export const APP_NAME = 'QuickMed';
export const APP_TAGLINE = 'Modern Clinic Management System';
export const APP_DESCRIPTION = 'QuickMed is a comprehensive clinic management system designed to streamline healthcare operations.';

export const USER_TYPES = {
  PATIENT: 1,
  DOCTOR: 2,
  STAFF: 3,
  ADMIN: 4,
};

export const NAV_ITEMS = {
  PATIENT: [
    { name: 'Dashboard', href: '/patient/dashboard', icon: 'Home' },
    { name: 'Appointments', href: '/patient/appointments', icon: 'Calendar' },
    { name: 'Medical Records', href: '/patient/records', icon: 'FileText' },
    { name: 'Prescriptions', href: '/patient/prescriptions', icon: 'Pill' },
    { name: 'Invoices', href: '/patient/invoices', icon: 'Receipt' },
  ],
  DOCTOR: [
    { name: 'Dashboard', href: '/doctor/dashboard', icon: 'Home' },
    { name: 'Appointments', href: '/doctor/appointments', icon: 'Calendar' },
    { name: 'Patients', href: '/doctor/patients', icon: 'Users' },
    { name: 'Reports', href: '/doctor/reports', icon: 'ClipboardList' },
    { name: 'Prescriptions', href: '/doctor/prescriptions', icon: 'Pill' },
  ],
  STAFF: [
    { name: 'Dashboard', href: '/staff/dashboard', icon: 'Home' },
    { name: 'Appointments', href: '/staff/appointments', icon: 'Calendar' },
    { name: 'Patients', href: '/staff/patients', icon: 'Users' },
    { name: 'Doctors', href: '/staff/doctors', icon: 'Stethoscope' },
    { name: 'Invoices', href: '/staff/invoices', icon: 'Receipt' },
  ],
};

export const DASHBOARD_STATS = {
  PATIENT: [
    { name: 'Upcoming Appointments', icon: 'Calendar' },
    { name: 'Recent Prescriptions', icon: 'Pill' },
    { name: 'Pending Invoices', icon: 'Receipt' },
  ],
  DOCTOR: [
    { name: 'Today\'s Appointments', icon: 'Calendar' },
    { name: 'Pending Reports', icon: 'ClipboardList' },
    { name: 'Total Patients', icon: 'Users' },
  ],
  STAFF: [
    { name: 'Today\'s Appointments', icon: 'Calendar' },
    { name: 'New Patients', icon: 'UserPlus' },
    { name: 'Unpaid Invoices', icon: 'AlertTriangle' },
  ],
}; 