import React, { FC, ReactElement } from 'react'

import { useAuth } from '../hooks'
import Loading from './Loading'

const Authentication: FC = ({ children }) => {
  const { hasChecked } = useAuth()

  return !hasChecked ? <Loading tip="Loading..." /> : (children as ReactElement)
}

export default Authentication
