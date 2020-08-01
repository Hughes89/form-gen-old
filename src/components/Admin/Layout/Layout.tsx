import React, { FC, ReactChildren, useState } from 'react'
import { Layout, Drawer } from 'antd'
import styled from 'styled-components'

import { INav } from '../../../hooks'
import AdminNavbar from './Navbar'
import AdminDrawer from './Drawer'

const { Content } = Layout

const LayoutWrapper = styled(({ primary, ...props }) => <Layout {...props} />)`
  height: 100%;
`

const TabletDrawer = styled(({ primary, ...props }) => <Drawer {...props} />)`
  @media (min-width: 992px) {
    width: 100%;
    display: none;
  }
`

const DesktopNav = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
`

interface IProps {
  forms: INav[]
  companyName: string
}

const AdminLayout: FC<IProps> = ({ forms, companyName, children }) => {
  const [visible, setVisible] = useState<boolean>(false)

  const onClose = () => setVisible(false)

  return (
    <LayoutWrapper>
      <AdminNavbar title={companyName} openDrawer={() => setVisible(true)} />
      <Layout>
        <TabletDrawer
          placement="left"
          closable={false}
          onClose={onClose}
          visible={visible}
          bodyStyle={{ padding: 0 }}
          width={240}
          title={companyName}
        >
          <AdminDrawer forms={forms} />
        </TabletDrawer>
        <DesktopNav>
          <AdminDrawer forms={forms} />
        </DesktopNav>
        <Layout style={{ height: '100%', overflowY: 'auto' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
            }}
          >
            {children as ReactChildren}
          </Content>
        </Layout>
      </Layout>
    </LayoutWrapper>
  )
}

export default AdminLayout
