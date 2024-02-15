'use client';
import Heading from '@/src/components/heading/heading';
import { CustomPagination } from '@/src/components/mantine';
import { useSearchParams } from 'next/navigation';
import Data from './data';

const Supplier = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get('page');

  return (
    <div>
      <div className="table-top">
        <Heading name="Supplier"></Heading>
      </div>
      <div>
        <Data page={page}></Data>
        <CustomPagination totalPages={10} />
      </div>
    </div>
  );
};

export default Supplier;
