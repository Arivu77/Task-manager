import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
    const [isActive, setIsActive] = useState(false);
    const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes
    const [isBreak, setIsBreak] = useState(false);

    useEffect(() => {
        let timer;
        if (isActive && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsBreak(!isBreak);
            setTimeLeft(isBreak ? 1500 : 300); // Switch between work and break
        }
        return () => clearInterval(timer);
    }, [isActive, timeLeft, isBreak]);

    const handleStartPause = () => {
        setIsActive(!isActive);
    };

    const handleReset = () => {
        setIsActive(false);
        setTimeLeft(1500);
        setIsBreak(false);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <div className={`flex flex-col items-center justify-center h-screen ${isBreak ? 'bg-blue-200' : 'bg-green-200'} transition-colors duration-500`}>
            <h1 className="text-4xl font-bold mb-4">{isBreak ? 'Break Time!' : 'Focus Time!'}</h1>
            <div className="text-6xl font-mono mb-4">{formatTime(timeLeft)}</div>
            <div className="flex space-x-4">
                <button onClick={handleStartPause} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {isActive ? 'Pause' : 'Start'}
                </button>
                <button onClick={handleReset} className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-4 py-2 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    Reset
                </button>
            </div>
        </div>
    );
};

export default PomodoroTimer;