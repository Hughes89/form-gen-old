import React, { FC } from 'react'
import { Row, Col } from 'antd'

import { useSettings } from '../../hooks'
import AdminHeader from '../../components/Admin/Header'
import GeneralSettings from '../../components/Admin/Settings/General'
import EmployeeCode from '../../components/Admin/Settings/EmployeeCode'

const AdminSettings: FC = () => {
  const { settings } = useSettings()

  return (
    <>
      <AdminHeader>Settings</AdminHeader>
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={14}>
          <GeneralSettings settings={settings} />
        </Col>
        <Col xs={24} lg={10}>
          <EmployeeCode />
        </Col>
      </Row>
    </>
  )
}

export default AdminSettings
