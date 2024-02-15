import { CustomTable } from '@/src/components/mantine';
import apiRoutes from '@/src/config/api.config';
import { HttpService } from '@/src/services';
import { addIndicesToElements } from '@/src/utils/addIndicesToElements';

const getTableData = async ({ page }: { page: string | null | number }) => {
  const http = new HttpService();
  const response: any = await http
    .service()
    .get(apiRoutes.suppliers.getAllSuppliers(`page=${page || 1}&limit=10`));
  const array = addIndicesToElements(response.data.result);
  return array;
};

const Data = async ({ page }: { page: string | null | number }) => {
  const tableData = await getTableData({ page });
  const columns = [
    { key: 'index', displayName: 'Index' },
    { key: 'name', displayName: 'Name' },
    { key: 'address', displayName: 'Address' },
    { key: 'phone', displayName: 'Phone' },
  ];
  return (
    <div>
      <CustomTable columns={columns} elements={tableData} />
    </div>
  );
};

export default Data;
