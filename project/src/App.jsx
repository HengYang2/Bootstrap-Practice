import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Style1 from "./pages/Style1"
import Style2 from "./pages/Style2"
import Style3 from "./pages/Style3"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar>

      </Navbar>


      <Container>
        <Routes>
          <Route path="/" element={<Style1 />} />
          <Route path="/style2" element={<Style2 />} />
          <Route path="/style3" element={<Style3 />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
