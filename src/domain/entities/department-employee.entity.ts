import mongoose, { Schema, type Document, type Model } from 'mongoose'

interface IDepartmentEmployee extends Document {
  name: string
}
const DepartmentEmployeeSchema = new Schema({
  date: { type: String, required: true },
  employee: { type: mongoose.Types.ObjectId, ref: 'Employee' },
  department: { type: mongoose.Types.ObjectId, ref: 'Department' }
})

export const DepartmentEmployee: Model<IDepartmentEmployee> = mongoose.model<IDepartmentEmployee>('DepartmentEmployee', DepartmentEmployeeSchema)
