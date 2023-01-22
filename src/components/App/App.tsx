import { Routes, Route } from 'react-router-dom';
import { NotFound } from 'pages/NotFound';
import { Home } from 'pages/Home';
import { Detailed } from 'pages/Detailed';
import { Layout } from '../Layout';
import styles from './App.module.scss';

export const App = () => (
  <div className={styles.app}>
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="product/:id"
          element={<Detailed />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
    </Routes>
  </div>
);
