import { useState } from 'react';
import { Event } from '../types';

const SAMPLE_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Tech Conference 2024',
    description: 'Join us for the biggest tech conference of the year',
    date: '2024-03-15',
    location: 'Convention Center',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
    rating: 4.5,
    likes: 128
  },
  {
    id: '2',
    title: 'Music Festival',
    description: 'A weekend of amazing live performances',
    date: '2024-03-20',
    location: 'City Park',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819',
    rating: 4.8,
    likes: 256
  },
];

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events] = useState<Event[]>(SAMPLE_EVENTS);

  const getEventsForDate = (date: Date) => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear()
      );
    });
  };

  const daysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1
  ).getDay();

  const renderCalendarDays = () => {
    const days = [];
    const today = new Date();

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-24 border border-gray-200 bg-gray-50"></div>
      );
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
      const isToday = date.toDateString() === today.toDateString();
      const dayEvents = getEventsForDate(date);
      const hasEvents = dayEvents.length > 0;

      days.push(
        <div
          key={day}
          className={`h-24 border border-gray-200 p-2 ${
            isToday ? 'bg-indigo-50' : 'bg-white'
          } ${hasEvents ? 'cursor-pointer hover:bg-indigo-100' : ''}`}
          onClick={() => setSelectedDate(date)}
        >
          <div className={`font-semibold ${isToday ? 'text-indigo-600' : ''}`}>
            {day}
          </div>
          {hasEvents && (
            <div className="mt-1">
              {dayEvents.map(event => (
                <div
                  key={event.id}
                  className="text-xs truncate text-indigo-600"
                >
                  {event.title}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-indigo-900 mb-8">Event Calendar</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold">
                {selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
              </h2>
              <div className="space-x-2">
                <button
                  onClick={() => setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() - 1)))}
                  className="px-3 py-1 rounded bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
                >
                  Previous
                </button>
                <button
                  onClick={() => setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() + 1)))}
                  className="px-3 py-1 rounded bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
                >
                  Next
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-px">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-center font-semibold py-2">
                  {day}
                </div>
              ))}
              {renderCalendarDays()}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Events on {selectedDate.toLocaleDateString()}
            </h2>
            
            <div className="space-y-4">
              {getEventsForDate(selectedDate).map(event => (
                <div key={event.id} className="border-l-4 border-indigo-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                  <p className="text-sm text-gray-500 mt-1">{event.location}</p>
                </div>
              ))}
              
              {getEventsForDate(selectedDate).length === 0 && (
                <p className="text-gray-500">No events scheduled for this date.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}