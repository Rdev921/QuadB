import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import ShowSummary from "./pages/ShowSummary"
import HomePage from "./pages/HomePage"
import MovieInfo from "./pages/MovieInfo"
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <h1 style={{textAlign:'center',fontWeight:'900'}}>Movix</h1>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
       <Route path="/summary/:id" element={<ShowSummary/>}></Route>
       <Route path="/movieInfo/:id" element={<MovieInfo/>}></Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App
