import 'reflect-metadata'
import { Start } from './main/config/app.config'
import { LoadEnvironmentVars } from './main/config/environment.config'

const main = async (): Promise<void> => {
  LoadEnvironmentVars()
  await Start()
}

main().then()
