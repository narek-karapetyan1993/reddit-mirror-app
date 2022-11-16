import React from 'react';
import styles from './sortblock.css';

export function SortBlock() {
  return (
    <div className={styles.sortBlock}>
      <ul className={styles.sortList}>
        <li className={styles.sortItem}>
          <a>
            <svg
              className={styles.itemIcon}
              viewBox="0 0 9 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 11L2.17125 10.1475C1.7775 9.306 1.49625 8.437 1.32188 7.5515L0 11ZM6.82875 10.1475L9 11L7.67813 7.5515C7.50375 8.437 7.2225 9.306 6.82875 10.1475ZM4.5 0C4.5 0 1.6875 1.1 1.6875 5.5C1.6875 7.205 2.10938 8.6625 2.62687 9.8065C2.8125 10.2025 3.21187 10.45 3.65625 10.45H5.34375C5.78813 10.45 6.1875 10.2025 6.37313 9.8065C6.885 8.6625 7.3125 7.205 7.3125 5.5C7.3125 1.1 4.5 0 4.5 0ZM4.5 5.5C3.88125 5.5 3.375 5.005 3.375 4.4C3.375 3.795 3.88125 3.3 4.5 3.3C5.11875 3.3 5.625 3.795 5.625 4.4C5.625 5.005 5.11875 5.5 4.5 5.5Z"
                fill="#CC6633"
              />
            </svg>{' '}
            Лучшие&nbsp;
          </a>
          <a href="#">
            <svg
              className={styles.dropdownIcon}
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 6L-4.75832e-07 0.534122L0.541379 1.26775e-07L5 4.87405L9.45862 9.06345e-07L10 0.534123L5 6Z"
                fill="#CC6633"
              />
            </svg>
          </a>
        </li>
        <li className={styles.sortItem}>
          <a href="#">next</a>
        </li>
      </ul>
    </div>
  );
}
