import React, { useContext } from "react";
import { useUserData } from "../../../hooks/useUserData";
import styles from "./searchblock.css";
import { UserBlock } from "./UserBlock";

export function SearchBlock() {
  const { me } = useUserData();
  return (
    <div className={styles.searchBlock}>
      <UserBlock
        avatarSrc={me.data.iconImg}
        username={me.data.name}
        loading={me.loading}
      />
    </div>
  );
}
