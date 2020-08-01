// import React, { FC } from 'react'
// import { Layout, Menu, Typography, Avatar, Row, Col } from 'antd'
// import styled from 'styled-components'
// import {
//   FormOutlined,
//   SettingOutlined,
//   LogoutOutlined,
//   HomeOutlined,
// } from '@ant-design/icons'

// const { Sider } = Layout
// const { SubMenu } = Menu
// const { Title } = Typography

// const Logo = styled.div`
//   // height: 32px;
//   // margin: 16px;
//   height: 60px;
//   padding: 0 0 0 19px;
//   display: flex;
//   align-items: center;
//   color: #fff !important;
//   font-size: 20px;
//   margin-top: 18px;
// `

// const MenuWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100%;
// `

// const TopMenu = styled.div`
//   flex: 1;
// `
// const BottomMenu = styled.div`
//   flex: 0;
// `

// const MenuCount: FC<{ title: string }> = ({ title }) => {
//   return <span>{title}</span>
// }

// interface IProps {
//   companyName: string
//   isCollapsed: boolean
// }

// const SideNav: FC<IProps> = ({ companyName, isCollapsed }) => {
//   return (
//     <Sider trigger={null} collapsible collapsed={isCollapsed}>
//       <Logo className="logo">
//         {/* {companyName} */}
//         {!isCollapsed ? companyName : companyName[0].toUpperCase()}
//       </Logo>
//       <MenuWrapper>
//         <TopMenu>
//           <Menu
//             mode="inline"
//             theme="dark"
//             defaultSelectedKeys={['1']}
//             defaultOpenKeys={['forms']}
//             style={{ height: '100%', borderRight: 0 }}
//           >
//             {/* <Menu.Item key="customer" icon={<HomeOutlined />}>
//               Customer Mode
//             </Menu.Item> */}
//             <SubMenu key="forms" icon={<FormOutlined />} title="Forms">
//               <Menu.Item key="1">option1</Menu.Item>
//               <Menu.Item key="2">option2</Menu.Item>
//               <Menu.Item key="3">option3</Menu.Item>
//               <Menu.Item key="4">option4</Menu.Item>
//             </SubMenu>
//             <Menu.Item key="settings" icon={<SettingOutlined />}>
//               Settings
//             </Menu.Item>
//           </Menu>
//         </TopMenu>
//         <BottomMenu>
//           <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}>
//             <Menu.Item key="logout" icon={<LogoutOutlined />}>
//               Log Out
//             </Menu.Item>
//           </Menu>
//         </BottomMenu>
//       </MenuWrapper>
//     </Sider>
//   )
// }

// export default SideNav
