import React from 'react'
import { useHistory } from 'react-router-dom'
import { Icon } from '@blueprintjs/core'

import Navbar from './Navbar'
import { PlayMusicStateContext, PlayMusicDispatchContext, ACTIONS } from 'reducers/playMusic'
import styles from './style.module.css'

const { useContext } = React

const Header = () => {
  const history = useHistory()
  const dispatch = useContext(PlayMusicDispatchContext)
  const state = useContext(PlayMusicStateContext)
  const { showLyric } = state

  const handleGoBack = () => history.goBack()
  const handleGoForward = () => history.goForward()

  const hideLyric = () => {
    dispatch({
      type: ACTIONS.HIDE_LYRIC,
    })
  }

  return (
    <div className={styles.root}>
      <div className={styles.actions}>
        <div className={styles.iconsWrap}>
          {showLyric && (
            <div className={styles.down} onClick={hideLyric}>
              <Icon icon='chevron-down' iconSize={20} />
            </div>
          )}
        </div>

        {!showLyric && (
          <div className={styles.backForward}>
            <div onClick={handleGoBack}>
              <Icon icon='chevron-left' />
            </div>
            <div onClick={handleGoForward}>
              <Icon icon='chevron-right' />
            </div>
          </div>
        )}
      </div>

      <div className={styles.content}>
        <div>{!showLyric && <Navbar />}</div>
      </div>
    </div>
  )
}

export default Header
