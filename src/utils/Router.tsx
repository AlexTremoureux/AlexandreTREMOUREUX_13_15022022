import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Page404 from '../components/Page404';
import HomePage from '../container/HomePage';
import SignIn from '../container/SignIn';
import User from '../container/User';

const Router = () => (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<User />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </>
)

export default Router;