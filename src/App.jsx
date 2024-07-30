import HomePage from './components/HomePage'
import FilmsPage from './components/FilmsPage'
import './App.css'

function App() {

  return (
    <>
      <nav className='navBar'>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>

      <main>
        <HomePage />
        <FilmsPage />
      </main>
    </>
  )
}

export default App
