import mongoose, { Schema, type Document, type Model } from 'mongoose'

interface IEmployee extends Document {
  firstName: string
  lastName: string
  hireDate: string
  department: string[]
  phone: string
  address: string
}
const EmployeeSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  hireDate: { type: String, required: true },
  department: [{ type: mongoose.Types.ObjectId, ref: 'DepartmentEmployee' }],
  phone: { type: String, required: true, unique: true },
  address: { type: String, required: true }
})

export const Employee: Model<IEmployee> = mongoose.model<IEmployee>('Employees', EmployeeSchema)
