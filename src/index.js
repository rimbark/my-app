import reportWebVitals from './reportWebVitals'
import { store } from './redux/redux-store'
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderPage = (state) => {
  debugger
  root.render(
    <React.StrictMode>
      <App state={state}/>
    </React.StrictMode>
  )
}

renderPage(store.getState())

store.subscribe(() => {
  let state = store.getState()
  renderPage(state)
})

reportWebVitals()
