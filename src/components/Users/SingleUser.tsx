import React from "react";

import classes from "./SingleUser.module.css";
import type { User } from "../../types";

type SingleUserProps = User;

export const SingleUser = ({ firstName, lastName }: SingleUserProps) => {
  return (
    <div className={classes.userWrapper}>
      <h2>{firstName + " " + lastName}</h2>
    </div>
  );
};
