import ClientComponent from './client-component';
import Data from './data';

const Supplier = ({ searchParams }: { searchParams: { page: string } }) => {
  return (
    <ClientComponent>
      <Data page={searchParams.page}></Data>
    </ClientComponent>
  );
};

export default Supplier;
