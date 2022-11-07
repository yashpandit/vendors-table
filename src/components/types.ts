export enum ApplicationCategory {
  EMAIL_TRACKING = 'Email Tracking Software',
  ACCOUNTING = 'Accounting Software',
  SCREEN_SHARING = 'Screen Sharing Software',
  VIDEO_CMS = 'Video CMS Software',
  DESKTOP_PUBLISHING = 'Desktop Publishing Software',
  APPOINTMENT_SCHEDULING = 'Appointment Scheduling Software',
  BLOG = 'Blog Software',
  CONVERSATIONAL_MARKETING = 'Conversational Marketing Software',
  CMS = 'Content Management Software',
}

export enum ContractStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export type Application = {
  name: string;
  vendor: string;
  category: ApplicationCategory;
  licensesBought?: number;
  appCoveredInContract: 'No' | 'Yes';
  billingFrequency?: string; // assumption
  paymentTerms?: string; // assumption
};

export type Vendor = {
  name: string;
  numApplications: number;
  applications: Application[];
  totalSpendsYearToDate: number;
  totalSpendsLastYear: number;
  activeContract: ContractStatus;
  source?: string;
  contractValue: number;
};

export default null;
