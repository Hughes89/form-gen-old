// import React, { FC } from 'react'
// import { Layout, Button } from 'antd'
// import {
//   MenuOutlined,
//   ArrowRightOutlined,
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
// } from '@ant-design/icons'
// import styled from 'styled-components'

// const { Header } = Layout

// const Navbar = styled(({ primary, ...props }) => <Header {...props} />)`
//   padding: 0;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `

// const LeftNav: FC = styled.div`
//   flex: 1;
// `

// const RightNav: FC = styled.div``

// const Title = styled.span`
//   font-size: 1.25em;
// `
// const CustomerBtn = styled(Button)`
//   color: #f0f2f5;
// `

// interface IProps {
//   isCollapsed: boolean
//   toggleCollapsed: () => void
// }

// const MenuIcon: FC<{ isCollapsed: boolean }> = ({ isCollapsed }) =>
//   isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />

// const AdminHeader: FC<IProps> = ({ isCollapsed, toggleCollapsed }) => (
//   <Navbar className="site-layout-background">
//     <LeftNav>
//       <Button
//         size="large"
//         type="link"
//         onClick={toggleCollapsed}
//         icon={<MenuIcon isCollapsed={isCollapsed} />}
//       />

//       <Title>Revelation Tattoo</Title>
//     </LeftNav>
//     <RightNav>
//       <CustomerBtn type="link">
//         Customer Mode <ArrowRightOutlined />
//       </CustomerBtn>
//     </RightNav>
//   </Navbar>
// )

// export default AdminHeader
