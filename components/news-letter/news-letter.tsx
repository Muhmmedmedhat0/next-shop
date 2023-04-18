import React from 'react';

import SendIcon from '@mui/icons-material/Send';
import classes from './news-letter.module.scss';

function NewsLetter() {
  return (
    <section className={classes.container}>
      <h1 className={classes.title}>NewsLetter</h1>
      <div className={classes.description}>
        Get timely updates from your favorite products.
      </div>
      <div className={classes.inputContainer}>
        <input
          className={classes.input}
          type="text"
          placeholder="Enter your email"
        />
        <button className={classes.button}>
          <SendIcon />
        </button>
      </div>
    </section>
  );
}

export default NewsLetter;