import './App.css'
import HomePage from '../src/pages/homepage/homepage.component'
import { Switch, Route } from 'react-router-dom'
import ShopPage from '../src/pages/shop/shop.component'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App

// rfce - shortcut to to create templete Function()
