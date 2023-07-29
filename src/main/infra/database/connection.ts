import mongoose from 'mongoose'
export const Connect = async (): Promise<mongoose.Mongoose> => {
  const { HOST, PORT, DATABASE, DB_USER, DB_PASS } = process.env

  return await mongoose
    .connect(
      `mongodb://${HOST}:${PORT}/`,
      {
        user: DB_USER,
        pass: DB_PASS,
        dbName: DATABASE
      }
    )
}
