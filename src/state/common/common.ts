import { atom } from 'recoil'

import { FrontVersion } from './model'
import { BackVersion } from './model'

export interface ICommon {
  frontVersion?: FrontVersion
  backVersion?: BackVersion
}

const commonState = atom<ICommon>({
  key: 'commonState',
  default: {},
})

export default commonState
