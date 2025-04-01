import {Routes, Route, Navigate} from 'react-router-dom'
import MovieListPage from "./pages/movieRelatedPages/movieListPage/MovieListPage";
import AuthPage from "./pages/authPage/AuthPage";
import CommonLayout from "./layouts/CommonLayout";
import MovieCreationPage from "./pages/movieRelatedPages/movieCreationPage/MovieCreationPage";
import MovieEditionPage from "./pages/movieRelatedPages/movieEditionPage/MovieEditionPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import PrivateRoute from "./routes/PrivateRoute";

function App() {

  return (
    <Routes>
        <Route path='/' element={<CommonLayout />}>
            <Route index element={<Navigate to='/movies' />} />
            <Route path='login' element={<AuthPage />} />

            <Route element={<PrivateRoute />}>
                <Route path='movies' element={<MovieListPage />} />
                <Route path='movies/create' element={<MovieCreationPage />} />
                <Route path='movies/edit/:movieId' element={<MovieEditionPage />} />
            </Route>

            <Route path='*' element={<NotFoundPage />} />
        </Route>
    </Routes>
  )
}

export default App
