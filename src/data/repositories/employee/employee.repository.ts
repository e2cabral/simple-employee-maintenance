import { Employee } from '../../../domain/entities/employee.entity'
import { EmployeeDTO } from '../../models/employee.model'

export namespace EmployeeRepository {
  export const getEmployee = async (page: number, offset: number): Promise<EmployeeDTO[]> => {
    try {
      const employees = await Employee
        .find()
        .skip((page - 1) * offset)
        .limit(offset)
        .exec()

      return employees
        .map((employee) => {
          return new EmployeeDTO(
            employee._id,
            employee.firstName,
            employee.lastName,
            employee.hireDate,
            employee.department,
            employee.phone,
            employee.address
          )
        })
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }
}
