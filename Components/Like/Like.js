import React from 'react'
import styles from './Like.module.css'


function Like() {
    return (
        <div className={styles.pos}>
            <label className={styles.like}>
  <input className={styles.input} type="checkbox"/>
  <div className={styles.hearth}/>
</label>
        </div>
    )
}

export default Like
