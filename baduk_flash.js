
// https://stackoverflow.com/questions/6887183/how-to-take-screenshot-of-a-div-with-javascript

function getScreenShot(){
    let c = this.elem.nativeElement.querySelector('.chartContainer'); // or document.getElementById('canvas');
    html2canvas(c).then((canvas)=>{
      var t = canvas.toDataURL().replace("data:image/png;base64,", "");
      this.downloadBase64File('image/png',t,'image');
    })
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
    sing() {
        return `${this.name} can sing`;
    }
    dance() {
        return `${this.name} can dance`;
    }
     fetchData() {
    
        chrome.tabs.query({url: "*://*.online-go.com/*"}, function(results) {
            this.url = results[0].url
            //alert(this.url)
            document.getElementById("game_url").innerHTML=this.url;
    
            // alert(results);
    
            // return x.url;
        });
    }
}

let bf = new BadukFlash("Bingo", "Hairy");
bf.fetchData()

