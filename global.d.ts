declare namespace NodeJS {
  interface Process {
    browser: boolean
  }
  export interface ProcessEnv {
    NEXT_PUBLIC_GA_ID: string
  }
}

declare let gtag:
  | (<T>(event: string, action: string, payload: T) => void)
  | undefined

