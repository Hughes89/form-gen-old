import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { useAuth } from '../hooks'
import ProtectedRoute from '../components/ProtectedRoute'
import Login from './login'
import Home from './home'
import Admin from './admin/admin'

const Routing: React.FC<{}> = () => {
  const { isAuthenticated } = useAuth()

  return (
    <Switch>
      <ProtectedRoute
        exact
        path="/"
        redirectTo="/login"
        component={Home}
        isAuthenticated={isAuthenticated}
      />
      <Route path="/login" component={Login} />
      <ProtectedRoute
        path="/admin"
        redirectTo="/login"
        isAuthenticated={isAuthenticated}
        component={Admin}
      />
      <Redirect from="*" to="/" />
    </Switch>
  )
}

export default Routing
