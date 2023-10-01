import logo from "../../assets/images/help_logo.svg"
import styles from "./Head.module.scss"
import sett from "../../assets/images/setting-2.svg"
import close  from "../../assets/images/close-circle.svg"
const Head = () => {
    const stopRecording = () => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs: any){
            chrome.tabs.sendMessage(tabs[0].id, {action: "stoprecording"},  function(response){
                if(!chrome.runtime.lastError){
                    console.log(response)
                } else{
                    console.log(chrome.runtime.lastError, 'error line 14')
                }
            })
        } )
    }
  return (
    <div className={styles.head}>
        <div className={styles.top}>
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
                <h4>HelpMeOut</h4>
            </div>
            <div className={styles.settings}>
                <span className="settings">
                    <img src={sett} alt="settings btn" />
                </span>
                <span className="close" onClick={stopRecording} >
                    <img src={close} alt="close btn" />
                </span>
            </div>
        </div>
        <article className={styles.article}>
            This extension helps you record and share help videos with ease.
        </article>
    </div>
  )
}

export default Head