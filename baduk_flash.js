
// https://stackoverflow.com/questions/6887183/how-to-take-screenshot-of-a-div-with-javascript

function getScreenShot(elem){
    let c = elem;
    html2canvas(c).then((canvas)=>{
      var t = canvas.toDataURL().replace("data:image/png;base64,", "");
      this.downloadBase64File('image/png',t,'image4');
    });
  }

function downloadBase64File(contentType, base64Data, fileName) {
  const linkSource = `data:${contentType};base64,${base64Data}`;
  const downloadLink = document.createElement("a");
  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
}

class BadukFlash {
    constructor(x, y) {
        this.url = x;
    }

    fetch_url() {
        this.url = window.location.href
        alert(this.url)
    }

    toggleAI() {
        document.dispatchEvent(new KeyboardEvent('keydown', {
            key: 'i',
            keyCode: 73,
            shiftKey: true
        }))
    }

    old_snap_screenshot() {
        let c = document.getElementsByTagName('canvas')[23]; // stone layer
        // c = document.getElementsByTagName('canvas')[22]; // white stone layer
        // c = document.getElementsByTagName('canvas')[21]; // white stone layer

        // https://fjolt.com/article/html-canvas-save-as-image
        getScreenShot(c);
    }
    snapScreenshot(){
        let c = document.getElementsByTagName('body')[0];
        getScreenShot(c);
    }
}

let bf = new BadukFlash("Cho", "Chikun");
bf.fetch_url()
bf.toggleAI()
bf.snapScreenshot()



