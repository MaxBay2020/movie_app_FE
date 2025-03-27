import { Routes, Route } from 'react-router-dom'
import MoviePage from "./pages/moviePage/MoviePage";
import AuthPage from "./pages/authPage/AuthPage";
import CommonLayout from "./layouts/CommonLayout";

function App() {

  return (
    <Routes>
        <Route path='/' element={<CommonLayout />}>
            <Route index element={<MoviePage />} />
            <Route path='/login' element={<AuthPage />} />
        </Route>
    </Routes>
  )
}

export default App
