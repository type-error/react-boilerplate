import React from 'react'

import { useRecoilValue } from 'recoil'

import { Title } from 'components/Title'
import commonState from 'state/common'

import http from 'lib/http'

const HomeContainer: React.FC = () => {
  const common = useRecoilValue(commonState)

  return (
    <>
      <Title>Hello, World!</Title>
      <h5>branch : {common.backVersion?.branch}</h5>
    </>
  )
}

export default HomeContainer
