import React from 'react'
import { Switch, Route } from 'react-router-dom'

// import { useAuth } from '../hooks'
import Admin from './admin/admin'

const Routing: React.FC<{}> = () => {
  // const { isAuthenticated } = useAuth()

  return (
    <Switch>
      {/* <Route exact path="/" component={Customer} />
      <Route path="/form/:slug" component={Form} /> */}
      <Route path="/admin" component={Admin} />
      <Route path="*" render={() => <span>404</span>} />
    </Switch>
  )
}

export default Routing
