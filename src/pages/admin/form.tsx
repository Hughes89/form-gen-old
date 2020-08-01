import React, { FC, useState, useEffect } from 'react'
import { Row, Col } from 'antd'

import { useForms } from '../../hooks'
import { Form } from '../../store/forms'
import AdminFormTitle from '../../components/Admin/Form/Title'

const AdminForm: FC = () => {
  const { forms } = useForms()
  const slug = window.location.pathname.split('/')[3]
  const [currentForm, setCurrentForm] = useState<Form>(forms[slug])

  return !!currentForm ? (
    <>
      <AdminFormTitle title={currentForm.title} preview={() => {}} />
      <Row gutter={[16, 16]}>
        <Col xs={24}>{/* <GeneralSettings settings={settings} /> */}</Col>
      </Row>
    </>
  ) : (
    <>No Exist</>
  )
}

export default AdminForm
