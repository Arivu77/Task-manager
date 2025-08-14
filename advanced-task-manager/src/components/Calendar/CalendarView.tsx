import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarView = ({ tasks }) => {
    const [events, setEvents] = useState(tasks);

    const handleSelectEvent = (event) => {
        // Logic to handle event selection (e.g., view details or edit)
        console.log(event);
    };

    const handleSelectSlot = ({ start, end }) => {
        // Logic to handle slot selection (e.g., create a new task)
        console.log('Selected slot:', start, end);
    };

    return (
        <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-lg">
            <h2 className="text-white text-2xl font-bold mb-4">Task Calendar</h2>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, margin: '50px' }}
                onSelectEvent={handleSelectEvent}
                onSelectSlot={handleSelectSlot}
                selectable
                views={['month', 'week', 'day']}
                defaultView="month"
                className="rounded-2xl"
            />
        </div>
    );
};

export default CalendarView;