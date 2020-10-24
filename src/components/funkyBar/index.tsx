import React, { useLayoutEffect, useRef } from 'react'
import styles from './index.module.css'

const FancyBar = () => {
  const idRef: any = useRef()
  useLayoutEffect(() => {
    const progress = document.getElementsByClassName(
      styles.scrollbar
    )[0] as HTMLElement
    window.onscroll = function () {
      cancelAnimationFrame(idRef.current)
      const documentHeight = document.body.scrollHeight - window.innerHeight
      const progressHeight = (window.scrollY / documentHeight) * 100
      idRef.current = requestAnimationFrame(() => {
        progress.style.height = progressHeight + '%'
      })
    }
    return () => {
      window.onscroll = null
    }
  }, [])

  return (
    <div>
      <div className={styles.scrollbar} />
      <div className={styles.scrollPath} />
    </div>
  )
}

export default FancyBar
