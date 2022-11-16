import React, { useEffect, useRef } from "react";
import styles from "./cardmenu.css";
import { Dropdown } from "../../../Dropdown";
import { MenuItemsList } from "./MenuItemsList";
import { Icon } from "../../../Icon";
import { Text } from "../../../Text";
import { EColor, EIcons } from "../../../enumeration";

export function CardMenu() {
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);

  return (
    <div className={`${styles.menu} ${isMenuOpened ? styles.menu_opened : ""}`}>
      <div>
        <Dropdown
          button={
            <button
              className={styles.menuButton}
              onClick={() => setIsMenuOpened(!isMenuOpened)}
            >
              <Icon name={EIcons.menu} />
            </button>
          }
          onClose={() => setIsMenuOpened(false)}
          onOpen={() => setIsMenuOpened(true)}
        >
          {isMenuOpened && (
            <div className={styles.dropdown}>
              <MenuItemsList onClose={() => setIsMenuOpened(false)} />
              <button type="button" className={styles.closeButton}>
                <Text
                  size={12}
                  tabletSize={14}
                  desktopSize={14}
                  color={EColor.grey66}
                >
                  Закрыть
                </Text>
              </button>
            </div>
          )}
        </Dropdown>
      </div>
    </div>
  );
}
