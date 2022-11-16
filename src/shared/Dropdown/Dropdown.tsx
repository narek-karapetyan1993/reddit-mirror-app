import React, { useEffect, useRef } from 'react';
import styles from './dropdown.css';
import { noop } from '../../utils/js/noop';
import ReactDOM from 'react-dom';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
}

export function Dropdown({
  button,
  children,
  onOpen = noop,
  onClose = noop,
}: IDropdownProps) {
  const [offset, setOffset] = React.useState({
    left: 0,
    top: 0,
  });

  const node = document.querySelector('#dropdown_root') as Element;
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (event: any) => {
    event.preventDefault();
    setPosition();
  };

  const setPosition = () => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    setOffset({
      left: rect.left + rect.width / 2,
      top: rect.bottom,
    });
  };

  useEffect(() => {
    setPosition();

    document.addEventListener('scroll', setPosition);

    return () => {
      document.removeEventListener('scroll', setPosition);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div onClick={handleClick} ref={ref}>
        {button}
      </div>
      {{ onOpen } &&
        ReactDOM.createPortal(
          <div className={styles.listContainer} style={offset}>
            <div className={styles.list} onClick={onClose}>
              {children}
            </div>
          </div>,
          node
        )}
    </div>
  );
}
