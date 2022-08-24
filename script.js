const settingsBtn = document.querySelector(".settings-btn")
const settings = document.querySelector(".settings")

const show = () => {
  console.log("siu");
  settings.classList.toggle("active")
}

settingsBtn.addEventListener("click", show)
console.log(settingsBtn.classList);