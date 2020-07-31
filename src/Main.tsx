import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { Store } from 'redux'

import { ApplicationState } from './store'
import App from './App'
import Authentication from './components/Authentication'

// Any additional component props go here.
interface IProps {
  store: Store<ApplicationState>
}

// Create an intersection type of the component props and our Redux props.
const Main: FC<IProps> = ({ store }) => {
  return (
    <Provider store={store}>
      <Authentication>
        <App />
      </Authentication>
    </Provider>
  )
}

export default Main
