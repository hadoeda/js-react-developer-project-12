import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../login/Login';
import NotFound from '../notFound/NotFound';
import Main from '../main/Main';
import Preview from '../preview/Preview';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Main />}>
          <Route index element={<Preview />} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
