import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router'

export interface ProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean
  redirectTo: string
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
  if (!props.isAuthenticated) {
    const renderComponent = () => (
      <Redirect to={{ pathname: props.redirectTo }} />
    )

    return <Route {...props} component={renderComponent} render={undefined} />
  } else {
    return <Route {...props} />
  }
}

export default ProtectedRoute
