import { Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import Layout from '../Layout/Layout';
import NotFound from '../../pages/NotFound/NotFound';
import Home from '../../pages/Home/Home';
import Detailed from '../../pages/Detailed/Detailed';

const App = () => (
    <div className={styles.app}>
      <Routes>
        <Route
          exact
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

export default App;
