import { CSSProperties } from "react"

const Button = () => {
    const style: CSSProperties = {
        borderRadius: ".6em",
        color: "#FAFDFF",
        fontSize: "1rem",
        width: "100%",
        background: "#120B48",
        textAlign: "center",
        padding: ".4em 0",
        cursor: 'pointer'
    }

    const startRecording = () => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs: any){
            chrome.tabs.sendMessage(tabs[0].id, {action: "request_recording"},  function(response){
                if(!chrome.runtime.lastError){
                    console.log(response)
                } else{
                    console.log(chrome.runtime.lastError, 'error line 14')
                }
            })
        } )
    }
  return (
    <div style={style} onClick={startRecording}>Start Recording</div>
  )
}

export default Button