import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../pages/login';
import NotFound from '../pages/notFound';
import Main from '../pages/main';
import Chats from '../pages/chats';
import { PrivateRoute } from './AuthProvider';
import AuthProvider from './AuthProvider';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Main />}>
            <Route index element={<PrivateRoute><Chats /></PrivateRoute>} />
            <Route path='login' element={<Login />} />
            <Route path='*' element={<NotFound />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}