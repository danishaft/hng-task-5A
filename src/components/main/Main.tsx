import Head from "../head/Head"
import ScreenOption from "../screenOption/ScreenOption"
import CameraOption from "../cameraOption/CameraOption"
import Button from "../button/Button"
import styles from "./Main.module.scss"
import { PiDesktopThin } from "react-icons/pi";
import { BiCopy } from "react-icons/bi";
import video from "../../assets/images/video-camera.svg"
import mic from "../../assets/images/microphone.svg"
const Main = () => {
  return (
    <main>
        <Head/>
        <div className={styles.screen_options}>
            <ScreenOption action='Full screen'>
                <PiDesktopThin/>
            </ScreenOption>
            <ScreenOption action='Current Tab'>
                <BiCopy/>
            </ScreenOption>
        </div>
        <div className={styles.camera_options}>
            <CameraOption text="Camera">
                <img src={video}/>
            </CameraOption>
            <CameraOption text="Audio">
                <img src={mic}/>
            </CameraOption>
        </div>
        <Button />
    </main>
  )
}

export default Main