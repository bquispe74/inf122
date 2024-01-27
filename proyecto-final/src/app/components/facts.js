// components/facts.js

import style from './facts.module.css';

function Facts () {
  return (
    <div class={style["facts"]}>
                <div class={style["fact-item"]}>
                    <h2>7</h2>
                    <p>Years of work experience</p>
                </div>
                <div class={style["fact-item"]}>
                    <h2>50+</h2>
                    <p>Completed projects</p>
                </div>
                <div class={style["fact-item"]}>
                    <h2>20+</h2>
                    <p>Satisfied customers</p>
                </div>
            </div>
  );
};

export default Facts;