import { atom } from 'recoil'

export interface ISession {
  token: string
}

const sessionState = atom<ISession>({
  key: 'sessionState',
  default: { token: 'tokentokentoken' },
})

export default sessionState
