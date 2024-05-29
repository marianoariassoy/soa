import { Route, Switch } from 'wouter'
import Home from './pages/home'
import Servicios from './pages/servicios'
import Novedades from './pages/novedades'
import Error from './pages/error'

function App() {
  return (
    <Switch>
      <Route
        path='/'
        component={Home}
      />
      <Route
        path='/servicios/:id'
        component={Servicios}
      />
      <Route
        path='/novedades/:id'
        component={Novedades}
      />

      <Route component={Error} />
    </Switch>
  )
}

export default App
