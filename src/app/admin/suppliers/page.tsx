import { CustomTable } from '@/src/components/mantine';
import apiRoutes from '@/src/config/api.config';
import { HttpService } from '@/src/services';
import { addIndicesToElements } from '@/src/utils/addIndicesToElements';
import SupplierClientComponent from './SupplierClient';
const getTableData = async ({ page }: { page: string | null | number }) => {
  const http = new HttpService();
  const response: any = await http
    .service()
    .get(apiRoutes.suppliers.getAllSuppliers(`page=${page || 1}&limit=10`));
  const array = addIndicesToElements(response.data.result);
  return array;
};
const Supplier = async ({
  searchParams,
}: {
  searchParams: { page: string };
}) => {
  const tableData = await getTableData({ page: searchParams.page });
  const columns = [
    { key: 'index', displayName: 'Index' },
    { key: 'name', displayName: 'Name' },
    { key: 'address', displayName: 'Address' },
    { key: 'phone', displayName: 'Phone' },
  ];
  return (
    <SupplierClientComponent>
      <CustomTable columns={columns} elements={tableData} />
    </SupplierClientComponent>
  );
};

export default Supplier;
