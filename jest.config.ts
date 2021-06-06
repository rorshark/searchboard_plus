import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  clearMocks: true,
  testEnvironment: 'jsdom'
}

export default config
