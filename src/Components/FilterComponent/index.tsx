import * as React from "react";
import Box from "@mui/material/Box";
import MultiSelect from "../MultiSelect";
import SingleSelect from "../SingleSelect";
import SearchBar from "../SearchBar";
import {
  ExperienceOptions,
  LocationOptions,
  MinSalaryOptions,
  RolesOptions,
} from "../../utils";
import { useAppContext } from "../../context";
import { ISelectorData } from "../../types";
import { useCallback, useEffect, useMemo, useState } from "react";

const FilterComponent: React.FC = () => {
  const {
    jobRolesFilter,
    experienceFilter,
    locationFilter,
    minBaseFilter,
    companyNameFilter,
    setJobRolesFilter,
    setExperienceFilter,
    setLocationFilter,
    setMinBaseFilter,
    setCompanyNameFilter,
  } = useAppContext();

  const [search, setSearch] = useState(companyNameFilter);

  /* Updates the state for job role filter based on input data */

  const onjobRoleFilterChange = (data: ISelectorData[]) => {
    setJobRolesFilter(data);
  };

  /* Updates the state for experience filter based on input data */

  const onExperienceFilterChange = (data: ISelectorData) => {
    setExperienceFilter(data);
  };

  /* Updates the state for location filter based on input data */

  const onLocationFilterChange = (data: ISelectorData[]) => {
    setLocationFilter(data);
  };

  /* Updates the state for salary filter based on input data */

  const onSalaryFilterChange = (data: ISelectorData) => {
    setMinBaseFilter(data);
  };

  /* Updates the state for company filter based on input data by debouncing the function to avoid re rendering  */

  const debounce = (func: any, wait: number) => {
    let timeout: NodeJS.Timeout;

    return (...args: any) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const handleSearch = useCallback(
    debounce((inputVal: string) => setCompanyNameFilter(inputVal), 500),
    []
  );

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 1,
      }}
    >
      <MultiSelect
        data={RolesOptions}
        label="Roles"
        value={jobRolesFilter}
        onChange={onjobRoleFilterChange}
      />
      <SingleSelect
        data={ExperienceOptions}
        label="Experience"
        value={experienceFilter}
        onChange={onExperienceFilterChange}
      />
      <MultiSelect
        data={LocationOptions}
        label="Location"
        value={locationFilter}
        onChange={onLocationFilterChange}
      />
      <SingleSelect
        data={MinSalaryOptions}
        label="Minimum Base Pay Salary"
        value={minBaseFilter}
        onChange={onSalaryFilterChange}
      />
      <SearchBar
        label="Search Company Name"
        value={search}
        onChange={(val: string) => {
          setSearch(val);
          handleSearch(val);
        }}
      />
    </Box>
  );
};

export default FilterComponent;
