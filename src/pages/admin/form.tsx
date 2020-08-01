import React, { FC, useState, useEffect } from 'react'
import { Row, Col, Button } from 'antd'

import { useSettings, useForms } from '../../hooks'
import AdminHeader from '../../components/Admin/Header'
import AdminFormTitle from '../../components/Admin/Form/Title'

const AdminForm: FC = () => {
  const [title, setTitle] = useState<string>('')
  const { currentForm } = useForms()
  console.log(currentForm)

  useEffect(() => {
    if (currentForm) {
      setTitle(currentForm?.title || '')
    }
  }, [currentForm])

  return (
    <>
      <AdminFormTitle title={title} preview={() => {}} />
      <Row gutter={[16, 16]}>
        <Col xs={24}>{/* <GeneralSettings settings={settings} /> */}</Col>
      </Row>
    </>
  )
}

export default AdminForm
