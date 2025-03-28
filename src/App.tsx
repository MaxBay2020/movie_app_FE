import { Routes, Route } from 'react-router-dom'
import MovieListPage from "./pages/movieRelatedPages/movieListPage/MovieListPage";
import AuthPage from "./pages/authPage/AuthPage";
import CommonLayout from "./layouts/CommonLayout";
import MovieCreationPage from "./pages/movieRelatedPages/movieCreationPage/MovieCreationPage";
import MovieEditionPage from "./pages/movieRelatedPages/movieEditionPage/MovieEditionPage";

function App() {

  return (
    <Routes>
        <Route path='/' element={<CommonLayout />}>
            <Route path='movies' element={<MovieListPage />} />
            <Route path='movies/create' element={<MovieCreationPage />} />
            <Route path='movies/edit/:movieId' element={<MovieEditionPage />} />
            <Route path='login' element={<AuthPage />} />
        </Route>
    </Routes>
  )
}

export default App
