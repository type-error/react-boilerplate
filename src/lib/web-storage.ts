export const goalRevision: number = +process.env
  .REACT_APP_WEB_STORAGE_GOAL_REVISION!

export const getRevision = (): number => {
  if (!localStorage) return 0
  return +(localStorage.getItem('revision') || '0')
}

export const clear = () => {
  if (localStorage) {
    localStorage.clear()
    localStorage.setItem('revision', `${goalRevision}`)
  }
}

export const isNeedInvalidate = (): boolean => {
  const revision: string | null = localStorage.getItem('revision')
  const storedRevision: number = revision ? +revision : 0

  if (revision === null) {
    clear()
    return false
  } else if (goalRevision !== storedRevision) {
    return true
  } else {
    return false
  }
}
