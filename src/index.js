import reportWebVitals from './reportWebVitals'
import store from './redux/store'
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
const renderPage = (store) => {
  root.render(
    <React.StrictMode>
      <App store={store.getState()}
           dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>
  )
}

renderPage(store)
store.callSubscriber(renderPage)
reportWebVitals()
