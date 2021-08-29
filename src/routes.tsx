import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

import Home from './pages/Home'
import Canvas from './pages/Canvas'
import Draw from './pages/Canvas/Draw/index.jsx'
import Circles from './pages/Canvas/Circles/index.jsx'

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/canvas" component={Canvas} />
        <Route path="/draw" exact component={Draw} />
        <Route path="/circles" exact component={Circles} />
      </Switch>
    </BrowserRouter>
  )
}