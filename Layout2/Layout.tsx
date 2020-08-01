// import React, { FC, useState, useCallback, ReactChildren } from 'react'
// import { Layout } from 'antd'
// import styled from 'styled-components'

// import SideNav from './SideNav'
// import AdminHeader from './Header'
// import AdminContent from './Content'

// const LayoutWrapper = styled(({ primary, ...props }) => <Layout {...props} />)`
//   height: 100%;
// `
// interface IProps {
//   companyName: string
// }

// const AdminLayout: FC<IProps> = ({ companyName, children }) => {
//   const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

//   const toggleCollapsed = useCallback(() => {
//     setIsCollapsed((prevState: boolean): boolean => !prevState)
//   }, [setIsCollapsed])

//   return (
//     <LayoutWrapper>
//       <SideNav companyName={companyName} isCollapsed={isCollapsed} />
//       <Layout className="site-layout">
//         <AdminHeader
//           isCollapsed={isCollapsed}
//           toggleCollapsed={toggleCollapsed}
//         />
//         <AdminContent>{children as ReactChildren}</AdminContent>
//       </Layout>
//     </LayoutWrapper>
//   )
// }

// export default AdminLayout
