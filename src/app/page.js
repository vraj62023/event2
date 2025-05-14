"use client"; // This is a client component

import { useState, useEffect, useRef } from 'react';
import StarBackground from '@/components/StarBackground';
import AlienFlyer from '@/components/alien';
import { useRouter } from 'next/navigation'; // useNavigate -> useRouter in Next.js

const Home = () => {
  const router = useRouter();
  const aboutRef = useRef(null);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    setIsHighlighted(true);
    setTimeout(() => setIsHighlighted(false), 3000);
  };

  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-05-18T00:00:00');
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      <StarBackground />

      <div className="container">
        <div className="content">
          <h1>SPACE QUIZ <span>LAUNCHING</span> IN:</h1>

          <div className="countdown">
            <div>
              <p>{String(timeLeft.days).padStart(2, '0')}</p>
              <span>Days</span>
            </div>
            <div>
              <p>{String(timeLeft.hours).padStart(2, '0')}</p>
              <span>Hours</span>
            </div>
            <div>
              <p>{String(timeLeft.minutes).padStart(2, '0')}</p>
              <span>Minutes</span>
            </div>
            <div>
              <p>{String(timeLeft.seconds).padStart(2, '0')}</p>
              <span>Seconds</span>
            </div>
          </div>

          <button onClick={() => router.push('/login')} className="register-btn">
            Register Now
          </button>

          <button type="button" className="learnMore" onClick={handleReadMore}>
            Learn More ...
          </button>
        </div>

        {/* Rocket image (from /public/rocket.png) */}
        <img src="/rocket.png" alt="Rocket" className="rocket-image" />

        {/* Alien image */}
        <img
          id="alien"
          src="https://png.pngtree.com/png-vector/20220706/ourmid/pngtree-ufo-alien-png-image_5721652.png"
          alt="Alien"
          className="alien"
        />

        {/* Flying animation */}
        <AlienFlyer />
      </div>

      {/* ABOUT Section */}
      <div ref={aboutRef} className={`event-details ${isHighlighted ? 'highlight' : ''}`}>
        <h2>About the Event</h2>
        <p>
          Join us for an intergalactic journey through trivia! The Space Quiz is a thrilling competition testing your knowledge of astronomy, astrophysics, space missions, and sci-fi culture.
          {isExpanded && (
            <span className="expanded-content">
              <br /><br />
              This year's edition features special rounds on exoplanet discoveries and recent Mars missions.
              Participants will face challenges ranging from identifying celestial objects to solving physics
              problems related to space travel. The quiz will be conducted in three stages: preliminary,
              semi-final, and final, with exciting prizes for the winning team.
            </span>
          )}
        </p>

        <button
          className="read-more-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>

      {/* EVENT INFO Section */}
      <div className="event-info">
        <h2>Event Schedule</h2>
        <ul>
          <li><strong>Date:</strong> April 15, 2025</li>
          <li><strong>Time:</strong> 6:00 PM IST</li>
          <li><strong>Venue:</strong> Main Auditorium, IIT Kharagpur</li>
        </ul>

        <button onClick={() => router.push('/timeline')} className="timeline-btn">
          Details...
        </button>
      </div>

      {/* RULES */}
      <div className="rules-section">
        <h2>Rules & Guidelines</h2>
        <ul>
          <li>Max 2 participants per team.</li>
          <li>No use of mobile phones or the internet during the quiz.</li>
          <li>Questions will be from space science, pop culture, and astronomy.</li>
        </ul>
      </div>

      {/* CONTACT */}
      <div className="contact-section">
        <h2>Need Help?</h2>
        <p>Contact: Rahul Verma - 9876543210</p>
        <p>Email: spaceclub@kgp.ac.in</p>
      </div>
    </div>
  );
};

export default Home;

