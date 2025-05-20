<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Middleware\CheckUserRole;

// Public routes
Route::get('/', function () {
    return Inertia::render('Landing');
})->name('home');

// Guest routes
Route::middleware('guest')->group(function () {
    Route::get('/login', function () {
        return Inertia::render('Auth/Login');
    })->name('login');
    
    Route::post('/login', [AuthenticatedSessionController::class, 'store']);
    
    Route::get('/register', function () {
        return Inertia::render('Auth/Register');
    })->name('register');
    
    Route::post('/register', [RegisteredUserController::class, 'store']);
});

// Authenticated routes
Route::middleware('auth')->group(function () {
    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');
    
    // Main dashboard - will redirect based on user type
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
        
    // Patient routes
    Route::middleware(['auth', CheckUserRole::class.':patient'])->prefix('patient')->group(function () {
        Route::get('/dashboard', function () {
            return Inertia::render('Patient/Dashboard', [
                'stats' => [
                    'upcomingAppointments' => 2,
                    'prescriptions' => 3,
                    'pendingInvoices' => 1,
                ],
            ]);
        })->name('patient.dashboard');
    });
    
    // Doctor routes
    Route::middleware(['auth', CheckUserRole::class.':doctor'])->prefix('doctor')->group(function () {
        Route::get('/dashboard', function () {
            return Inertia::render('Doctor/Dashboard', [
                'stats' => [
                    'todaysAppointments' => 5,
                    'pendingReports' => 2,
                    'totalPatients' => 120,
                ],
                'appointments' => [
                    [
                        'id' => 1,
                        'patientName' => 'John Doe',
                        'time' => '2023-06-15T09:00:00',
                        'status' => 'Confirmed',
                    ],
                    [
                        'id' => 2,
                        'patientName' => 'Jane Smith',
                        'time' => '2023-06-15T10:30:00',
                        'status' => 'Pending',
                    ],
                ],
            ]);
        })->name('doctor.dashboard');
    });
});

