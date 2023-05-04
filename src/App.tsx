import React, { Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';

import { Landing } from './pages/landing';
import { Provider } from './Provider';
import { Customizing } from './pages/customizing';
import { PUBLIC_URLS } from './config/config';
import { Layout } from './layout/layout';
import { MyNFTs } from './pages/mynfts';
import './App.css';

function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Router>
        <Provider>
          <Layout>
            <Routes>
              <Route path={PUBLIC_URLS.LANDING} element={<Landing></Landing>} />
              <Route path={PUBLIC_URLS.CUSTOM_NFT + '/:id'} element={<Customizing></Customizing>}></Route>
              <Route path={PUBLIC_URLS.EXPLORE_MY_NFTS} element={<MyNFTs></MyNFTs>}></Route>
            </Routes>
          </Layout>
        </Provider>
      </Router>
    </Suspense>
  );
}

export default App;
