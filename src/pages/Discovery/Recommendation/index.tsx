import React from 'react'
import Searcher from './Searcher'
import { REPOSITORY } from '../../../constants/github'
import styles from './style.module.css'

const Recommendation = () => {
  return (
    <div className={styles.root}>
      <div className={styles.operations}>
          <Searcher />
          <div className={styles.githubLogo} onClick={() => window.open(REPOSITORY)} />
      </div>
    </div>
  )
}

export default Recommendation
