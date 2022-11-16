import React, { useEffect, useRef } from "react";
import styles from "./menuitemslist.css";
import { GenericList } from "../../../../GenericList";
import { generateId } from "../../../../../utils/react/generateRandomIndex";
import { Icon } from "../../../../Icon";
import { Text } from "../../../../Text";
import { EIcons } from "../../../../enumeration";

const LIST = [
  {
    As: "li" as const,
    icon: <Icon name={EIcons.comment} size={12} />,
    text: (
      <Text size={12} mobileSize={12} tabletSize={14} desktopSize={14}>
        Комментарии
      </Text>
    ),
    className: `${styles.menuItem} ${styles.menuItemNone}`,
  },
  {
    icon: <Icon name={EIcons.share} size={12} />,
    text: (
      <Text size={12} mobileSize={12} tabletSize={14} desktopSize={14}>
        Поделиться
      </Text>
    ),
    className: `${styles.menuItem} ${styles.menuItemNone}`,
  },
  {
    As: "li" as const,
    icon: <Icon name={EIcons.cancel} size={12} />,
    text: (
      <Text size={12} mobileSize={12} tabletSize={14} desktopSize={14}>
        Скрыть
      </Text>
    ),
    className: styles.menuItem,
  },
  {
    As: "li" as const,
    icon: <Icon name={EIcons.save} size={12} />,
    text: (
      <Text size={12} mobileSize={12} tabletSize={14} desktopSize={14}>
        Сохранить
      </Text>
    ),
    className: `${styles.menuItem} ${styles.menuItemNone}`,
  },
  {
    As: "li" as const,
    icon: <Icon name={EIcons.warning} size={14} />,
    text: (
      <Text size={12} mobileSize={12} tabletSize={14} desktopSize={14}>
        Пожаловаться
      </Text>
    ),
    className: styles.menuItem,
  },
].map(generateId);

interface IMenuItemsList {
  onClose?: () => void;
}

export function MenuItemsList(props: IMenuItemsList) {
  const [list, setList] = React.useState(LIST);

  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function handelClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target))
        props.onClose?.();
    }
    document.addEventListener("click", handelClick);
    return () => {
      document.removeEventListener("click", handelClick);
    };
  }, []);

  return (
    <ul className={styles.menuItemsList} ref={ref}>
      <GenericList list={list} />
    </ul>
  );
}
