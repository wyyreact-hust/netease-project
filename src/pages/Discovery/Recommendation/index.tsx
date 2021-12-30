import React from 'react'
import Searcher from './Searcher'
import styles from './style.module.css'
const Recommendation = () => {
  return (
    <div className={styles.root}>
      <div className={styles.operations}>
        <Searcher />
      </div>
    </div>
  )
}

export default Recommendation
