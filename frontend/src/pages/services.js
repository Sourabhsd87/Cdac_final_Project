import React from 'react';

const Services = () => {
  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '1rem',
    textDecoration: 'underline'
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.5',
    color: '#555'
  };

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Our Services</h1>

      <div>
        <h2 style={headingStyle}>Road Side Assistance</h2>
        <p style={paragraphStyle}>We offer emergency roadside assistance to help you in case of a breakdown or other issues while on the road. Our services include:</p>
        <ul>
          <li>Towing</li>
          <li>Jump-starts</li>
          <li>Tire changes</li>
          <li>Lockout services</li>
          <li>Emergency fuel delivery</li>
        </ul>
      </div>

      <div>
        <h3 style={headingStyle}>Hotels</h3>
        <p style={paragraphStyle}>Our hotel partners offer comfortable and affordable accommodation options for riders. Choose from a range of hotels that suit your budget and preferences.</p>
        <ul>
          <li>Hotel</li>
          <li>Motel</li>
          <li>Hostels</li>
          <li>Dormitory</li>
          <li>CouchSurfing</li>
        </ul>
      </div>

      <div>
        <h2 style={headingStyle}>Garages</h2>
        <p style={paragraphStyle}>Our partner garages provide reliable and high-quality maintenance and repair services for motorcycles. From routine maintenance to major repairs, our garages have got you covered.</p>
      </div>

      <div>
        <h2 style={headingStyle}>Trip Planner</h2>
        <p style={paragraphStyle}>Plan your motorcycle trip with ease using our trip planner. We provide route suggestions, points of interest, and other helpful information to make your trip unforgettable.</p>
      </div>

      <div>
        <h2 style={headingStyle}>Local Travel Guide</h2>
        <p style={paragraphStyle}>Explore new destinations with our local travel guide. Our experienced guides will show you the best routes, attractions, and hidden gems in the area.</p>
      </div>
    </div>
  );
};

export default Services;
