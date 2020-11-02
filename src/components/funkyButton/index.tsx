import React from 'react'
import styles from './index.module.css'

interface Props {
  // style?: object
  children?: React.ReactNode
  data?: string
  [key: string]: any
}
const Index: React.FC<Props> = ({ children, ...props }: Props) => {
  return (
    <span className={styles.funkyHover} {...props}>
      {children}
    </span>
  )
}
// const Dd: FC = () => {
//   return (
//     <div>
//       <Index style={{ width: '100px' }}>
//         <div>111</div>
//       </Index>
//     </div>
//   )
// }

// const Index: React.FC<{}> = ({ children }) => {
//   return (
//     <svg viewBox='0 0 200 200' className={styles.funkyHover}>
//       <rect width='100%' height='100%' className={styles.dashed} />
//       {children}
//     </svg>
//   )
// }

export default Index
