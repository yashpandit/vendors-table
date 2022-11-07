import { Column } from './Table/types';
import { Application, ApplicationCategory, ContractStatus, Vendor } from './types';

export const applications: Application[] = [
  {
    name: 'Boomerang for gmail',
    vendor: 'Emma Inc',
    category: ApplicationCategory.EMAIL_TRACKING,
    appCoveredInContract: 'No',
  },
  {
    name: 'QuickBooks',
    vendor: 'Intuit',
    category: ApplicationCategory.ACCOUNTING,
    appCoveredInContract: 'No',
  },
  {
    name: 'Loom',
    vendor: 'Loom',
    category: ApplicationCategory.VIDEO_CMS,
    appCoveredInContract: 'No',
  },
  {
    name: 'Lucidpress',
    vendor: 'Lucid Software Inc',
    category: ApplicationCategory.DESKTOP_PUBLISHING,
    appCoveredInContract: 'No',
  },
  {
    name: 'Calendly',
    vendor: 'Calendly',
    category: ApplicationCategory.APPOINTMENT_SCHEDULING,
    appCoveredInContract: 'No',
  },
  {
    name: 'WordPress',
    vendor: 'WordPress Foundation',
    category: ApplicationCategory.BLOG,
    appCoveredInContract: 'No',
  },
  {
    name: 'Hubspot',
    vendor: 'Hubspot',
    category: ApplicationCategory.CONVERSATIONAL_MARKETING,
    appCoveredInContract: 'No',
  },
  {
    name: 'eBay',
    vendor: 'Bimser International',
    category: ApplicationCategory.CMS,
    appCoveredInContract: 'No',
  },
];

export const vendorsData: Vendor[] = [
  {
    name: 'harish2junevendor',
    numApplications: 0,
    contractValue: 1,
    totalSpendsLastYear: 50000,
    totalSpendsYearToDate: 50000,
    source: 'QuickBooks',
    activeContract: ContractStatus.INACTIVE,
    applications: [],
  },
  {
    name: 'Box',
    numApplications: 8,
    contractValue: 10000,
    totalSpendsLastYear: 2176,
    totalSpendsYearToDate: 2176,
    activeContract: ContractStatus.ACTIVE,
    applications,
  },
  {
    name: 'Apple Store',
    numApplications: 4,
    contractValue: 1,
    totalSpendsLastYear: 1212,
    totalSpendsYearToDate: 1212,
    source: 'Expensify',
    activeContract: ContractStatus.INACTIVE,
    applications: applications.slice(0, 4),
  },
  {
    name: 'newvendor',
    numApplications: 0,
    contractValue: 0,
    totalSpendsLastYear: 1000,
    totalSpendsYearToDate: 1000,
    source: 'QuickBooks',
    activeContract: ContractStatus.INACTIVE,
    applications: [],
  },
  {
    name: 'Verizon',
    numApplications: 1,
    contractValue: 1,
    totalSpendsLastYear: 333,
    totalSpendsYearToDate: 333,
    source: 'Excel',
    activeContract: ContractStatus.INACTIVE,
    applications: applications.slice(0, 1),
  },
  {
    name: 'V2 Vikas Vashistha',
    numApplications: 0,
    contractValue: 13434,
    totalSpendsLastYear: 324,
    totalSpendsYearToDate: 324,
    source: 'QuickBooks',
    activeContract: ContractStatus.INACTIVE,
    applications: [],
  },
  {
    name: 'CloudEagle',
    numApplications: 1,
    contractValue: 12,
    totalSpendsLastYear: 200,
    totalSpendsYearToDate: 200,
    activeContract: ContractStatus.ACTIVE,
    applications: applications.slice(0, 1),
  },
  {
    name: 'Verizon Wireless',
    numApplications: 1,
    contractValue: 0,
    totalSpendsLastYear: 200,
    totalSpendsYearToDate: 200,
    source: 'Expensify',
    activeContract: ContractStatus.INACTIVE,
    applications: applications.slice(0, 1),
  },
  {
    name: 'Dec14Test4',
    numApplications: 0,
    contractValue: 0,
    totalSpendsLastYear: 150,
    totalSpendsYearToDate: 150,
    source: 'Excel',
    activeContract: ContractStatus.INACTIVE,
    applications: [],
  },
];

export const vendorColumns: Column<Vendor>[] = [
  {
    key: 'name',
    header: 'vendor name',
  },
  {
    key: 'numApplications',
    header: '# of applications',
  },
  {
    key: 'totalSpendsYearToDate',
    header: 'total spends (ytd)',
  },
  {
    key: 'totalSpendsLastYear',
    header: 'total spends (last 12 months)',
  },
  {
    key: 'source',
    header: 'source',
  },
  {
    key: 'contractValue',
    header: 'contract value',
  },
  {
    key: 'activeContract',
    header: 'active contract',
  },
];

export const applicationColumns: Column<Application>[] = [
  {
    key: 'name',
    header: 'application name',
  },
  {
    key: 'vendor',
    header: 'vendor',
  },
  {
    key: 'category',
    header: 'category',
  },
  {
    key: 'licensesBought',
    header: 'licenses bought',
  },
  {
    key: 'appCoveredInContract',
    header: 'app covered in contract',
  },
  {
    key: 'billingFrequency',
    header: 'billing frequency',
  },
  {
    key: 'paymentTerms',
    header: 'payment terms',
  },
];

export default null;
