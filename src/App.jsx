import React from 'react'
import Gallery from './components/Gallery'
import styles from './styles/Main.module.scss'

function App() {
  return (
    <div className={styles.layout}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.mainTitle}>Art Portfolio</h1>
        <p className={styles.subtitle}>
          All are hand drawn / painted by Jack Stevens - either digitally or
          traditionally
        </p>
      </div>
      <Gallery />
    </div>
  )
}

export default App
