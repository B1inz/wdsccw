'use client';

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Page() {
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
  
  // Your availability data
  const availabilityData = {
    2: 'open',
    4: 'closed',
    5: 'open',
    6: 'open',
    9: 'open',
    10: 'closed',
    12: 'open',
    13: 'open',
    16: 'closed',
    20: 'open',
    26: 'open',
    27: 'closed'
  };
  
  // Time slots available for selected dates
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
      [name]: type === "checkbox" ? checked : value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      ...formData
    });
    
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
  
  // Generate days of the month (1-31)
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  
  // Previous month days (29, 30, 31) 
  const prevMonthDays = [29, 30, 31];
  
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
      
      <div className={styles.calendarWrapper}>
        <h2 className={styles.monthTitle}>January</h2>
        
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
            {/* Previous month days */}
            {prevMonthDays.map(day => (
              <div key={`prev-${day}`} className={`${styles.calendarDay} ${styles.prevMonth}`}>
                {day}
              </div>
            ))}
            
            {/* Current month days */}
            {days.map(day => (
              <div 
                key={day} 
                className={`${styles.calendarDay} ${availabilityData[day] ? styles[availabilityData[day]] : ''} ${selectedDate === day ? styles.selected : ''}`}
                onClick={() => handleDateClick(day)}
              >
                {day}
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
            Openings for January {selectedDate}, 2025
          </h3>
          
          {availabilityData[selectedDate] === 'open' && (
            <div className={styles.eventDetails}>
              <div className={styles.eventName}>WesternU Booth Set-up</div>
              <div className={styles.eventDescription}>
                Assist David Ferreira and his team in setting up a booth at Western University
              </div>
              
              <div className={styles.timeSlots}>
                {timeSlots[selectedDate]?.map((slot, index) => (
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
          )}
          
          {availabilityData[selectedDate] === 'closed' && (
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