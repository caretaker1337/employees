declare module "*/employees.gql" {
  import { TypedDocumentNode } from "@apollo/client";
  import { TEmployee } from "~/components/Example/Item/types";

  export const EmployeesQuery: TypedDocumentNode<{
    employees: { data: TEmployee[] };
  }>;
  export default EmployeesQuery;
}
