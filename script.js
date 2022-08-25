const settingsBtn = document.querySelector(".settings-btn");
const settings = document.querySelector(".settings");
const eventInfo = document.querySelector(".event-info");
const saveBtn = document.querySelector(".save");
const imageSection = document.querySelector(".image-section");

const settingsEventName = document.querySelector("#event-name");
const settingsYear = document.querySelector("#year");
const settingsMonth = document.querySelector("#month");
const settingsDay = document.querySelector("#day");
const settingsImage = document.querySelector("#event-image");

const daysCount = document.querySelector(".days-count");
const hoursCount = document.querySelector(".hours-count");
const minutesCount = document.querySelector(".minutes-count");
const secondsCount = document.querySelector(".seconds-count");

let usersTime;

const setTime = () => {
  const currentTime = new Date();
  const result = usersTime - currentTime;

  const days = Math.floor(result / 84400000);
  const hours = Math.floor(result / 3600000 - days * 24);
  const minutes = Math.floor(result / 60000 - days * 1440 - hours * 60);
  const seconds = Math.floor(
    result / 1000 - days * 86400 - hours * 3600 - minutes * 60
  );

  daysCount.textContent = days;
  hoursCount.textContent = hours;
  minutesCount.textContent = minutes;
  secondsCount.textContent = seconds;
};

const appUpdate = () => {
  eventInfo.textContent = `${settingsEventName.value} już za:`;
  imageSection.style.backgroundImage = `url(${settingsImage.value})`;

  usersTime = new Date(
    `${settingsYear.value} ${settingsMonth.value} ${settingsDay.value}`
  );
  setInterval(setTime, 1000);
};

settingsBtn.addEventListener("click", () => {
  settings.classList.toggle("active");
});
saveBtn.addEventListener("click", appUpdate);
console.log(settingsBtn.classList);
