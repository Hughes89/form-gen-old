import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import {
  FormOutlined,
  SettingOutlined,
  ArrowLeftOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import styled from 'styled-components'

import { INav } from '../../../hooks'

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

const getDefaultKey = (): string[] => {
  const path: string = window.location.pathname
  if (path.includes('/admin/form')) {
    const slug: string = path.split('/')[3]
    return [slug]
  } else {
    return ['settings']
  }
}

interface IProps {
  forms: INav[]
}

const AdminDrawer: FC<IProps> = ({ forms }) => {
  return (
    <SiderNav width={240} className="site-layout-background">
      <MenuWrapper>
        <TopMenu>
          <Menu
            mode="inline"
            defaultSelectedKeys={getDefaultKey()}
            defaultOpenKeys={['forms']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="forms" icon={<FormOutlined />} title="Forms">
              {forms.map(({ slug, title }: INav) => (
                <Menu.Item key={slug}>
                  <Link to={`/admin/form/${slug}`}>{title}</Link>
                </Menu.Item>
              ))}
            </SubMenu>
            <Menu.Item key="create" icon={<PlusOutlined />}>
              Create Form
            </Menu.Item>
            <Menu.Item key="settings" icon={<SettingOutlined />}>
              <Link to="/admin/settings">Settings</Link>
            </Menu.Item>
          </Menu>
        </TopMenu>
        <BottomMenu>
          <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item key="logout" icon={<ArrowLeftOutlined />}>
              <Link to="/">Customer Mode</Link>
            </Menu.Item>
          </Menu>
        </BottomMenu>
      </MenuWrapper>
    </SiderNav>
  )
}

export default AdminDrawer
