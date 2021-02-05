import dbg from 'lib/debug'

enum LogLevel {
  DEBUG = 0, // We need an information only for development.
  INFO = 1, // We need an information.
  WARN = 2, // It has an error, but the application can still run.
  ERROR = 3, // It has an error, so the application can't run anymore.
  NONE = 4,
}

let logLevel: LogLevel

switch (process.env.REACT_APP_ENV) {
  case 'development':
    logLevel = LogLevel.DEBUG
    break
  case 'production':
    logLevel = LogLevel.INFO
    break
  default:
    logLevel = LogLevel.DEBUG
    break
}

const pushLog = (args: any[]) => {
  dbg.lastLogs.push(JSON.stringify(args))

  if (dbg.lastLogs.length > 200) dbg.lastLogs.shift()
}

function debug(this: any, ...args: any[]) {
  if (logLevel > LogLevel.DEBUG) return
  console.log.call(this, ...args)

  pushLog(args)
}

function info(this: any, ...args: any[]) {
  if (logLevel > LogLevel.INFO) return
  console.info.call(this, ...args)

  pushLog(args)
}

function warn(this: any, ...args: any[]) {
  if (logLevel > LogLevel.WARN) return

  console.warn.call(this, ...args)
  pushLog(args)
}

function error(this: any, ...args: any[]) {
  if (logLevel > LogLevel.ERROR) return

  console.error.call(this, ...args)
  pushLog(args)
}

export default {
  debug,
  info,
  warn,
  error,
}
