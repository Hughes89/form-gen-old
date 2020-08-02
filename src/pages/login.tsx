import React from 'react'
import { Row, Card, Col, Button, Typography } from 'antd'
import { GoogleCircleFilled } from '@ant-design/icons'
import styled from 'styled-components'

const { Title } = Typography

const LoginWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Header = styled(Title)`
  text-align: center;
  font-weight: 300 !important;
  margin-bottom: 1.5em;
`

const GoogleBtn = styled(Button)`
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-size: 0.75rem;
  background: #ffa500;
  border-color: #ffa500;

  &:hover {
    background-color: #ffa500; !important;
    border-color: #ffa500; !important;
  }
  &:focus {
    background-color: #ffa500; !important;
    border-color: #ffa500; !important;
  }
  &:active {
    background-color: #ffa500; !important;
    border-color: #ffa500; !important;
  }
`

const Login = () => {
  return (
    <LoginWrapper className="ant-layout">
      <Card>
        <Row>
          <Col xs={24}>
            <Header level={2}>Login to Continue</Header>
          </Col>
          <Col xs={24}>
            <a href="/api/auth/google">
              <GoogleBtn block type="primary" icon={<GoogleCircleFilled />}>
                login with google
              </GoogleBtn>
            </a>
          </Col>
        </Row>
      </Card>
    </LoginWrapper>
  )
}

export default Login
