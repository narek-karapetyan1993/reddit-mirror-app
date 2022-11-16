import React from "react";
import styles from "./icon.css";
import classNames from "classnames";
import * as icons from "../Icons";
import { EIcons } from "../enumeration";

type TIconSizes =
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30;

interface IIconProps {
  name: EIcons;
  size?: TIconSizes;
}

export function Icon(props: IIconProps) {
  const { name, size } = props;
  const Icon = icons[name];

  return (
    <span
      className={classNames(styles[`s${size}`])}
      style={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Icon />
    </span>
  );
}
