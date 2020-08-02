import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { useSettings, useForms } from '../../hooks'
import AdminLayout from '../../components/Admin/Layout/Layout'
import AdminSettings from './settings'
import AdminForm from './form'

const Admin: React.FC<{}> = ({ match }: any) => {
  const { navigation } = useForms()
  const { settings } = useSettings()

  return (
    <AdminLayout
      forms={navigation}
      companyName={settings?.companyName || 'Revelation Tattoo'}
    >
      <Switch>
        <Route
          exact
          path={`${match.path}/settings`}
          component={AdminSettings}
        />
        <Route exact path={`${match.path}/form/:slug`} component={AdminForm} />
        <Redirect exact from="*" to="/admin/settings" />
      </Switch>
    </AdminLayout>
  )
}

export default Admin
