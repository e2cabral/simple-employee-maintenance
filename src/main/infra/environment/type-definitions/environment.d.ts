declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HOST: string
      PORT: string
      DATABASE: string
      LOG_LEVEL: string
    }
  }
} export {}
