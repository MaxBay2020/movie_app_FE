import { Routes, Route } from 'react-router-dom'
import MoviePage from "./pages/moviePage/MoviePage";
import AuthPage from "./pages/authPage/AuthPage";

function App() {

  return (
    <Routes>
        <Route path='/' element={<MoviePage />} />
        <Route path='/login' element={<AuthPage />} />
    </Routes>
  )
}

export default App
