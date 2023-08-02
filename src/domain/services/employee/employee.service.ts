import { EmployeeRepository } from '../../../data/repositories/employee/employee.repository'
import { type EmployeeDTO } from '../../../data/models/employee.model'

export namespace EmployeeService {
  export const getEmployee = async (page: number, offset: number): Promise<EmployeeDTO[]> => {
    try {
      return await EmployeeRepository.getEmployee(page, offset)
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }

  export const getEmployeeById = async (id: string): Promise<EmployeeDTO | null> => {
    try {
      return await EmployeeRepository.getEmployeeById(id)
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }
}
