<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckUserRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string $role): Response
    {
        if (!$request->user()) {
            return redirect('/');
        }

        // Get role from user_type_id
        $userRole = $this->getRoleByTypeId($request->user()->user_type_id);

        // Check if the user has the required role
        if ($userRole !== strtolower($role)) {
            return redirect('/dashboard');
        }

        return $next($request);
    }

    /**
     * Get the role name based on user_type_id.
     */
    private function getRoleByTypeId(int $typeId): string
    {
        // Should match the USER_TYPES constants in constants.ts
        return match ($typeId) {
            1 => 'patient',
            2 => 'doctor',
            3 => 'staff',
            4 => 'admin',
            default => 'unknown',
        };
    }
} 