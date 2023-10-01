import { CSSProperties, ReactNode, useState } from "react"
import styles from "./CameraOption.module.scss"

interface Props {
    children: ReactNode;
    text: string;
}
const CameraOption = ({children, text}: Props) => {
    const [checked, setIsChecked] = useState<boolean>(false)
    const toggler = () => {
        setIsChecked(prev => !prev)
    }
    const style: CSSProperties = {
        background: checked ?'#100A42' : '#ccc',
        justifyContent: checked ? 'flex-end': 'flex-start',
    }
  return (
    <div className={styles.option_cont} onClick={toggler}>
        {children}
        <p>{text}</p>
        <div style={style} className={styles.toggle}>
            <div className={styles.checker}>
            </div>
        </div>
    </div>
  )
}

export default CameraOption