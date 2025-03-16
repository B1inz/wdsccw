'use client';

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Page() {
  // State variables
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 0, 1)); // January 2025
  const [calendarDays, setCalendarDays] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    age: '',
    allergies: '',
    notes: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelationship: '',
    isHighSchoolStudent: false,
    consentToNewsletter: false,
  });
  
  // Time slot availability data for January 2025
  const availabilityData = [
    { date: "2025-01-04", status: "closed", slots: ["8:30 - 10:00AM", "10:00 AM - 12:00PM"] },
    { date: "2025-01-10", status: "open", slots: ["8:30 - 10:00AM", "10:00 AM - 12:00PM"] },
    { date: "2025-01-12", status: "open", slots: ["8:30 - 10:00AM", "10:00 AM - 12:00PM"] },
    { date: "2025-01-13", status: "open", slots: ["8:30 - 10:00AM", "10:00 AM - 12:00PM"] },
    { date: "2025-01-16", status: "closed", slots: ["8:30 - 10:00AM", "10:00 AM - 12:00PM"] },
    { date: "2025-01-20", status: "open", slots: ["8:30 - 10:00AM", "10:00 AM - 12:00PM"] },
    { date: "2025-01-26", status: "open", slots: ["8:30 - 10:00AM", "10:00 AM - 12:00PM"] },
    { date: "2025-01-27", status: "closed", slots: ["8:30 - 10:00AM", "10:00 AM - 12:00PM"] },
    { date: "2025-01-29", status: "open", slots: ["8:30 - 10:00AM", "10:00 AM - 12:00PM"] },
    { date: "2025-01-30", status: "open", slots: ["2:00 - 3:00PM", "3:30 - 6:30PM"] }
  ];
  
  // Generate calendar days for the current month
  useEffect(() => {
    generateCalendarDays(currentMonth);
  }, [currentMonth]);
  
  const generateCalendarDays = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    
    // Get the first day of the month
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Get the day of the week for the first day (0 = Sunday, 1 = Monday, etc.)
    const firstDayOfWeek = firstDayOfMonth.getDay();
    
    const days = [];
    
    // Add the last few days from previous month
    const prevMonthDays = new Date(year, month, 0).getDate();
    for (let i = 0; i < firstDayOfWeek; i++) {
      const day = prevMonthDays - firstDayOfWeek + i + 1;
      days.push({ 
        day,
        date: `${year}-${String(month === 0 ? 12 : month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
        status: "other-month"
      });
    }
    
    // Add days of the current month with availability status
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const availability = availabilityData.find(item => item.date === dateString);
      
      days.push({
        day,
        date: dateString,
        status: availability ? availability.status : "no-events",
        slots: availability ? availability.slots : []
      });
    }
    
    // Add days from the next month to fill out the grid
    const remainingDays = 42 - days.length; // 6 rows of 7 days
    for (let day = 1; day <= remainingDays; day++) {
      days.push({ 
        day,
        date: `${year}-${String(month + 2 > 12 ? 1 : month + 2).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
        status: "other-month"
      });
    }
    
    setCalendarDays(days);
  };
  
  const handleDateClick = (day) => {
    // Only allow selection of current month days with events
    if (day.status === "other-month" || day.status === "no-events") return;
    
    setSelectedDate(day.date);
    setSelectedTimeSlot(null);
    setShowForm(false);
  };
  
  const handleTimeSlotSelect = (slot) => {
    setSelectedTimeSlot(slot);
    setShowForm(true);
  };
  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (would send to backend API in a real app)
    console.log("Form submitted:", {
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      ...formData
    });
    
    // Reset form after submission
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
  
  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };
  
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  return (
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
              <strong> Sign ups</strong> to volunteer with Ward 13 are now open!
            </p>
            <p>
              Open to everyone, including high school students looking to complete volunteer hours.
            </p>
          </div>
        </div>
      </div>
      
      <div className={styles.calendarSection}>
        <h2 className={styles.monthTitle}>{months[currentMonth.getMonth()]}</h2>
        
        <div className={styles.calendarTable}>
          <div className={styles.calendarHeader}>
            {daysOfWeek.map((day) => (
              <div key={day} className={styles.dayHeader}>
                {day}
              </div>
            ))}
          </div>
          
          <div className={styles.calendarBody}>
            {calendarDays.map((day, index) => (
              <div 
                key={index} 
                className={`${styles.calendarDay} ${day.status !== "other-month" ? styles[day.status] : ''}`}
                onClick={() => handleDateClick(day)}
              >
                {day.day}
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <div className={styles.legendColor} style={{backgroundColor: "#8AD45F"}}></div>
            <span>Open</span>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendColor} style={{backgroundColor: "#FFD799"}}></div>
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
            Openings for {formatDate(selectedDate)}
          </h3>
          
          <div className={styles.eventDetails}>
            <div className={styles.eventName}>WesternU Booth Set-up</div>
            <div className={styles.eventDescription}>
              Assist David Ferreira and his team in setting up a booth at Western University
            </div>
            
            <div className={styles.timeSlots}>
              {calendarDays.find(day => day.date === selectedDate)?.slots.map((slot, index) => (
                <div 
                  key={index} 
                  className={styles.timeSlot}
                  onClick={() => handleTimeSlotSelect(slot)}
                >
                  <div className={styles.timeSlotDot} style={{backgroundColor: "#8AD45F"}}></div>
                  <span>{slot}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {showForm && (
        <div className={styles.signupSection}>
          <h3 className={styles.signupTitle}>Volunteer Sign-Up</h3>
          <p className={styles.selectedSlot}>
            Chosen slot: {formatDate(selectedDate)} at {selectedTimeSlot}
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
                <label htmlFor="allergies">Allergies or Dietary Restrictions</label>
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
                <label htmlFor="emergencyContactRelationship">Relationship to Contact *</label>
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
                  Check this box if you are a <span className={styles.highlight}>highschool volunteer</span> looking to get their hours signed off.
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
  );
}