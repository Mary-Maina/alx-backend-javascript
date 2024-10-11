import createEmployeesObject from './11-createEmployeesObject';

export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments: () => Object.keys(employeesList).length,
  };
}
