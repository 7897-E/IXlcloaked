javascript: (function () {
  var url = window.location.href;
  var win = window.open();
  var iframe = win.document.createElement(( % 27  iframe) % 27);
  iframe.style =
    "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
  if (url.includes("https://") || url.includes("http://")) {
    iframe.src = url;
  } else {
    iframe.src = "http://" + url;
  }
  win.document.body.appendChild(iframe);
  var link = document.querySelector("link[rel*='icon']") || document.createElement('link');link.type = 'image/x-icon';link.rel = 'shortcut icon';link.href = 'https://schoology.kleinisd.net/sites/all/themes/schoology_theme/favicon.ico';document.title = 'Home | Schoology';console.log(document.title);document.getElementsByTagName('head')[0].appendChild(link);}
})();
