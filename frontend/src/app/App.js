import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../login/Login';
import NotFound from '../notFound/NotFound';
import Main from '../main/Main';
import Private from '../private/Private';
import { PrivateRoute } from './AuthProvider';
import AuthProvider from './AuthProvider';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Main />}>
            <Route index element={<PrivateRoute><Private /></PrivateRoute>} />
            <Route path='login' element={<Login />} />
            <Route path='*' element={<NotFound />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}