const seconds = document.querySelector(".sec");
const minutes = document.querySelector(".min");
const hours = document.querySelector(".hour");
const box = document.querySelector(".dialog");

const show_time = function () {
  const crr_time = new Date();
  const crr_sec_ratio = crr_time.getSeconds() / 60;
  const crr_min_ratio = (crr_sec_ratio + crr_time.getMinutes()) / 60;
  const crr_hrs_ratio = (crr_min_ratio + crr_time.getHours()) / 12;
  update_hand(seconds, crr_sec_ratio);
  update_hand(minutes, crr_min_ratio);
  update_hand(hours, crr_hrs_ratio);

  day_span(crr_time);
};

setInterval(show_time, 1000);

const update_hand = function (element, crr_data) {
  element.style.setProperty("--rotation", crr_data * 360);
};

const day_span = function (crr_time) {
  const total_time =
    crr_time.getSeconds() +
    crr_time.getMinutes() * 60 +
    crr_time.getHours() * 60 * 60;
  const span_percent = ((total_time / 86400) * 100).toPrecision(5);

  box.innerText = `${span_percent}% of the day has passed`;
};

show_time();
