import HomePage from './components/HomePage'
import './App.css'

function App() {
  

  return (
    <>
      <nav className='navBar'>
        <ul>
          <HomePage/>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  )
}

export default App
