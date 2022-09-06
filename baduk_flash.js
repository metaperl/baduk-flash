
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

function element_contains(selector, text) {
    var elements = document.querySelectorAll(selector);
    return Array.prototype.filter.call(elements, function(element){
      return RegExp(text).test(element.textContent);
    });
 }

class BadukFlash {
    constructor(x, y) {
        this.url = x;
    }
    sing() {
        return `${this.name} can sing`;
    }
    old_fetchURL() {
    
        chrome.tabs.query({url: "*://*.online-go.com/*"}, function(results) {
            this.url = results[0].url
            //alert(this.url)
            document.getElementById("game_url").innerHTML=this.url;
    
            // alert(results);
    
            // return x.url;
        });
    }
    fetch_url() {
        this.url = window.location.href
        alert(this.url)
    }
    toggleAI() {
        let dock = document.getElementsByClassName('Dock')[0]
        let anchors = dock.getElementsByTagName('a')
        anchors[3].click();
    }

    snap_screenshot() {
        let c = document.getElementsByTagName('canvas')[0];
        getScreenShot(c);
    }
}

let bf = new BadukFlash("Bingo", "Hairy");
bf.fetch_url()
//bf.current_tab()
bf.toggleAI()
bf.snap_screenshot()



