import React from 'react'

import { useRecoilValue } from 'recoil'

import { Title } from 'components/Title'
import commonState from 'state/common'

const HomeContainer: React.FC = () => {
  const common = useRecoilValue(commonState)

  return <Title>{common.text}</Title>
}

export default HomeContainer
