import { Link } from 'react-router-dom';
import { Calendar, Home, Star, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Star className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">Event Review</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/events" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <Star className="h-5 w-5" />
              <span>Events</span>
            </Link>
            <Link to="/calendar" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <Calendar className="h-5 w-5" />
              <span>Calendar</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <User className="h-5 w-5" />
              <span>Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}