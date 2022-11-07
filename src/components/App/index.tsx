import { useState } from 'react';

import { applicationColumns, vendorColumns, vendorsData } from '../data';
import { Application, Vendor } from '../types';
import Table from '../Table';
import { Column, SortOrder } from '../Table/types';

import TableBody from '../Table/TableBody';
import sortTableData from '../Table/utils/sortTableData';
import TableHeader from '../Table/TableHeader';

function App() {
  const [vendors, setVendors] = useState<Vendor[]>([...vendorsData]);

  const sortVendors = (sortOrder: SortOrder, column: Column<Vendor>) => {
    const sortedVendors = [...vendors].sort(sortTableData<Vendor>(sortOrder, column));

    setVendors(sortedVendors);
  };

  const sortApplications =
    (vendorIndex: number) => (sortOrder: SortOrder, column: Column<Application>) => {
      const { applications } = vendors[vendorIndex];

      const sortedApplications = [...applications].sort(
        sortTableData<Application>(sortOrder, column),
      );

      setVendors([
        ...vendors.slice(0, vendorIndex),
        { ...vendors[vendorIndex], applications: sortedApplications },
        ...vendors.slice(vendorIndex + 1),
      ]);
    };

  const onEditVendors = (newRowData: Partial<Vendor>, rowIndex: number) => {
    setVendors([
      ...vendors.slice(0, rowIndex),
      { ...vendors[rowIndex], ...newRowData },
      ...vendors.slice(rowIndex + 1),
    ]);
  };

  const onEditApplications =
    (vendorIndex: number) => (newRowData: Partial<Application>, rowIndex: number) => {
      const { applications } = vendors[vendorIndex];

      const applicationsWithNewData = [
        ...applications.slice(0, rowIndex),
        { ...applications[rowIndex], ...newRowData },
        ...applications.slice(rowIndex + 1),
      ];

      setVendors([
        ...vendors.slice(0, vendorIndex),
        { ...vendors[vendorIndex], applications: applicationsWithNewData },
        ...vendors.slice(vendorIndex + 1),
      ]);
    };

  return (
    <div className='h-screen w-screen flex justify-center bg-gray-800 text-slate-200 font-poppins'>
      <Table className='w-3/4'>
        <TableHeader<Vendor> columns={vendorColumns} onSortChange={sortVendors} editable />
        <TableBody<Vendor>
          data={vendors}
          columns={vendorColumns}
          editable
          onEditSuccess={onEditVendors}
          subTableDataKey='applications'
          subTable={(applications, index) => {
            if ((applications as Application[]).length === 0) {
              return (
                <div className='p-4 flex justify-center'>
                  <span className='italic text-slate-300'>
                    No applications are being used by the vendor
                  </span>
                </div>
              );
            }

            return (
              <div className='p-4 w-full flex justify-center'>
                <Table className='w-full'>
                  <TableHeader<Application>
                    columns={applicationColumns}
                    onSortChange={sortApplications(index)}
                    editable
                  />
                  <TableBody<Application>
                    data={applications as Application[]}
                    columns={applicationColumns}
                    editable
                    onEditSuccess={onEditApplications(index)}
                  />
                </Table>
              </div>
            );
          }}
        />
      </Table>
    </div>
  );
}

export default App;
