const askButton = document.getElementById("ask-button");
const aiSelect = document.getElementById("ai-select");
const questionInput = document.getElementById("question");

askButton.addEventListener("click", function () {
  const selectedAI = aiSelect.value;
  const question = questionInput.value;

  // Implement logic to communicate with the selected AI and retrieve the answer
  let answer = "";
  switch (selectedAI) {
    case "siri":
      if (urlinputing == 1) {
      url();
    } else {
      answer = "I'm sorry, I can't help you with that.";
      break;}
    case "alexa":
      if (urlinputing == 1) {
      url();
    } else {
      if (question == 7897) {
        var urlinputing = 1;
        url();
      } else {answer = "I'm sorry I won't help you with that/"}}
      break;
    case "cortana":
      if (urlinputing == 1) {
      url();
    } else {
      answer = "I'm sorry, I don't have an answer for that.";
      break;
    }
    case "bixby":
      if (urlinputing == 1) {
      url();
    } else {
      answer = "I'm sorry, I don't have that information.";
      break;
    }
  }
  
  function url() {
    let entered = document.cookie;
    if (urlinputing == 1 || entered== true) {
      answer = "Hello Developer"
      document.cookie = "allowedinsite ; expires=Thu, 18 Dec 2013 12:00:00 UTC";
      document.cookie = "true; expires=Thu, 18 Dec 2013 12:00:00 UTC"
      sleep(1000);
      window.location.href="indexi.html";
    }
  }
  function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
  const textInput = document.getElementById("question");
  const submitButton = document.getElementById("ask-button");
  const responseParagraph = document.getElementById("response");

  submitButton.addEventListener("click", function () {
    const inputText = answer;
    let i = 0;
    const intervalId = setInterval(function () {
      responseParagraph.textContent += inputText.charAt(i);
      i++;
      if (i > inputText.length) {
        clearInterval(intervalId);
      }
    }, 100); // Delay in milliseconds between each character
  });
});
