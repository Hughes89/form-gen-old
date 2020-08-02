import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router'

export interface ProtectedRouteProps extends RouteProps {
  isAllowed: boolean
  redirectTo: string
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
  if (!props.isAllowed) {
    const renderComponent = () => (
      <Redirect to={{ pathname: props.redirectTo }} />
    )

    return <Route {...props} component={renderComponent} render={undefined} />
  } else {
    return <Route {...props} />
  }
}

export default ProtectedRoute
