import { useState } from 'react'

import styles from "./App.module.css"

import { Menu } from './components/Menu/Menu'

export function App() {
  const [gameState, setGameState] = useState("menu")

  return (
    <div className={styles.app}>
      <h1>Quiz App</h1>
      {gameState === "menu" && <Menu />}
      
    </div>
  )
}


