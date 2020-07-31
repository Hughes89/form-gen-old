import React, { useState, useCallback, useEffect } from 'react'
import { Switch, Route, useLocation, useParams } from 'react-router-dom'

import { useForms, useSettings, INav } from '../../hooks'
import AdminSettings from './settings'
// import AdminForm from './form'
// import AdminLayout from '../../components/Admin/_Layout/Layout'
// import CreateDialog from '../../components/Admin/CreateDialog'
// import AdminToolbar from '../../components/Admin/Toolbar'
// import AdminLayout from '../../components/Admin/Layout/Layout'

const Admin: React.FC<{}> = ({ match, children }: any) => {
  const { navigation } = useForms()
  const location = useLocation()
  const { settings } = useSettings()
  const { currentForm, setCurrentForm } = useForms()

  return (
    <>
      ABC
      <Switch>
        {/* <Route path="/admin/form/:slug" component={AdminForm} /> */}
        <Route path="*" component={AdminSettings} />
      </Switch>
    </>
  )
}

export default Admin
