import mongoose from 'mongoose'
export const Connect = async (): Promise<mongoose.Mongoose> => {
  const { HOST, PORT, DATABASE } = process.env

  return await mongoose.connect(`${HOST}:${PORT}/${DATABASE}`)
}
