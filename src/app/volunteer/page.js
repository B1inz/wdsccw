"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "./page.module.css";

export default function Page() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    allergies: "",
    notes: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    emergencyContactRelationship: "",
    isHighSchoolStudent: false,
    consentToNewsletter: false,
  });
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [allSubmissions, setAllSubmissions] = useState([]);

  // You can add or subtract from currentMonth and currentYear to reflect the flow of time.
  // For example, to go to the next month:
  // setCurrentMonth((prev) => (prev + 1) % 12);
  // To go to the previous month:
  // setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
  // Remember to adjust currentYear when rolling over December/January.

  function goToNextMonth() {
    console.log("Current Month:", currentMonth);
    console.log("Current Year:", currentYear);
    let nextMonth = (currentMonth + 1) % 12;
    let nextYear = currentYear;
    if (nextMonth === 0) {
      nextYear += 1;
    }
    setCurrentMonth(nextMonth);
    setCurrentYear(nextYear);

    console.log("Next Month:", currentMonth);
    console.log("Next Year:", currentYear);
    let calendarMatrix = getCalendarMatrix(currentYear, currentMonth);
    console.log("next Calendar Matrix:", calendarMatrix);
  }

  function goToCurrentMonth() {
    const today = new Date();
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
    console.log("Reset to Current Month:", currentMonth);
    console.log("Reset to Current Year:", currentYear);
    let calendarMatrix = getCalendarMatrix(currentYear, currentMonth);
    console.log("Current Calendar Matrix:", calendarMatrix);
  }

  function goToPreviousMonth() {
    console.log("Current Month:", currentMonth);
    console.log("Current Year:", currentYear);
    let prevMonth = (currentMonth - 1 + 12) % 12;
    let prevYear = currentYear;
    if (prevMonth === 11) {
      prevYear -= 1;
    }
    setCurrentMonth(prevMonth);
    setCurrentYear(prevYear);

    console.log("Previous Month:", currentMonth);
    console.log("Previous Year:", currentYear);
    let calendarMatrix = getCalendarMatrix(currentYear, currentMonth);
    console.log("prev Calendar Matrix:", calendarMatrix);
  }

  // Function to load all submissions from localStorage
  function loadAllSubmissions() {
    const stored = localStorage.getItem("volunteerSubmissions");
    if (stored) {
      setAllSubmissions(JSON.parse(stored));
    } else {
      setAllSubmissions([]);
    }
  }

  function getSubmissions() {
    const stored = localStorage.getItem("volunteerSubmissions");
    return stored ? JSON.parse(stored) : [];
  }
  // Load submissions on page load
  useEffect(() => {
    console.log("All Submissions:", getSubmissions());
  }, []);

  function getCalendarMatrix(year, month) {
    // month: 0-based (0 = January)
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const prevMonthLastDay = new Date(year, month, 0);

    const daysInMonth = lastDayOfMonth.getDate();
    const daysInPrevMonth = prevMonthLastDay.getDate();

    const startDayOfWeek = firstDayOfMonth.getDay(); // 0 (Sun) - 6 (Sat)
    const totalCells = Math.ceil((startDayOfWeek + daysInMonth) / 7) * 7;

    const calendar = [];
    let day = 1 - startDayOfWeek;

    for (let i = 0; i < totalCells / 7; i++) {
      const week = [];
      for (let j = 0; j < 7; j++, day++) {
        let cell;
        if (day < 1) {
          // Previous month
          cell = {
            day: daysInPrevMonth + day,
            monthOffset: -1,
          };
        } else if (day > daysInMonth) {
          // Next month
          cell = {
            day: day - daysInMonth,
            monthOffset: 1,
          };
        } else {
          // Current month
          cell = {
            day: day,
            monthOffset: 0,
          };
        }
        week.push(cell);
      }
      calendar.push(week);
    }
    return calendar;
  }

  const calendarMatrix = getCalendarMatrix(currentYear, currentMonth);

  const availabilityData = {
    2: "open",
    4: "closed",
    5: "open",
    6: "open",
    9: "open",
    10: "closed",
    12: "open",
    13: "open",
    16: "closed",
    20: "open",
    26: "open",
    27: "closed",
  };

  const timeSlots = {
    2: ["8:30 - 10:00AM", "10:00 AM - 12:00PM"],
    5: ["8:30 - 10:00AM", "10:00 AM - 12:00PM"],
    6: ["8:30 - 10:00AM", "10:00 AM - 12:00PM"],
    9: ["8:30 - 10:00AM", "10:00 AM - 12:00PM"],
    12: ["8:30 - 10:00AM", "10:00 AM - 12:00PM"],
    13: ["8:30 - 10:00AM", "10:00 AM - 12:00PM"],
    20: ["8:30 - 10:00AM", "10:00 AM - 12:00PM"],
    26: ["8:30 - 10:00AM", "10:00 AM - 12:00PM"],
  };

  const handleDateClick = (day) => {
    if (availabilityData[day]) {
      setSelectedDate(day);
      setSelectedTimeSlot(null);
      setShowForm(false);
    }
  };

  const handleTimeSlotSelect = (slot) => {
    setSelectedTimeSlot(slot);
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submission = {
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      ...formData,
    };

    // Save to localStorage
    const prevSubmissions = JSON.parse(
      localStorage.getItem("volunteerSubmissions") || "[]"
    );
    prevSubmissions.push(submission);
    localStorage.setItem(
      "volunteerSubmissions",
      JSON.stringify(prevSubmissions)
    );

    console.log("Form submitted:", submission);

    loadAllSubmissions();

    alert("Thank you for signing up to volunteer!");
    setShowForm(false);
    setSelectedDate(null);
    setSelectedTimeSlot(null);
    setFormData({
      fullName: "",
      email: "",
      age: "",
      allergies: "",
      notes: "",
      emergencyContactName: "",
      emergencyContactPhone: "",
      emergencyContactRelationship: "",
      isHighSchoolStudent: false,
      consentToNewsletter: false,
    });
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Get Involved with Ward 13</h1>

          <div className={styles.headerContent}>
            <div className={styles.headerImage}>
              <img src="/volunteers.jpg" alt="Ward 13 Volunteers" />
            </div>

            <div className={styles.headerInfo}>
              <h2>Volunteer</h2>
              <p>
                Interested on making a lasting change to the community?
                <strong> Sign ups</strong> to volunteer with Ward 13 are now
                open!
              </p>
              <p>
                Open to everyone, including high school students looking to
                complete volunteer hours.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.calendarWrapper}>
          <h2 className={styles.monthTitle}>
            {new Date(currentYear, currentMonth).toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </h2>

          <div className={styles.buttonRow}>
            <button
              className={styles.button}
              onClick={() => {
                setSelectedDate(null);
                setSelectedTimeSlot(null);
                setShowForm(false);
                goToPreviousMonth();
              }}
            >
              Previous Month
            </button>
            <button
              className={styles.button}
              onClick={() => {
                setSelectedDate(null);
                setSelectedTimeSlot(null);
                setShowForm(false);
                goToCurrentMonth();
              }}
            >
              Reset to Current Month
            </button>
            <button
              className={styles.button}
              onClick={() => {
                setSelectedDate(null);
                setSelectedTimeSlot(null);
                setShowForm(false);
                goToNextMonth();
              }}
            >
              Next Month
            </button>
          </div>

          <div className={styles.calendar}>
            <div className={styles.dayLabels}>
              <div className={styles.dayOfWeek}>Sun</div>
              <div className={styles.dayOfWeek}>Mon</div>
              <div className={styles.dayOfWeek}>Tue</div>
              <div className={styles.dayOfWeek}>Wed</div>
              <div className={styles.dayOfWeek}>Thu</div>
              <div className={styles.dayOfWeek}>Fri</div>
              <div className={styles.dayOfWeek}>Sat</div>
            </div>

            <div className={styles.calendarGrid}>
              {calendarMatrix.map((week, weekIdx) =>
                week.map((cell, dayIdx) => (
                  <div
                    key={`week${weekIdx}-day${dayIdx}`}
                    className={[
                      styles.calendarDay,
                      cell.monthOffset !== 0 ? styles.prevMonth : "",
                      cell.monthOffset === 0 && availabilityData[cell.day]
                        ? styles[availabilityData[cell.day]]
                        : "",
                      cell.monthOffset === 0 && selectedDate === cell.day
                        ? styles.selected
                        : "",
                    ].join(" ")}
                    onClick={() =>
                      cell.monthOffset === 0 && availabilityData[cell.day]
                        ? handleDateClick(cell.day)
                        : undefined
                    }
                  >
                    {cell.day}
                  </div>
                ))
              )}
            </div>
          </div>

          <div className={styles.legend}>
            <div className={styles.legendItem}>
              <div
                className={styles.legendColor}
                style={{ backgroundColor: "#8AD45F" }}
              ></div>
              <span>Open</span>
            </div>
            <div className={styles.legendItem}>
              <div
                className={styles.legendColor}
                style={{ backgroundColor: "#FFD799" }}
              ></div>
              <span>Closed</span>
            </div>
            <div className={styles.legendItem}>
              <span>No events</span>
            </div>
          </div>
        </div>

        {selectedDate && (
          <div className={styles.eventSection}>
            <h3 className={styles.eventTitle}>
              Openings for January {selectedDate}, 2025
            </h3>

            {availabilityData[selectedDate] === "open" && (
              <div className={styles.eventDetails}>
                <div className={styles.eventName}>WesternU Booth Set-up</div>
                <div className={styles.eventDescription}>
                  Assist David Ferreira and his team in setting up a booth at
                  Western University
                </div>

                <div className={styles.timeSlots}>
                  {timeSlots[selectedDate]?.map((slot, index) => (
                    <div
                      key={index}
                      className={styles.timeSlot}
                      onClick={() => handleTimeSlotSelect(slot)}
                    >
                      <div
                        className={styles.timeSlotDot}
                        style={{ backgroundColor: "#8AD45F" }}
                      ></div>
                      <span>{slot}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {availabilityData[selectedDate] === "closed" && (
              <p className={styles.closedMessage}>This date is fully booked.</p>
            )}
          </div>
        )}

        {showForm && (
          <div className={styles.signupSection}>
            <h3 className={styles.signupTitle}>Volunteer Sign-Up</h3>
            <p className={styles.selectedSlot}>
              Chosen slot: January {selectedDate}, 2025 at {selectedTimeSlot}
            </p>

            <form onSubmit={handleSubmit} className={styles.signupForm}>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formField}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formField}>
                  <label htmlFor="age">Age *</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label htmlFor="allergies">
                    Allergies or Dietary Restrictions
                  </label>
                  <input
                    type="text"
                    id="allergies"
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleInputChange}
                  />
                </div>

                <div className={styles.formField}>
                  <label htmlFor="notes">Notes</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <h4 className={styles.emergencyTitle}>Emergency Contact</h4>

              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label htmlFor="emergencyContactName">Full Name *</label>
                  <input
                    type="text"
                    id="emergencyContactName"
                    name="emergencyContactName"
                    value={formData.emergencyContactName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formField}>
                  <label htmlFor="emergencyContactPhone">Phone Number *</label>
                  <input
                    type="tel"
                    id="emergencyContactPhone"
                    name="emergencyContactPhone"
                    value={formData.emergencyContactPhone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formField}>
                  <label htmlFor="emergencyContactRelationship">
                    Relationship to Contact *
                  </label>
                  <input
                    type="text"
                    id="emergencyContactRelationship"
                    name="emergencyContactRelationship"
                    value={formData.emergencyContactRelationship}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.checkboxContainer}>
                <div className={styles.checkbox}>
                  <input
                    type="checkbox"
                    id="isHighSchoolStudent"
                    name="isHighSchoolStudent"
                    checked={formData.isHighSchoolStudent}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="isHighSchoolStudent">
                    Check this box if you are a{" "}
                    <span className={styles.highlight}>
                      highschool volunteer
                    </span>{" "}
                    looking to get their hours signed off.
                  </label>
                </div>

                <div className={styles.checkbox}>
                  <input
                    type="checkbox"
                    id="consentToNewsletter"
                    name="consentToNewsletter"
                    checked={formData.consentToNewsletter}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="consentToNewsletter">
                    I consent to signing up for newsletters.
                  </label>
                </div>
              </div>

              <button type="submit" className={styles.signupButton}>
                Sign Up
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
