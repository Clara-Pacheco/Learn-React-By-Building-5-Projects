import styles from './Menu.module.css'

export function Menu() {
  return (
    <div className={styles.menu}>
      <label>Enter your name: </label>
      <input type="text" placeholder='Ex. John Smith' />
      <button>Start Quiz</button>
    </div>
   
  )
}