import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from './components/Button'

function App() {

  const [theme, setTheme] = useState('light');

  return (
    <div className="App">
      <Button theme={theme} >Primary</Button>

      <br />
      <button onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}>Change Theme</button>
    </div>
  )
}

export default App
