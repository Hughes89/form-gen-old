import React, { FC, ReactChildren } from 'react'
import { Card } from 'antd'

interface IProps {
  title: string
}

const AdminCard: FC<IProps> = ({ title, children }) => {
  return <Card title={title}>{children as ReactChildren}</Card>
}

export default AdminCard
