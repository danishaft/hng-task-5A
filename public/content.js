/*global chrome*/
console.log("Hi, I have been injected whoopie!!!")

var recorder = null

// // Create a new image element
// const image = document.createElement('img');

// // Set the image source (URL)
// image.src = 'https://raw.githubusercontent.com/mallowigi/a-file-icon-idea/master/icon.png';

// // Set any other attributes you want, like alt text
// image.alt = 'Description of the image';

// // Optionally, you can style the image using inline CSS
// image.style.width = '200px'; // Adjust the width as needed
// image.style.height = 'auto'; // Maintain the aspect ratio
// const h = './vite.svg'
// console.log(h)

  

 let div = document.createElement("div");
        // div.style.color = "red";
        div.innerHTML=` <div style="border: 7px solid #e5e5e5; border-radius: 120px; ">
                            <div style="background: #000; color: #fff; display: flex;  align-items: center; gap: 20px; padding: 10px 30px; border-radius: 70px;">
                               <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <p id="timer-1" style="font-size: 17px; margin-right: 9px;">00:00:00</p>
                                    <div id='recording'><img style="width: 17px;"  src="https://firebasestorage.googleapis.com/v0/b/helpmeout-5449c.appspot.com/o/recording%20(2).png?alt=media&token=12984f7d-c518-4c7a-9218-33b60d685a5b&_gl=1*ft04nn*_ga*MTg0MjkwNDA5NC4xNjkxMjM4MTkz*_ga_CW55HF8NVT*MTY5NjE5NzI3Mi4zOC4xLjE2OTYxOTg4NDkuMzQuMC4w" alt='icon'></div>
                                    <div style="height: 40px; width: 1px; background: #fff; margin-left: 16px"></div>
                                </div>
                                <div style="display: flex; gap: 20px;">
                                    <div style="display: flex; flex-direction: column; justify-content: space-between;  align-items: center; cursor: pointer;">
                                        <img style='width: 30px;' src="https://firebasestorage.googleapis.com/v0/b/helpmeout-5449c.appspot.com/o/pause.png?alt=media&token=80cac18c-0c68-49fc-8fdf-bd1977d75dd4&_gl=1*1wo2laj*_ga*MTg0MjkwNDA5NC4xNjkxMjM4MTkz*_ga_CW55HF8NVT*MTY5NjIwMTA2MC4zOS4xLjE2OTYyMDEwNzAuNTAuMC4w">
                                        <p style="font-size: 10px;">pause</p>
                                    </div>
                                    <div style="display: flex; flex-direction: column; justify-content: space-between; align-items: center; cursor: pointer;">
                                        <img style='width: 30px;' src="https://firebasestorage.googleapis.com/v0/b/helpmeout-5449c.appspot.com/o/stop.png?alt=media&token=76180338-da99-4432-ae4e-bb18e2b47917&_gl=1*8wtjwo*_ga*MTg0MjkwNDA5NC4xNjkxMjM4MTkz*_ga_CW55HF8NVT*MTY5NjIyOTk4NC40MC4xLjE2OTYyMzA1MzguNjAuMC4w">
                                        <p style="font-size: 10px;">pause</p>
                                    </div>
                                    <div style="display: flex; flex-direction: column; justify-content: space-between; align-items: center; cursor: pointer;">
                                        <img style='width: 30px;' src="https://firebasestorage.googleapis.com/v0/b/helpmeout-5449c.appspot.com/o/camera.png?alt=media&token=303ee212-4871-4a5c-b7f0-dbf53758541e&_gl=1*wrrq4a*_ga*MTg0MjkwNDA5NC4xNjkxMjM4MTkz*_ga_CW55HF8NVT*MTY5NjIyOTk4NC40MC4xLjE2OTYyMzA1NjQuMzQuMC4w">
                                        <p style="font-size: 10px;">pause</p>
                                    </div>
                                    <div style="display: flex; flex-direction: column; justify-content: space-between; align-items: center; cursor: pointer;">
                                        <img style='width: 30px;' src="https://firebasestorage.googleapis.com/v0/b/helpmeout-5449c.appspot.com/o/mic.png?alt=media&token=52cfa6d6-265a-4a1e-825e-777044f86114&_gl=1*6gqp3b*_ga*MTg0MjkwNDA5NC4xNjkxMjM4MTkz*_ga_CW55HF8NVT*MTY5NjIyOTk4NC40MC4xLjE2OTYyMzA2MDQuNjAuMC4w">
                                        <p style="font-size: 10px;">pause</p>
                                    </div>
                                    <div style="justify-self: flex-start; cursor: pointer;">
                                        <img style='width: 30px;' src="https://firebasestorage.googleapis.com/v0/b/helpmeout-5449c.appspot.com/o/delete.png?alt=media&token=25957cd7-bbec-4180-82df-d45b81d83377&_gl=1*10mjws0*_ga*MTg0MjkwNDA5NC4xNjkxMjM4MTkz*_ga_CW55HF8NVT*MTY5NjIyOTk4NC40MC4xLjE2OTYyMzA2MzQuMzAuMC4w">
                                    </div>
                                </div>
                            </div>
                        </div>`;
        // div.innerText = "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj";
        div.classList.add('video')
        div.style.position = "absolute"
        div.style.top = "80vh"
        div.style.zIndex = "100"
        div.style.cursor = "grab"
        div.userSelect = "none"

