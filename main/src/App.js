import { Routes, Route, Link } from "react-router-dom"
import Home from "@/pages/home"
import About from "@/pages/about"
import "./App.css"

function App() {
  return (
    <div className="App">
      <aside className="App-header">
        <div>
          <Link to="/" style={{ color: "white" }}>
            Home
          </Link>
        </div>
        <div>
          <Link to="/about" style={{ color: "white" }}>
            About
          </Link>
        </div>
      </aside>
      <article>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </article>
    </div>
  )
}

export default App
