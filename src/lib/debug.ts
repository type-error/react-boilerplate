export interface Debug {
  memory: string
  fps: number
  user: string
  track: string
  env: string
  userAgent: string
  href: string
  version: string
  lastLogs: string[]
}

interface WindowWithDebug extends Window {
  __debug: Debug
}

;((window as unknown) as WindowWithDebug).__debug = {
  memory: '',
  fps: 0,
  user: '',
  track: '',
  env: process.env.REACT_APP_ENV!,
  userAgent: window.navigator.userAgent,
  href: window.location.href,
  version: '',
  lastLogs: [],
}

const debug: Debug = ((window as unknown) as WindowWithDebug).__debug

export default debug
