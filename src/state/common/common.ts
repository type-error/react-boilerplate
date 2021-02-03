import { atom } from 'recoil'

export interface ITitle {
  text: string
}

const commonState = atom<ITitle>({
  key: 'commonState',
  default: { text: 'Hello, World!' },
})

export default commonState
