import React from "react";
import styles from "./break.css";
import classNames from "classnames";

type TBreakSize = 4 | 6 | 8 | 12 | 16 | 20 | 36;

interface IBreakProps {
  size: TBreakSize;
  mobileSize?: TBreakSize;
  tabletSize?: TBreakSize;
  desktopSize?: TBreakSize;
  inline?: boolean;
  top?: boolean;
  block?: boolean;
}

export function Break(props: IBreakProps) {
  const {
    size,
    mobileSize,
    tabletSize,
    desktopSize,
    inline = false,
    top = false,
    block = false,
  } = props;

  return (
    <span
      className={classNames(
        styles[`s${size}`],
        { [styles[`mobile_s${mobileSize}`]]: mobileSize },
        { [styles[`tablet_s${tabletSize}`]]: tabletSize },
        { [styles[`desktop_s${desktopSize}`]]: desktopSize },
        { [styles.inline]: inline },
        { [styles.block]: block },
        { [styles.top]: top }
      )}
    />
  );
}
