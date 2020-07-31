import React, { FC, ReactElement } from 'react'

import { useAuth } from '../hooks'

const Authentication: FC = ({ children }) => {
  const { isAuthenticated } = useAuth()

  return !isAuthenticated ? <>Loading...</> : (children as ReactElement)
}

export default Authentication
