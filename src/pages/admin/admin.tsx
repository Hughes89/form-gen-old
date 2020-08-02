import React from 'react'
import { Switch, Redirect } from 'react-router-dom'

import { useSettings, useAuth, useForms } from '../../hooks'
import ProtectedRoute from '../../components/ProtectedRoute'
import AdminLayout from '../../components/Admin/Layout/Layout'
import AdminSettings from './settings'
import AdminForm from './form'

const Admin: React.FC<{}> = ({ match }: any) => {
  const { navigation } = useForms()
  const { settings } = useSettings()
  const { isAuthorized } = useAuth()

  return (
    <AdminLayout
      forms={navigation}
      companyName={settings?.companyName || 'Revelation Tattoo'}
    >
      <Switch>
        <ProtectedRoute
          exact
          path={`${match.path}/settings`}
          redirectTo="/"
          component={AdminSettings}
          isAllowed={isAuthorized}
        />
        <ProtectedRoute
          exact
          path={`${match.path}/form/:slug`}
          redirectTo="/"
          component={AdminForm}
          isAllowed={isAuthorized}
        />
        <Redirect exact from="*" to="/admin/settings" />
      </Switch>
    </AdminLayout>
  )
}

export default Admin
