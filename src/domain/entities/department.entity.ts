import mongoose, { Schema, type Document, type Model } from 'mongoose'

interface IDepartment extends Document {
  name: string
}
const DepartmentSchema = new Schema({
  name: { type: String, required: true },
  employee: [{ type: mongoose.Types.ObjectId, ref: 'DepartmentEmployee' }]
})

export const Department: Model<IDepartment> = mongoose.model<IDepartment>('Department', DepartmentSchema)
