export interface BackVersion {
  hash: string
  branch: string
  builtAt: string
  builtBy: string
}

export interface FrontVersion {
  hash: string
  branch: string
  builtAt: string
  builtBy: string
}

export interface Async {
  busy: boolean
  loaded: boolean
  message: string
  loadedAt?: number
}
