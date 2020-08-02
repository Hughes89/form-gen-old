import React, { FC, useCallback } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import {
  FormOutlined,
  SettingOutlined,
  ArrowLeftOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import styled from 'styled-components'

import { useAuth, INav } from '../../../hooks'

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
  const { clearAuthorization } = useAuth()
  const history = useHistory()

  const gotoCustomerMode = useCallback(() => {
    clearAuthorization()
    history.push('/')
  }, [history, clearAuthorization])

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
            <Menu.Item
              key="logout"
              onClick={gotoCustomerMode}
              icon={<ArrowLeftOutlined />}
            >
              Customer Mode
            </Menu.Item>
          </Menu>
        </BottomMenu>
      </MenuWrapper>
    </SiderNav>
  )
}

export default AdminDrawer
