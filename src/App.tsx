import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from './const';
import MainPage from './pages/main-page';
import LoginPage from './pages/login-page';
import FavoritesPage from './pages/favorites-page';
import OfferPage from './pages/offer-page';
import NotFoundPage from './pages/not-found-page/not-found-page';
import PrivateRoute from './components/private-route/private-route';
import type { Offer } from './mocks/offers';

type props = {
  offers: Offer[];
}

const App = ({ offers }: props) => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Main} element={<MainPage offers={offers} />} />
      <Route path={AppRoute.Login} element={<LoginPage />} />
      <Route path={AppRoute.Favorites} element={
        <PrivateRoute isAuthorized={false}>
          <FavoritesPage offers={offers}/>
        </PrivateRoute>
      }
      />
      <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage offers={offers}/>} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
