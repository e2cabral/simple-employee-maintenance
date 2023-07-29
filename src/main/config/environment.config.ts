import { config, type DotenvConfigOutput } from 'dotenv'
export const LoadEnvironmentVars = (): DotenvConfigOutput => config()
