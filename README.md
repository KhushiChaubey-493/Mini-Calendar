# 📅 Mini Calendar

A simple and responsive **Mini Calendar** built using **HTML, CSS, and JavaScript**. The application automatically reads the current date from the user's browser and displays the **day, date, month, and year** in a compact calendar-style interface.

The project also includes a smooth entrance animation using the browser's **Web Animations API**.

---

## 📌 Overview

Mini Calendar is a lightweight frontend project designed to practice working with JavaScript's `Date` object and dynamically updating HTML elements with real-time date information.

Whenever the page loads, JavaScript retrieves the current system date and updates the calendar automatically.

The calendar displays:

* Current date
* Current day of the week
* Current month
* Current year

---

## ✨ Features

* 📅 Displays the current date automatically
* 🗓️ Displays the current day of the week
* 📆 Displays the current month
* 🔢 Displays the current year
* ⚡ Updates dynamically using JavaScript
* 🎨 Clean calendar-style interface
* ✨ Smooth entrance animation
* 📱 Responsive layout
* 🌐 Works directly in the browser
* 🚫 No backend or database required

---

## 🛠️ Technologies Used

| Technology              | Purpose                                        |
| ----------------------- | ---------------------------------------------- |
| **HTML5**               | Calendar structure                             |
| **CSS3**                | Layout, styling, colors, and responsive design |
| **JavaScript (ES6+)**   | Date calculation and DOM updates               |
| **JavaScript Date API** | Retrieving the current date                    |
| **Web Animations API**  | Calendar entrance animation                    |

---

## 📂 Project Structure

```text id="q8m4sp"
Mini-Calendar/
│
├── index.html
├── script.js
├── style.css
└── README.md
```

The current GitHub repository contains these three frontend source files.

---

## 🖥️ Calendar Information

The calendar displays four pieces of information:

### Date

The current day of the month is displayed using JavaScript's:

```javascript id="j7u0by"
today.getDate()
```

The value is formatted with `padStart()` so single-digit dates appear with a leading zero.

For example:

```text
03
09
21
31
```

### Day

The application uses an array containing all seven weekdays:

```javascript id="q3p1ae"
[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
```

The current weekday is selected using:

```javascript id="x9t4kd"
today.getDay()
```

### Month

The application maintains an array containing all twelve months:

```javascript id="f6v3mz"
[
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
    "December"
]
```

The current month is selected using:

```javascript id="c8j2nw"
today.getMonth()
```

### Year

The current year is obtained using:

```javascript id="m2r7qa"
today.getFullYear()
```

---

## ⚙️ How It Works

### 1. Get the Calendar Elements

JavaScript first selects the HTML elements where the date information will be displayed:

```javascript id="w5c8rt"
const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
```

### 2. Create a Date Object

The current date is retrieved from the user's browser:

```javascript id="p4h9ks"
const today = new Date();
```

### 3. Convert Numeric Values to Names

Arrays are used to convert JavaScript's numeric weekday and month values into readable names.

For example:

```javascript id="a7d3xm"
day.textContent = weekDays[today.getDay()];
month.textContent = allMonths[today.getMonth()];
```

### 4. Update the DOM

The retrieved values are inserted into the calendar using `textContent`:

```javascript id="r6n2vb"
date.textContent = String(today.getDate()).padStart(2, "0");
day.textContent = weekDays[today.getDay()];
month.textContent = allMonths[today.getMonth()];
year.textContent = today.getFullYear();
```

This means the displayed calendar automatically reflects the user's current date whenever the page is opened.

---

## ✨ Entrance Animation

The calendar uses the browser's **Web Animations API** to create an entrance effect.

The animation starts with:

* Lower opacity
* Smaller scale
* Slight rotation

and transitions into the normal calendar position.

The current animation configuration uses an **800 ms** duration and an `ease-out` easing function.

Conceptually:

```text
Initial State
     ↓
Opacity: 0
Scale: 0.7
Rotation: -8°
     ↓
Animation
     ↓
Final State
     ↓
Opacity: 1
Scale: 1
Rotation: 0°
```

---

## 🧠 JavaScript Concepts Practiced

This project provides practice with:

* JavaScript `Date` object
* `getDate()`
* `getDay()`
* `getMonth()`
* `getFullYear()`
* Arrays
* DOM selection
* DOM manipulation
* `textContent`
* `String()`
* `padStart()`
* Web Animations API
* CSS/JavaScript integration

---

## 🎨 UI Structure

The HTML uses a simple calendar structure:

```text id="h5j3pk"
Calendar
│
├── Left Section
│   ├── Date
│   └── Day
│
└── Right Section
    ├── Month
    └── Year
```

The calendar is wrapped inside a `.hero` container and styled through `style.css`.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash id="e2k8pq"
git clone https://github.com/KhushiChaubey-493/Mini-Calendar.git
```

### 2. Navigate to the project

```bash id="z6n4yc"
cd Mini-Calendar
```

### 3. Run the project

Open:

```text id="v3r8md"
index.html
```

in a modern web browser.

No backend, database, package manager, or build process is required.

## 🎯 Learning Objectives

This project was created to practice:

* Working with JavaScript's built-in Date API
* Converting numeric date values into readable text
* Dynamically updating webpage content
* Manipulating DOM elements
* Creating responsive frontend layouts
* Using browser animation APIs
* Connecting JavaScript logic with an HTML interface

---

## 🔮 Future Improvements

Possible enhancements include:

* Add previous/next month navigation.
* Display the complete monthly calendar grid.
* Highlight the current date.
* Add today's date button.
* Add multiple calendar themes.
* Add dark/light mode.
* Display holidays.
* Add month and year selectors.
* Add event/reminder functionality.
* Add a digital clock alongside the calendar.

---

## 📌 Project Status

**Status:** Completed

This is a lightweight frontend JavaScript project focused on practicing date manipulation, DOM updates, responsive styling, and browser-based animations.

---

## 👩‍💻 Author

**Khushi Chaubey**

GitHub:
https://github.com/KhushiChaubey-493

---

## 📄 License

This project is available for educational and personal use.
