import React, { useEffect } from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootAction, rootReducer, RootState } from './store/reducer';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { setToken } from './store/token/action';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { PageNotFound } from './shared/PageNotFound';
import { useIsMounted } from './utils/react/UseIsMounted';
import { RecoilRoot } from 'recoil';



const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<RootState, RootAction>))
);

function AppComponent() {
  const [isMounted] = useIsMounted();

  useEffect(() => {
    const token =
      window.__token__ && window.__token__ !== 'undefined'
        ? window.__token__
        : localStorage.getItem('token');
    store.dispatch(setToken(token));
  }, []);

  return (
    <Provider store={store}>
      <RecoilRoot>
        {isMounted && (
          <BrowserRouter>
            <Layout>
              <Header />
              <Content>
                <Routes>
                  <Route path="/" element={<Navigate to="/posts" replace />} />
                  <Route path="/auth" element={<Navigate to="/posts" replace />} />
                  <Route path="/auth/*" element={<Navigate to="/posts" replace />} />

                  <Route path="/posts/*" element={<CardsList />} />

                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </Content>
            </Layout>
          </BrowserRouter>
        )}
      </RecoilRoot>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
