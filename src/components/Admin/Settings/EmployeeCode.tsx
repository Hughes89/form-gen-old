import React, { FC } from 'react'
import { Form, Input, Button } from 'antd'

import AdminCard from '../Card'

const validateMessages = {
  /* eslint-disable no-template-curly-in-string */
  required: '${label} is required!',
}

const EmployeeCode: FC = () => {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log(values)
  }

  return (
    <AdminCard title="Authorization Code">
      <Form
        layout="vertical"
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name="current"
          label="Current Code"
          rules={[{ required: true }]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item name="new" label="New Code" rules={[{ required: true }]}>
          <Input type="password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" block htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </AdminCard>
  )
}

export default EmployeeCode
