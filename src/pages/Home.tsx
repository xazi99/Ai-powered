import { Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Event Review Platform
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover, review, and share your experiences at events powered by AI insights
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <FeatureCard
          icon={<Star className="h-8 w-8 text-indigo-600" />}
          title="AI-Powered Reviews"
          description="Get intelligent insights and sentiment analysis for event reviews"
        />
        <FeatureCard
          icon={<Star className="h-8 w-8 text-indigo-600" />}
          title="Smart Calendar"
          description="Manage your events with our intelligent calendar system"
        />
        <FeatureCard
          icon={<Star className="h-8 w-8 text-indigo-600" />}
          title="Personalized Recommendations"
          description="Receive event suggestions based on your preferences"
        />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}