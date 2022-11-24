import React from "react";
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import { usePostData } from "../../hooks/usePostData";
import { useToken } from "../../hooks/useToken";
import { CardsList } from "../CardsList";
import { Content } from "../Content";
import { Header } from "../Header";
import { ModalPost } from "../ModalPost";
import { PageNotFound } from "../PageNotFound";
import styles from "./layout.css";


export function Layout() {
  const token = useToken();
  const { postData } = usePostData();

  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  return (
    <div className={styles.layout}> 
      <Header />
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Content />}>
          <Route path="/" element={<Navigate to="/posts" replace />} />
          <Route path="/auth" element={<Navigate to="/posts" replace />} />
          <Route path="/auth/*" element={<Navigate to="/posts" replace />} />
          <Route path="/posts" element={<CardsList postData={postData} />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/posts/:id" element={<ModalPost postData={postData} />} />
        </Routes>
      )}
    </div>
  );
}
