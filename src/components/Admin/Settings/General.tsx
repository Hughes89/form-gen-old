import React, { FC } from 'react'
import { Form, Input, Button } from 'antd'
import styled from 'styled-components'

import { ISettings } from '../../../store/settings'
import AdminCard from '../Card'

const SubmitBtn = styled(Button)`
  margin-right: 8px;
`

interface IProps {
  settings?: ISettings
}

const GeneralSettings: FC<IProps> = ({ settings }) => {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log(values)
  }

  const onReset = () => {
    form.resetFields()
  }

  return (
    <AdminCard title="General">
      <Form
        layout="vertical"
        onFinish={onFinish}
        form={form}
        initialValues={settings}
      >
        <Form.Item
          name="companyName"
          label="Company Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="waiverDirName"
          label="Google Drive Directory"
          rules={[{ required: true }]}
          help="Directory within Google Drivve to store form PDFs. If it doesn't exist it will create it."
        >
          <Input />
        </Form.Item>
        <Form.Item style={{ paddingTop: '8px' }}>
          <SubmitBtn type="primary" htmlType="submit">
            Save
          </SubmitBtn>
          <Button onClick={onReset} htmlType="button">
            Reset
          </Button>
        </Form.Item>
      </Form>
    </AdminCard>
  )
}

export default GeneralSettings
