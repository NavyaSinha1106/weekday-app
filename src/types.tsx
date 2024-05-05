export interface IJob {
  companyName: string;
  jdLink: string;
  jdUid: string;
  jobDetailsFromCompany: string;
  jobRole: string;
  location: string;
  logoUrl: string;
  maxExp: number;
  maxJdSalary: number;
  minExp: number;
  minJdSalary: number;
  salaryCurrencyCode: string;
}

export interface IJobsDetails {
  jdList: IJob[];
  totalCount: number;
}

export interface ISelectorData {
  key: string;
  value: string;
}

export interface ISingleSelectorProps {
  data: ISelectorData[];
  label: string;
  value?: ISelectorData;
  onChange: any;
}

export interface IMultiSelectorProps {
  data: ISelectorData[];
  label: string;
  value: ISelectorData[];
  onChange: any;
}

export interface ISearchBarProps {
  label: string;
  value: string;
  onChange: any;
}

export interface IFilters {
  jobRolesFilter: string[];
  experienceFilter: string;
  locationFilter: string[];
  minBaseFilter: string;
  companyNameFilter: string;
}

export interface IAppContextType {
  isSidenavOpen: any;
  setIsSidenavOpen: React.Dispatch<React.SetStateAction<Boolean>>;
  drawerWidth: any;
  jobRolesFilter: ISelectorData[];
  setJobRolesFilter: React.Dispatch<React.SetStateAction<ISelectorData[]>>;
  experienceFilter?: ISelectorData;
  setExperienceFilter: React.Dispatch<
    React.SetStateAction<ISelectorData | undefined>
  >;
  locationFilter: ISelectorData[];
  setLocationFilter: React.Dispatch<React.SetStateAction<ISelectorData[]>>;
  minBaseFilter?: ISelectorData;
  setMinBaseFilter: React.Dispatch<
    React.SetStateAction<ISelectorData | undefined>
  >;
  companyNameFilter: string;
  setCompanyNameFilter: React.Dispatch<React.SetStateAction<string>>;
}
