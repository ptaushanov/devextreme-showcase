import './App.scss'
import "./dx-styles.scss"
import './themes/generated/theme.additional.css';

import Routes from './Routes';
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Routes />
        </Router>
      </div>
    </div>
  )
}

export default App