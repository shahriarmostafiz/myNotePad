isUppercase = true;
function setTextFieldStyleById(id, customStyle, styleValue) {
  document.getElementById(id).addEventListener("click", function () {
    const textField = document.getElementById("text-input-field");

    if (isUppercase) {
      textField.style[customStyle] = styleValue;
    } else {
      textField.style[customStyle] = "";
    }
    isUppercase = !isUppercase;
  });
}
setTextFieldStyleById("text-bold", "fontWeight", "bold");
setTextFieldStyleById("text-italic", "fontStyle", "italic");
setTextFieldStyleById("text-underline", "textDecoration", "underline");
setTextFieldStyleById("text-left", "textAlign", "left");
setTextFieldStyleById("text-center", "textAlign", "center");
setTextFieldStyleById("text-right", "textAlign", "right");

function setTextFieldStyleByuserInput(id, customStyle) {
  document.getElementById(id).addEventListener("input", function () {
    if (customStyle === "fontSize") {
      document.getElementById("text-input-field").style[customStyle] =
        document.getElementById(id).value + "px";
    } else {
      document.getElementById("text-input-field").style[customStyle] =
        document.getElementById(id).value;
    }
  });
}
setTextFieldStyleByuserInput("text-color", "color");
setTextFieldStyleByuserInput("font-size", "fontSize");
setTextFieldStyleById("upper-lowerCase", "textTransform", "uppercase");
