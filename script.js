let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

const getTime = () => {
  const date = new Date();
  // Getting hours, mins, secs from date
  const hrs = date.getHours();
  const mins = date.getMinutes();
  const secs = date.getSeconds();

  const hRotation = 30 * hrs + mins / 2;
  const mRotation = 6 * mins;
  const sRotation = 6 * secs;

  hr.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;
};
setInterval(getTime, 1000);
