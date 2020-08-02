import React, { FC, useEffect, useState } from 'react'
import { Modal, Button, Form, Input } from 'antd'

import { useAuth } from '../hooks'
import { useHistory } from 'react-router-dom'

const validateMessages = {
  /* eslint-disable no-template-curly-in-string */
  required: '${label} is required!',
}

interface IProps {
  open: boolean
  cancel: () => void
}

const AuthorizationModal: FC<IProps> = ({ open, cancel }) => {
  const [form] = Form.useForm()
  const [error, setError] = useState<string>('')
  const history = useHistory()
  const {
    isAuthorized,
    isCheckingAuthorization,
    authorizationErrors,
    checkAuthorizationCode,
    clearAuthorization,
  } = useAuth()

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        checkAuthorizationCode(values.code)
      })
      .catch((info) => {
        setError(info.errorFields[0].errors[0])
      })
  }

  const handleCancel = () => {
    form.resetFields()
    clearAuthorization()
    setError('')
    cancel()
  }

  useEffect(() => {
    if (open && isAuthorized) {
      history.push('/admin/settings')
    }
  }, [open, isAuthorized, history])

  useEffect(() => {
    if (authorizationErrors) {
      setError(authorizationErrors)
    }
  }, [authorizationErrors, setError])

  return (
    <Modal
      title="Enter Authorization Code to Continue"
      visible={open}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={isCheckingAuthorization}
          onClick={handleOk}
        >
          Submit
        </Button>,
      ]}
    >
      <Form
        layout="vertical"
        validateMessages={validateMessages}
        form={form}
        name="auth-code"
        preserve={false}
      >
        <Form.Item
          name="code"
          label="Authorization Code"
          rules={[{ required: true }]}
          validateStatus={!!error.length ? 'error' : ''}
          help={!!error.length && error}
        >
          <Input type="password" />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AuthorizationModal
