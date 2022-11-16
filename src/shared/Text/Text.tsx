import React from "react";
import styles from "./text.css";
import classNames from "classnames";
import { EColor } from "../enumeration";

type TSizes = 10 | 12 | 14 | 16 | 20 | 28;

interface ITextProps {
  As?: "span" | "h1" | "h2" | "h3" | "h4" | "p" | "div";
  children?: React.ReactNode;
  size: TSizes;
  bold?: boolean;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColor;
}

export function Text(props: ITextProps) {
  const {
    As = "span",
    children,
    size,
    bold = false,
    mobileSize,
    tabletSize,
    desktopSize,
    color = EColor.black,
  } = props;
  const classes = classNames(
    styles[`s${size}`],
    styles[color],
    { [styles.bold]: bold },
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize }
  );
  return <As className={classes}>{children}</As>;
}
