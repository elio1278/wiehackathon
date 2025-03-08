import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/Card';
import { Brain, Calendar, Apple, Scan } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      title: 'AI-Powered Meal Plans',
      description: 'Get personalized nutrition recommendations based on your life stage',
      icon: <Brain className="h-8 w-8 text-pink-500" />,
    },
    {
      title: 'Menstrual Cycle Sync',
      description: 'Align your nutrition with your cycle phases for optimal well-being',
      icon: <Calendar className="h-8 w-8 text-pink-500" />,
    },
    {
      title: 'Regional & Cultural Diets',
      description: 'Nutrition plans adapted to your cultural preferences',
      icon: <Apple className="h-8 w-8 text-pink-500" />,
    },
    {
      title: 'Smart Plate Scanner',
      description: 'Analyze your meals and get real-time nutrition insights',
      icon: <Scan className="h-8 w-8 text-pink-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGMxMC45MzUgMCAxOC04LjA1OSAxOC0xOHMtOC4wNTktMTgtMTgtMTh6bTAgMzJjLTcuNzMgMC0xNC02LjI3LTE0LTE0czYuMjctMTQgMTQtMTQgMTQgNi4yNyAxNCAxNC02LjI3IDE0LTE0IDE0eiIgZmlsbD0iI2ZkYjQ5NyIgZmlsbC1vcGFjaXR5PSIwLjIiLz48L2c+PC9zdmc+')] opacity-10" />
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            NutriHer
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            Personalized nutrition for every stage of a woman's life
          </p>
          <Button
            onClick={() => navigate('/life-stage')}
            size="lg"
            className="gradient-pink text-white"
          >
            Get Your Personalized Nutrition Plan
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Why Choose NutriHer?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-center">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 gradient-text">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg mb-8 text-gray-700">
            Get your personalized nutrition plan tailored to your life stage
          </p>
          <Button
            onClick={() => navigate('/life-stage')}
            size="lg"
            className="gradient-pink text-white"
          >
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home; 