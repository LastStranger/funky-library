import * as React from 'react'
import styles from './styles.module.css'
interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Component one: {text}</div>
}
export { default as FunkyBar } from './components/funkyBar'
export { default as FunkyButton } from './components/funkyButton'
