import Heading from '@/src/components/heading/heading';
import { CustomPagination } from '@/src/components/mantine';

const Dashboard = async ({ params }: { params: any }) => {
  const { page } = params;

  // const searchParams = useSearchParams();
  // const page = searchParams.get('page');

  return (
    <div>
      <div className="table-top">
        <Heading name="Dashboard"></Heading>
        {/* <Data page={page}></Data> */}
      </div>
      <div>
        <CustomPagination totalPages={10} />
      </div>
    </div>
  );
};

export default Dashboard;
