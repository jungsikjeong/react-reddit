import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import GlobalStyles from './components/common/GlobalStyles';
import Home from './components/Home';
import Header from './components/Header/Header';
import Register from './components/Register';
import Login from './components/Login';
import Lists from './components/Lists';
import CreateCommunity from './components/Community/Create/CreateCommunity';
import DetailCommunityPage from './components/Community/Detail/DetailCommunityPage';
import PrivateRoute from './components/common/PrivateRoute';
import NotFound from './components/NotFound';
import DetailPostPage from './components/Post/DetailPostPage';
import { menuClose } from './features/menu/menuSlice';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const { menuState } = useSelector((state) => state.menu);

  const dispatch = useDispatch();
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <div
          className='container'
          onClick={() => dispatch(menuClose(menuState))}
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/lists' element={<Lists />} />
            <Route path='/createCommunity' element={<PrivateRoute />}>
              <Route path='/createCommunity' element={<CreateCommunity />} />
            </Route>
            <Route path='/r/:communityId' element={<DetailCommunityPage />} />
            <Route
              path='/r/:communityId/:postId'
              element={<DetailPostPage />}
            />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
