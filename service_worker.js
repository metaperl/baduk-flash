


chrome.action.onClicked.addListener((tab) => {
    if(!tab.url.includes("chrome://")) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
      //  function: go
      files: [ 'html2canvas.js', 'baduk_flash.js'],
      });
    }
  });


