import React, { FC } from 'react'
import { Layout, Button, Menu, Dropdown } from 'antd'
import {
  LogoutOutlined,
  DownOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
import styled from 'styled-components'

const { Header } = Layout

const ColorHeader = styled(({ primary, ...props }) => <Header {...props} />)`
  padding: 0 1em;
  background-color: #2d3f4d;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #f0f2f5;
`

const LeftNav = styled.div`
  flex: 1;
`

const DrawerBtn = styled(Button)`
  color: #f0f2f5;
  @media (min-width: 992px) {
    display: none;
  }
`

const Title = styled.span`
  font-size: 1.25em;
`

const DropDownLink = styled.a`
  color: #fff;
`

const UserMenu = (
  <Menu>
    <Menu.Item key="logout" icon={<LogoutOutlined />}>
      Log Out
    </Menu.Item>
  </Menu>
)

interface IProps {
  title: string
  openDrawer: () => void
}

const AdminNavbar: FC<IProps> = ({ title, openDrawer }) => (
  <ColorHeader className="header">
    <LeftNav>
      <DrawerBtn
        size="large"
        type="link"
        onClick={openDrawer}
        icon={<MenuUnfoldOutlined />}
      />

      <Title>{title}</Title>
    </LeftNav>
    <div>
      <Dropdown overlay={UserMenu}>
        <DropDownLink
          className="ant-dropdown-link"
          style={{ color: '#fff' }}
          onClick={(e) => e.preventDefault()}
        >
          <UserOutlined /> <DownOutlined />
        </DropDownLink>
      </Dropdown>
    </div>
  </ColorHeader>
)

export default AdminNavbar
