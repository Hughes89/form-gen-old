import React, { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routing from './pages'

const App: FC<{}> = () => {
  return (
    <Router>
      <Routing />
    </Router>
  )
}

export default App
