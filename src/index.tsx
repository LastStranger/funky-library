import * as React from 'react'
import styles from './styles.module.css'
interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component one: {text}</div>
}
export { default as FunkyBar } from './components/funkyBar'
