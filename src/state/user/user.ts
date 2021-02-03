import { atom } from 'recoil'

interface User {
  name: string
  age: number
  address: string
}

const userState = atom<User>({
  key: 'userState',
  default: { name: '', age: 0, address: '' },
})

export default userState
