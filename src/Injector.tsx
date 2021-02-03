import React from 'react'
import { HashRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

interface InjectorProps extends React.PropsWithChildren<{}> {}

const Injector: React.FC<InjectorProps> = ({ children }: InjectorProps) => {
  return (
    <RecoilRoot>
      <HashRouter>{children}</HashRouter>
    </RecoilRoot>
  )
}

export default Injector
