import { Star, Calendar, Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
          Welcome to Event Review Platform
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Discover, review, and share your experiences at events powered by AI insights
        </p>
        
        <div className="flex justify-center space-x-4 mb-12">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors">
            Explore Events
          </button>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors">
            Write a Review
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <FeatureCard
          icon={<Star className="h-12 w-12 text-yellow-500" />}
          title="AI-Powered Reviews"
          description="Get intelligent insights and sentiment analysis for event reviews"
          color="bg-gradient-to-br from-yellow-50 to-orange-50"
        />
        <FeatureCard
          icon={<Calendar className="h-12 w-12 text-indigo-500" />}
          title="Smart Calendar"
          description="Manage your events with our intelligent calendar system"
          color="bg-gradient-to-br from-indigo-50 to-blue-50"
        />
        <FeatureCard
          icon={<Heart className="h-12 w-12 text-pink-500" />}
          title="Personalized Recommendations"
          description="Receive event suggestions based on your preferences"
          color="bg-gradient-to-br from-pink-50 to-purple-50"
        />
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Event Organizers</h2>
        <p className="text-gray-600 mb-8">Join thousands of successful events and happy attendees</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600">1000+</div>
              <div className="text-gray-600">Events</div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600">50k+</div>
              <div className="text-gray-600">Users</div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600">100k+</div>
              <div className="text-gray-600">Reviews</div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600">4.8</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ 
  icon, 
  title, 
  description, 
  color 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  color: string;
}) {
  return (
    <div className={`${color} p-8 rounded-xl shadow-lg transform transition-all hover:scale-105`}>
      <div className="flex justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}