const body = document.querySelector("body");
     sidebar = body.querySelector(".sidebar");
     toggle = body.querySelector(".toggle");
     saerchBnt = body.querySelector(".search-box");
     modeSwtich = body.querySelector(".toggles-switch");
     modeText = body.querySelector(".mode-text")

     modeSwtich.addEventListener("click", () => {
        body.classList.toggle("dark");
     })
     
     