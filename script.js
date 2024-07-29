document.addEventListener("DOMContentLoaded", function () {
  const texts = [
    "Full Stack Developer",
    "UI / UX Designer",
    "Web3 Developer",
    "Software Developer",
    "Frontend Designer",
  ];
  const typingElement = document.querySelector(".typing");
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 150;
  const deletingSpeed = 75;
  const delayBetweenTexts = 2000;

  function type() {
    const currentText = texts[textIndex];
    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    } else {
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, delayBetweenTexts);
        return;
      }
    }
    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
  }

  type();
});
