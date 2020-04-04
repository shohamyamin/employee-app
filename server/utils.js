function employeeToString(employee) {
  return `${employee.id} ${employee.name} ${employee.email} ${employee.role}`;
}

module.exports = { employeeToString };
