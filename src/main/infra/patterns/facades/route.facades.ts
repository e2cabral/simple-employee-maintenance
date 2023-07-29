import { type FastifyInstance } from 'fastify'
import { EmployeeRoutes } from '../../../../presentation/routes/employee.routes'
import { DepartmentRoutes } from '../../../../presentation/routes/department.routes'

export const RouteRegistering = (app: FastifyInstance): void => {
  app
    .register(EmployeeRoutes, { prefix: '/v1' })
    .register(DepartmentRoutes, { prefix: '/v1' })
}
