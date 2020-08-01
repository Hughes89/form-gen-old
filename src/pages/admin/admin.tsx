import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { useSettings, useForms } from '../../hooks'
import AdminLayout from '../../components/Admin/Layout/Layout'
import AdminSettings from './settings'
import AdminForm from './form'

const Admin: React.FC<{}> = ({ match, children }: any) => {
  const { navigation } = useForms()
  const { settings } = useSettings()

  return (
    <AdminLayout
      forms={navigation}
      companyName={settings?.companyName || 'Revelation Tattoo'}
    >
      <Switch>
        <Route path="/admin/form/:slug" component={AdminForm} />
        <Route path="*" component={AdminSettings} />
      </Switch>
    </AdminLayout>
  )
}

export default Admin
