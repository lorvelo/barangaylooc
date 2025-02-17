const calendarElement = document.getElementById('calendar');
const monthYearElement = document.getElementById('monthYear');
let selectedDate = null;
const statusMessage = document.getElementById('status-message');
let currentYear = 2024;
let currentMonth = 1; // January

function createCalendar(year, month) {
    const daysInMonth = new Date(year, month, 0).getDate(); // Get the number of days in the month
    calendarElement.innerHTML = '';
    monthYearElement.textContent = `${getMonthName(month)} ${year}`;

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.textContent = day;
        dayElement.onclick = () => selectDate(day, month, year);
        calendarElement.appendChild(dayElement);
    }
}

function selectDate(day, month, year) {
    const dayElements = document.querySelectorAll('.day');
    dayElements.forEach(element => element.classList.remove('selected'));
    selectedDate = `${year}-${month}-${day}`;
    dayElements[day - 1].classList.add('selected');
}

function markStatus(status) {
    if (selectedDate) {
        statusMessage.textContent = `Vaccination status for ${selectedDate} marked as ${status}.`;
    } else {
        alert('Please select a date first.');
    }
}

function getMonthName(month) {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[month - 1];
}

document.getElementById('prevMonth').onclick = function() {
    if (currentMonth === 1) {
        currentMonth = 12;
        currentYear--;
    } else {
        currentMonth--;
    }
    createCalendar(currentYear, currentMonth);
};

document.getElementById('nextMonth').onclick = function() {
    if (currentMonth === 12) {
        currentMonth = 1;
        currentYear++;
    } else {
        currentMonth++;
    }
    createCalendar(currentYear, currentMonth);
};

// Initialize the calendar for January 2024
createCalendar(currentYear, currentMonth);