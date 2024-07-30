// import HomePage from './components/HomePage'
// import FilmsPage from './components/FilmsPage'

//rather than have a bunch of import, better to import them all together(as per this example, imports were all put in index.js under pages)
import { HomePage, FilmsPage } from "./pages/index";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Take Me Home</NavLink>
          </li>
          <li>
            <NavLink to="/films">Go To Films</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/films" element={<FilmsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
