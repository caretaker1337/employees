import React from "react";
import { useQuery } from "@apollo/client";

import { Loader } from "~/components";
import EmployeesQuery from "./employees.gql";

const Employees: React.FC = () => {
  const { data, error, loading } = useQuery(EmployeesQuery);

  if (loading) return <Loader />;
  if (error) return <p>Cannot get data.</p>;
  if (data) {
    console.log(data["employees"]);
  }

  return <div>Render employees</div>;
};

export { Employees };
