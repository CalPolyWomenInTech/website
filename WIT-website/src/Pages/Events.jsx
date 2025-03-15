import React from 'react';
import '../styles/Events.css';
import eventImage from '../assets/WebsitePictures/march.jpg';
import discordLogo from '../assets/Logo/discordPurple.png'; 

const Events = () => {
  return (
    <div className="events-container">
        <div className="content-wrapper">
          <div className="calendar-container">
            <h1 className="calendar-title">WIT Events will be Updated Monthly Here!</h1>
            {/* Image under the calendar container */}
            <div className="image-container">
              <img src={eventImage} alt="Event Image" className="event-image" />
            </div>
          </div>

          <div className="meetings-container">
            <h1 className="meetings-title">Weekly Meetings</h1>
            <div className="meeting-details-container">
              <p className="meeting-details">
                <strong>Where:</strong> Building 163 room 1005 (see Discord for weekly updates)
              </p>
              <p className="meeting-details">
                <strong>Time:</strong> Every Thursday during U-hour 12-1pm
              </p>
              <p className="meeting-details">
                <strong>Zoom link:</strong>{' '}
                <a 
                  href="https://cpp.zoom.us/j/87512408287" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="zoom-link"
                >
                  Join Here
                </a>
              </p>
              {/* Discord image link */}
              <a href="https://discord.com/invite/R5nrdnDFTq" target="_blank" rel="noopener noreferrer">
                <img src={discordLogo} alt="Discord" className="discord-image" />
              </a>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Events;
