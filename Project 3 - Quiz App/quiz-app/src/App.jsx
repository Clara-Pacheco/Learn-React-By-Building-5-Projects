import styles from "./App.module.css"

import { Menu } from './components/Menu/Menu'

export function App() {
  return (
    <div className={styles.app}>
      <h1>Quiz App</h1>
      <Menu />
    </div>
  )
}


