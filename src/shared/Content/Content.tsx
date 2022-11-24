import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './content.css';

export function Content() {
  return (
    <main className={styles.content}>
      <Outlet />
    </main>
  );
}
