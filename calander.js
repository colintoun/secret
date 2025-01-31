const header = document.querySelector(".calendar h3");
const dates = document.querySelector(".dates");
const navs = document.querySelectorAll("#prev, #next");
const selectedDateInput = document.getElementById("selected-date-input");
const redirectButton = document.getElementById("redirect-button");
const modal = document.getElementById("custom-modal");
const modalMessage = document.getElementById("modal-message");
const confirmBtn = document.getElementById("confirm-btn");
const cancelBtn = document.getElementById("cancel-btn");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();
let selectedDate = "";

emailjs.init("wIK84tePGeZaH7aRb");

document.addEventListener("DOMContentLoaded", function() {
  document.body.classList.add("fade-in");

  const links = document.querySelectorAll("a");

  links.forEach(link => {
      link.addEventListener("click", function(event) {
          event.preventDefault();
          const targetUrl = this.getAttribute("href");

          document.body.classList.add("fade-out");

          setTimeout(() => {
              window.location.href = targetUrl;
          }, 500); 
      });
  });
});


function renderCalendar() {
  const start = new Date(year, month, 1).getDay();
  const endDate = new Date(year, month + 1, 0).getDate();
  const end = new Date(year, month, endDate).getDay();
  const endDatePrev = new Date(year, month, 0).getDate();

  let datesHtml = "";

  for (let i = start; i > 0; i--) {
    datesHtml += `<li class="inactive" data-date="${endDatePrev - i + 1}" data-month="${month - 1}" data-year="${month === 0 ? year - 1 : year}">${endDatePrev - i + 1}</li>`;
  }

  for (let i = 1; i <= endDate; i++) {
    let className =
      i === date.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? ' class="today"'
        : "";
    datesHtml += `<li${className} data-date="${i}" data-month="${month}" data-year="${year}">${i}</li>`;
  }

  for (let i = end; i < 6; i++) {
    datesHtml += `<li class="inactive" data-date="${i - end + 1}" data-month="${month + 1}" data-year="${month === 11 ? year + 1 : year}">${i - end + 1}</li>`;
  }

  dates.innerHTML = datesHtml;
  header.textContent = `${months[month]} ${year}`;

  document.querySelectorAll(".dates li").forEach((li) => {
    li.addEventListener("click", (e) => {
      selectedDate = `${months[e.target.dataset.month]} ${e.target.dataset.date}, ${e.target.dataset.year}`;
      console.log('Selected date:', selectedDate);
      modalMessage.textContent = `Colin asks: You selected ${selectedDate}. Are you sureeeee? orrr`;
      modal.style.display = "block";
    });
  });
}

confirmBtn.addEventListener("click", () => {
    selectedDateInput.value = selectedDate;
    modal.style.display = "none";

    emailjs.send("service_uuz6ijn","template_t8mcpnv", {
        selected_date: selectedDate
    })
    .then(function(response) {
        console.log('Email sent successfully!', response.status, response.text);
    }, function(error) {
        console.error('Failed to send email:', error);
    });

    setTimeout(() => {
        redirectButton.click();
    }, 1);
});


cancelBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

navs.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    const btnId = e.target.id;

    if (btnId === "prev" && month === 0) {
      year--;
      month = 11;
    } else if (btnId === "next" && month === 11) {
      year++;
      month = 0;
    } else {
      month = btnId === "next" ? month + 1 : month - 1;
    }

    renderCalendar();
  });
});

renderCalendar();
