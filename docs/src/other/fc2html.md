

::: normal-demo DEMO

```html
<div class="container">
    <h1>Minecraft格式化代码转换</h1>
    
    <label for="input">输入Minecraft格式化代码：</label><br>
    <textarea id="input"></textarea><br>
    
    <button onclick="convert()">转换为HTML</button>
  
    <h2>转换预览：</h2>
    <div class="output" id="output"></div>
  
    <button onclick="copyOutput()">复制输出的HTML代码和样式</button>
    <hr>
    <center>Powered by 3ON EM | Special thanks <a href="https://github.com/OnikurYH/minecraft-text-js">MinecraftTextJS</a></center>
```

```js
(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):(a=a||self,a.MinecraftText=b())})(this,function(){'use strict';function a(a,b){return Math.floor(Math.random()*(b-a+1))+a}function b(a){return a.replace(/[\u00A0-\u9999<>\&]/gim,function(a){return"&#".concat(a.charCodeAt(0),";")})}function c(a){function c(){for(var a=0;a<e+h;a++)d+="</span>";e=h=0}for(var d="",e=0,h=0,j=!1,k=0;k<a.length;k+=1){var l=a[k],m=a[k+1];if("\\"===l&&"n"===m){c(),d+="<br>",k+=1;continue}if(" "===l){d+="&nbsp;";continue}if("&"===l||"\xA7"===l){var n=f[m];// Is color?
if(null!=n){(0<e||0<h)&&c(),j&&(d+="</span>",j=!1),d+="<span style=\"color: ".concat(n.inline,";\">"),e++,k++;continue}// Is style?
if(n=g[m],null!=n){j&&(d+="</span>"),d+="<span style=\"".concat(n.inline,";\">"),h++,k++,j&&(d+="<span class=\"kurcraft-obfuscate\">");continue}// Is obfuscate?
if("k"===m){j=!0,d+="<span class=\"kurcraft-obfuscate\">",k++;continue}// Is reset?
if("r"===m){c(),k++;continue}}d+=b(l)}return c(),d}function d(){var b=String.fromCharCode;if(null!=h&&0!==h.length)for(var c in k=window.requestAnimationFrame(d),h){for(var e=h[c],f="",g=e.innerHTML.replace(/&(?:.|\n)*?;/gm," "),i=0;i<g.length;i++)f+=b(a(64,95));e.innerHTML=f}}function e(a){if("undefined"==typeof window)return console.warn("[MinecraftTextJS] refeashObfuscate(rootElement?) only support on browser");window.cancelAnimationFrame(k),h.length=0;var b=a||document;h=Array.prototype.slice.call(b.getElementsByClassName("kurcraft-obfuscate")),d()}var f={0:{inline:"#000000",className:""},1:{inline:"#0000AA",className:""},2:{inline:"#00AA00",className:""},3:{inline:"#00AAAA",className:""},4:{inline:"#AA0000",className:""},5:{inline:"#AA00AA",className:""},6:{inline:"#FFAA00",className:""},7:{inline:"#AAAAAA",className:""},8:{inline:"#555555",className:""},9:{inline:"#5555FF",className:""},a:{inline:"#55FF55",className:""},b:{inline:"#55FFFF",className:""},c:{inline:"#FF5555",className:""},d:{inline:"#FF55FF",className:""},e:{inline:"#FFFF55",className:""},f:{inline:"#FFFFFF",className:""}},g={l:{inline:"font-weight: bold",className:""},m:{inline:"text-decoration: line-through",className:""},n:{inline:"text-decoration: underline",className:""},o:{inline:"font-style: italic",className:""}},h=[],k=-1,l=null;try{"undefined"!=typeof self&&(l=self.jQuery),"undefined"!=typeof require&&(l=require("jquery"))}catch(a){}l&&function(a){a.fn.minecraftText=function(){return this.toHTML=function(a){this.html(c(a))},this.refeashObfuscate=function(){e(this[0])},this}}(l);return{toHTML:c,refeashObfuscate:e}});

function convert() {
      var input = document.getElementById("input").value;
      var output = MinecraftText.toHTML(input);
      document.getElementById("output").innerHTML = output;
    }

    function copyOutput() {
      var outputElement = document.getElementById("output");
      var outputHTML = outputElement.innerHTML;
      
      var textarea = document.createElement("textarea");
      textarea.value = outputHTML;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);

      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);

      // 弹出提示
      alert("已复制输出的HTML代码和样式！");
    }


```

```css
  body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      padding: 20px;
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
    }
    
    .container {
      max-width: 500px;
      width: 100%;
      background-color: #fff;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    textarea {
      width: 100%;
      height: 150px;
      resize: none;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-bottom: 10px;
      font-size: 14px;
    }

    button {
      background-color: #4CAF50;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    }

    button:hover {
      background-color: #45a049;
    }

    .output {
      margin-top: 10px;
      border: 1px solid #ccc;
      padding: 10px;
      white-space: pre-wrap;
      font-family: Consolas, monospace;
      font-size: 14px;
      text-align: left;
    }
```

:::
