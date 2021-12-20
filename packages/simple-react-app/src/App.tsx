import logo from './logo.svg'
import './App.css'

import toUpper from 'lodash/toUpper'
import { QueryPayload } from '@ta/simple-shared-data'
import DarkMode from './react-dark-mode/src/DarkMode'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {toUpper("Learn React")}
        </a>
        <button
          onClick={() => {
            fetch("http://localhost:3001", {})
              .then((response) => response.json())
              .then((data: QueryPayload) => console.log(data.payload))
          }}
        >
          GET SOME DATA
        </button>
        <DarkMode />
      </header>
    </div>
  )
}

export default App
