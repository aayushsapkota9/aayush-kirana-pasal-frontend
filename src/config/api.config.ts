const apiRoutes = {
  auth: {
    login: '/auth/login',
  },
  suppliers: {
    getAllSuppliers: (params?: string) => `/supplier?${params}`,
    suppliersById: (id: any) => `/supplier/${id}`,
    searchSuppliers: `/supplier/find/`,
  },
};

export default apiRoutes;
