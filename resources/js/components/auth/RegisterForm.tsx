import React from 'react';
import { useForm, Link } from '@inertiajs/react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { USER_TYPES } from '../../lib/constants';

export function RegisterForm() {
  const { data, setData, errors, post, processing } = useForm({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    user_type: USER_TYPES.PATIENT,  // Default to patient registration
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/register');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          id="first_name"
          type="text"
          label="First Name"
          value={data.first_name}
          onChange={(e) => setData('first_name', e.target.value)}
          error={errors.first_name}
          required
          autoComplete="given-name"
        />
      </div>

      <div>
        <Input
          id="last_name"
          type="text"
          label="Last Name"
          value={data.last_name}
          onChange={(e) => setData('last_name', e.target.value)}
          error={errors.last_name}
          required
          autoComplete="family-name"
        />
      </div>

      <div>
        <Input
          id="email"
          type="email"
          label="Email address"
          value={data.email}
          onChange={(e) => setData('email', e.target.value)}
          error={errors.email}
          required
          autoComplete="email"
        />
      </div>

      <div>
        <Input
          id="password"
          type="password"
          label="Password"
          value={data.password}
          onChange={(e) => setData('password', e.target.value)}
          error={errors.password}
          required
          autoComplete="new-password"
        />
      </div>

      <div>
        <Input
          id="password_confirmation"
          type="password"
          label="Confirm Password"
          value={data.password_confirmation}
          onChange={(e) => setData('password_confirmation', e.target.value)}
          error={errors.password_confirmation}
          required
          autoComplete="new-password"
        />
      </div>

      <div>
        <label htmlFor="user_type" className="block text-sm font-medium text-gray-700">
          Register as
        </label>
        <select
          id="user_type"
          name="user_type"
          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          value={data.user_type}
          onChange={(e) => setData('user_type', Number(e.target.value))}
        >
          <option value={USER_TYPES.PATIENT}>Patient</option>
          <option value={USER_TYPES.DOCTOR}>Doctor</option>
        </select>
        {errors.user_type && (
          <p className="mt-1 text-sm text-red-600">{errors.user_type}</p>
        )}
      </div>

      <div>
        <Button
          type="submit"
          className="w-full"
          isLoading={processing}
        >
          Create account
        </Button>
      </div>

      <div className="text-center text-sm">
        <span className="text-gray-600">Already have an account? </span>
        <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
          Sign in
        </Link>
      </div>
    </form>
  );
} 