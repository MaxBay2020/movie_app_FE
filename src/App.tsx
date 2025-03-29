import {Routes, Route, Navigate} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import MovieListPage from "./pages/movieRelatedPages/movieListPage/MovieListPage";
import AuthPage from "./pages/authPage/AuthPage";
import CommonLayout from "./layouts/CommonLayout";
import MovieCreationPage from "./pages/movieRelatedPages/movieCreationPage/MovieCreationPage";
import MovieEditionPage from "./pages/movieRelatedPages/movieEditionPage/MovieEditionPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";

function App() {

  return (
    <Routes>
        <Route path='/' element={<CommonLayout />}>
            <Route index element={<Navigate to='/movies' />} />
            <Route path='movies' element={<MovieListPage />} />
            <Route path='movies/create' element={<MovieCreationPage />} />
            <Route path='movies/edit/:movieId' element={<MovieEditionPage />} />
            <Route path='login' element={<AuthPage />} />

            <Route path='*' element={<NotFoundPage />} />
        </Route>
    </Routes>
  )
}

export default App
