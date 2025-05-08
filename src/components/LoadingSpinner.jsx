import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <FaSpinner className="animate-spin text-2xl text-emerald-400" />
    </div>
  );
};

export default LoadingSpinner;