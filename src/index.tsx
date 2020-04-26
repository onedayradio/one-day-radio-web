import React from 'react'
import ReactDOM from 'react-dom'

import { AppContainer } from './views'
import * as serviceWorker from './serviceWorker'
import { AppProviders } from './AppProviders'

ReactDOM.render(
  <AppProviders>
    <AppContainer />
  </AppProviders>,
  document.getElementById('root'),
)

if (process.env.NODE_ENV === 'production') {
  serviceWorker.register()
} else {
  serviceWorker.unregister()
}
