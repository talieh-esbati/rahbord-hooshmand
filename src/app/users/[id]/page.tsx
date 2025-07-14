'use client';

import { useParams, notFound, useRouter } from 'next/navigation';
import { useGetUserByIdQuery } from '@/api/storeApi';
import { User, ArrowLeft } from 'lucide-react';
import UserPasswordField from '@/components/UserProfile/UserPasswordField';
import UserDetailField from '@/components/UserProfile/UserDetailField';
import LoadingScreen from '@/components/Spinner/LoadingScreen';

export default function UserProfile() {
  const params = useParams();
  const router = useRouter();
  const userId = Number(params.id);
  const { data: user, isLoading } = useGetUserByIdQuery(userId);

  if (isLoading) {
    return <LoadingScreen message="Loading User Profile ..." />;
  }

  if (!user) return notFound();

  const userFields = [
    { label: 'Full Name', value: `${user.name.firstname} ${user.name.lastname}` },
    { label: 'Email', value: user.email },
    { label: 'Phone', value: user.phone },
    { label: 'Username', value: `@${user.username}` },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] bg-gray-100 px-4 py-8 relative">
      <button
        onClick={() => router.push('/')}
        className="absolute top-6 left-6 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center"
        title="Back to Home"
        aria-label="Back to Home"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl border border-gray-200 p-6 sm:px-8 md:px-10">
        <div className="flex items-center mb-6 justify-center">
          <div className="bg-blue-100 text-blue-600 p-5 rounded-full shadow-md flex items-center justify-center">
            <User className="w-10 h-10" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">User Profile</h1>

        <div className="space-y-6 sm:space-y-5 text-gray-700 text-base sm:text-lg">
          {userFields.map(({ label, value }) => (
            <UserDetailField key={label} label={label}>
              {value}
            </UserDetailField>
          ))}

          <UserDetailField label="Password">
            <UserPasswordField password={user.password} />
          </UserDetailField>
        </div>
      </div>
    </div>
  );
}