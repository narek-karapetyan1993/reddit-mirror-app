import React from "react";
import styles from "./karmacounter.css";
import { Icon } from "../../../../Icon";
import { EColor, EIcons } from "../../../../enumeration";
import { Text } from "../../../../Text";
import { IPost } from '../../../../../store/posts/actions';

export function KarmaCounter({ carmaUps }: IPost) {
  return (
    <div className={styles.karmaCounter}>
      <button className={styles.up}>
        <Icon name={EIcons.carmaBtn} />
      </button>

      <Text size={14} mobileSize={12} color={EColor.black}>
        {carmaUps}
      </Text>

      <button className={styles.down}>
        <Icon name={EIcons.carmaBtn} />
      </button>
    </div>
  );
}
