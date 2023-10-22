import "./css/style.css";
import cipher from "./js/cipher";

document.querySelector("#enter-here").addEventListener("submit", (e) => {
  e.preventDefault();
  let method = document.querySelector("#encrypt-decrypt").value;
  let message = document.querySelector("#message").value;
  let offset = document.querySelector("#offset").value;
  if (method === "encrypt") {
    let encodedMessage = cipher.encode(message, offset);
    document.querySelector("#encrypted-message").innerHTML =
      "encoded Message: " + encodedMessage;
  } else if (method === "decrypt") {
    let decodedMessage = cipher.decode(message, offset);
    document.querySelector("#decrypted-message").innerHTML =
      "decoded Message: " + decodedMessage;
  }
});
