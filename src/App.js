import './App.css'

import Header from './components/Header'

import Home from './components/Home'

import About from './components/About'

import Contact from './components/Contact'

import NotFound from './components/NotFound'

import {Switch, Route} from 'react-router-dom'

const App = () => {
  return (
    <div className="routing-practice-container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
