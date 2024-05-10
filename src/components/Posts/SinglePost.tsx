import React from "react";

import classes from './SinglePost.module.css'

type SinglePostProps = {
  title: string;
  body: string;
};

export const SinglePost = ({ title, body }: SinglePostProps) => {
  return (
    <div className={classes.singlePostWrapper}>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};