document.body.style.position = "relative"

//dragable
let offsetX, offsetY;
let isDragging = false;

div.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - div.getBoundingClientRect().left;
    offsetY = e.clientY - div.getBoundingClientRect().top;
    div.style.cursor = "grabbing";
})

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    
    const container = document.body
    const maxX = container.clientWidth - div.clientWidth;
    const maxY = container.clientHeight - div.clientHeight;
    
    const clampedX = Math.min(Math.max(0, x), maxX);
    const clampedY = Math.min(Math.max(0, y), maxY);
    
    div.style.left = clampedX + "px";
    div.style.top = clampedY + "px";
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    div.style.cursor = "grab";
  });

  //timer
  let startTime = null;
let timerInterval = null;
function startTimer() {
  if (startTime === null) {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
  }
}
function stopTimer() {
    clearInterval(timerInterval);
    startTime = null;
}
function updateTimer() {
    if (startTime === null) return;
  
    const currentTime = Date.now();
    const elapsedTime = new Date(currentTime - startTime);
     
    const hours = elapsedTime.getUTCHours().toString().padStart(2, "0");
    const minutes = elapsedTime.getUTCMinutes().toString().padStart(2, "0");
    const seconds = elapsedTime.getUTCSeconds().toString().padStart(2, "0");
    let p = document.getElementById("timer-1")
    console.log(`${hours}:${minutes}:${seconds}`)
    p.innerText = `${hours}:${minutes}:${seconds}`
}

function onAccessApproved(stream){
    recorder = new MediaRecorder(stream)
    recorder.start();

    recorder.onstop = function(){
        stream.getTracks().forEach(function(track){
            if(track.readyState === "live"){
                track.stop()
            }
        })
        stopTimer()
        document.body.removeChild(div);
        window.location.href = 'https://hng-task5-b.vercel.app/record/13e3'
    }

    recorder.ondataavailable = function(event){
        let recordedBlob  = event.data;
        let url = URL.createObjectURL(recordedBlob);

        let a = document.createElement("a");

        a.style.display = "none";
        a.href = url;
        a.download = "screen-recording.webm"

        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);
        console.log(url)

        URL.revokeObjectURL(url);
    }
}

//listening for actions through chrome messages
chrome.runtime.onMessage.addListener( (message, sender, sendResponse) => {
    if(message.action === "request_recording"){
        console.log("requesting recording")
        sendResponse(`processed: ${message.action}`);

        navigator.mediaDevices.getDisplayMedia({
            audio:true,
            video: {
                width:9999999999,
                height: 9999999999
            }
        }).then((stream)=>{
            document.body.appendChild(div);
            console.log(document.getElementById('timer-1'))
            startTimer()
            onAccessApproved(stream)
        }) 
    }

    if(message.action === "stoprecording"){
        console.log("stopping video");
        sendResponse(`processed: ${message.action}`);
        if(!recorder) return console.log("no recorder")

        recorder.stop();
    }
})