import React, { useState, useEffect } from 'react';
import './Popup.css';

const Popup = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const countdownDate = new Date(Date.UTC(2024, 10, 29, 16, 0, 0)).getTime();

        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            if (distance < 0) {
                setTimeLeft({});
                clearInterval(timerId);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 *60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 *60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        };

        const timerId = setInterval(updateTimer, 1000);
        updateTimer();

        return () => clearInterval(timerId);
    }, []);

    const closePopup = () => {
        setIsOpen(false);
    };

    const renderTimeDigits = (value) => {
        return value?.toString().padStart(2, '0').split('').map((digit, index) => (
            <span key={index} className="digit">{digit}</span>
        ));
    };

    return (
        isOpen && (
            <div className="popup-overlay" onClick={closePopup}>
                <div className="popup" onClick={(e) => e.stopPropagation()}>
                    <button className="close-btn" onClick={closePopup}>
                        <svg width="64px" height="64px" viewBox="-1.2 -1.2 26.40 26.40" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.048"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#ffffff"></path> </g></svg>
                    </button>
                </div>
                <h2>
                    {renderTimeDigits(timeLeft.days)}<span className="seperation">:</span>
                    {renderTimeDigits(timeLeft.hours)}<span className="seperation">:</span>
                    {renderTimeDigits(timeLeft.minutes)}<span className="seperation">:</span>
                    {renderTimeDigits(timeLeft.seconds)}
                </h2>
            </div>
        )
    );
};

export default Popup;