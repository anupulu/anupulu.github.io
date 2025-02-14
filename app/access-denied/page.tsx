import React from 'react';
import { Card } from '@/components/ui/card';

const AccessDenied = () => {
  return (
    <main className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Card className="p-6 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>
          <p className="text-text-dark mb-2">You do not have permission to access this page.</p>
          <p className="text-text-dark">Please contact the administrator if you believe this is an error.</p>
        </Card>
      </div>
    </main>
  );
};

export default AccessDenied;