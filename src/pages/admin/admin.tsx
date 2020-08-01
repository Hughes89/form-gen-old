import React, { useState, useCallback, useEffect } from 'react'
import { Switch, Route, useLocation, useParams } from 'react-router-dom'

import { useSettings, useForms } from '../../hooks'
import AdminLayout from '../../components/Admin/Layout/Layout'
import AdminSettings from './settings'
import AdminForm from './form'

const Admin: React.FC<{}> = ({ match, children }: any) => {
  const [title, setTitle] = useState<string>('')
  const { navigation } = useForms()
  const location = useLocation()
  const { settings } = useSettings()
  const { currentForm, setCurrentForm } = useForms()

  useEffect(() => {
    if (location.pathname === '/admin') {
      setTitle('Settings')
      // setCurrentPage('settings')
    } else {
      const slug: string = location.pathname.split('/')[3]
      setCurrentForm(slug)
      // setCurrentPage(slug)
    }
  }, [location, setTitle])

  return (
    <AdminLayout companyName={settings?.companyName || 'Revelation Tattoo'}>
      <Switch>
        <Route path="/admin/form/:slug" component={AdminForm} />
        <Route path="*" component={AdminSettings} />
      </Switch>
    </AdminLayout>
  )
}

export default Admin
