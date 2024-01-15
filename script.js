//Menu
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");
    const mobileMenuList = document.getElementById("mobile-menu-list");
    //Open dropdown
    menuIcon.addEventListener("click", function () {
        mobileMenuList.classList.toggle("show");
    });

    // Close the mobile menu when clicking outside or in the X
    closeIcon.addEventListener("click", function () {
        mobileMenuList.classList.remove("show");
      });
      document.addEventListener("click", function (event) {
        if (!event.target.closest('.mobile-menu')) {
          mobileMenuList.classList.remove("show");
        }
      });
});

//Countdown
document.addEventListener('DOMContentLoaded', function() {
  const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');
//Set the dates
  function updateCountdown() {
    const currentDate = new Date();
    const endDate = new Date('2024-02-01T23:59:59'); 
//Transform to seconds
    const totalSeconds = Math.floor((endDate - currentDate) / 1000);
//Calculate items
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const seconds = Math.floor(totalSeconds % 60);

    daysElement.textContent = formatTime(days);
    hoursElement.textContent = formatTime(hours);
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);
  }
//Add 0 to format if necessary
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  // Initial call to update countdown
  updateCountdown();

  // Update countdown every second
  setInterval(updateCountdown, 1000);
});

//FAQ
function toggleFAQ(faqId) {
  var faqAnswer = document.getElementById(faqId);
  faqAnswer.classList.toggle("show");
}