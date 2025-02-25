import { useState } from 'react';
import { Calendar, MapPin, Star } from 'lucide-react';
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
  // Add more events as needed
];

export default function Events() {
  const [events] = useState<Event[]>(SAMPLE_EVENTS);
  const [likedEvents, setLikedEvents] = useState<Set<string>>(new Set());

  const handleLike = (eventId: string) => {
    setLikedEvents(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(eventId)) {
        newLiked.delete(eventId);
      } else {
        newLiked.add(eventId);
      }
      return newLiked;
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-indigo-900 mb-8">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(event => (
          <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
            <img 
              src={event.imageUrl} 
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              
              <div className="flex items-center text-gray-500 mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{new Date(event.date).toLocaleDateString()}</span>
              </div>
              
              <div className="flex items-center text-gray-500 mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{event.location}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <span className="text-gray-700">{event.rating}</span>
                </div>

                <button
                  onClick={() => handleLike(event.id)}
                  className={`px-4 py-2 rounded-full ${
                    likedEvents.has(event.id)
                      ? 'bg-pink-600 text-white'
                      : 'bg-gray-100 text-gray-600'
                  } transition-colors`}
                >
                  {likedEvents.has(event.id) ? 'Liked' : 'Like'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}