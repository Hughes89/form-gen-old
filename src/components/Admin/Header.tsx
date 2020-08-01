import React, { FC, ReactChildren } from 'react'
import { Typography } from 'antd'
import styled from 'styled-components'

const { Title } = Typography

const StyledTitle = styled(Title)`
  font-weight: 400 !important;
  font-size: 2em !important;
`

const AdminHeader: FC = ({ children }) => (
  <StyledTitle level={2}>{children as ReactChildren}</StyledTitle>
)

export default AdminHeader
