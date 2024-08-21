import {Component} from 'react'
import Header from './components/Header'
import Sidebar from './components/sidebar'
import Main from './components/maincontent'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="root">
        <Header />
        <div className="content">
          <Sidebar />
          <Main />
        </div>
      </div>
    )
  }
}

export default App
