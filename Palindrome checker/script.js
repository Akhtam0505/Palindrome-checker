// I dont know why but I have a problem with html and css so i just copied html , css

const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const isItPalindrome = (input) => {
  if (input === "") {
    alert("Please input a value");
    return;
  }
  result.replaceChildren();
  const lowerText = input.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
  const palindromeResult = `<strong>${input}</strong> ${
    lowerText === [...lowerText].reverse().join("") ? "is" : "is not "
  } a palindrome`;

  const pTag = document.createElement("p");
  pTag.className = "text-input";
  pTag.innerHTML = palindromeResult;
  result.appendChild(pTag);

  result.classList.remove("hidden");
};

checkBtn.addEventListener("click", () => {
  isItPalindrome(textInput.value);
  textInput.value = "";
});
