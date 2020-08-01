import React, { FC } from 'react'
import { Layout, Menu } from 'antd'
import {
  FormOutlined,
  SettingOutlined,
  ArrowLeftOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import styled from 'styled-components'

const { SubMenu } = Menu
const { Sider } = Layout

const SiderNav = styled(({ primary, ...props }) => <Sider {...props} />)`
  height: 100%;
`

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const TopMenu = styled.div`
  flex: 1;
`
const BottomMenu = styled.div`
  flex: 0;
`

const AdminDrawer: FC = () => {
  return (
    <SiderNav width={240} className="site-layout-background">
      <MenuWrapper>
        <TopMenu>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['forms']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="forms" icon={<FormOutlined />} title="Forms">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <Menu.Item key="create" icon={<PlusOutlined />}>
              Create Form
            </Menu.Item>
            <Menu.Item key="settings" icon={<SettingOutlined />}>
              Settings
            </Menu.Item>
          </Menu>
        </TopMenu>
        <BottomMenu>
          <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item key="logout" icon={<ArrowLeftOutlined />}>
              Customer Mode
            </Menu.Item>
          </Menu>
        </BottomMenu>
      </MenuWrapper>
    </SiderNav>
  )
}

export default AdminDrawer
