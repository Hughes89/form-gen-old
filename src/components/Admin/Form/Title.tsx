import React, { FC } from 'react'
import { Row, Col, Space, Button, Dropdown, Menu, Select, Radio } from 'antd'
import { EditOutlined, EyeOutlined } from '@ant-design/icons'
import styled from 'styled-components'

import AdminHeader from '../Header'

const { Option } = Select

const ToggleWrapper = styled(({ primary, ...props }) => <Col {...props} />)`
  text-align: left;
  @media (min-width: 576px) {
    text-align: right;
  }
`

interface IProps {
  title: string
  preview: () => void
}

const AdminFormTitle: FC<IProps> = ({ title }) => {
  function onChange(e: any) {
    console.log(`radio checked:${e.target.value}`)
  }
  return (
    <Row>
      <Col xs={24} sm={19}>
        <AdminHeader>{title}</AdminHeader>
      </Col>
      <ToggleWrapper xs={24} sm={5}>
        <Radio.Group
          onChange={onChange}
          defaultValue="edit"
          buttonStyle="solid"
        >
          <Radio.Button value="edit">
            <Space>
              <EditOutlined /> Edit
            </Space>
          </Radio.Button>
          <Radio.Button value="preview">
            <Space>
              <EyeOutlined /> Preview
            </Space>
          </Radio.Button>
        </Radio.Group>
      </ToggleWrapper>
    </Row>
  )
}

export default AdminFormTitle
