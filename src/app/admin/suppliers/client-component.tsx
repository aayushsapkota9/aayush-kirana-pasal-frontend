'use client';
import Heading from '@/src/components/heading/heading';
import { CustomPagination } from '@/src/components/mantine';
import React from 'react';

const ClientComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="table-top">
        <Heading name="Supplier"></Heading>
      </div>
      <div>
        {children}
        <CustomPagination totalPages={10} />
      </div>
    </div>
  );
};

export default ClientComponent;
