import { ReactNode } from "react";
import styles from "./ScreenOption.module.scss"

interface Props {
    action: string;
    children: ReactNode;
}
const ScreenOption = (props: Props) => {
    const { action, children} = props 
    
  return (
    <span className={styles.span}>
        {children}
        <p>{action}</p>
    </span>
  )
}

export default ScreenOption