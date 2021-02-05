import React from 'react'

import { Link } from 'react-router-dom'

import Routing from './Routing'

const App: React.FC = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>

      <Routing />
    </>
  )
}

export default App
