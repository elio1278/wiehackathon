import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/Card';
import { User, Heart, Sun } from 'lucide-react';

const LifeStage: React.FC = () => {
  const navigate = useNavigate();

  const stages = [
    {
      id: 'teen',
      title: 'Teen (13-19)',
      description: 'Nutrition for growth, development, and establishing healthy habits',
      icon: <User className="h-8 w-8 text-pink-500" />,
    },
    {
      id: 'adult',
      title: 'Adult (20-40)',
      description: 'Balanced nutrition for active lifestyle and reproductive health',
      icon: <Heart className="h-8 w-8 text-pink-500" />,
    },
    {
      id: 'menopause',
      title: 'Menopause (40+)',
      description: 'Supportive nutrition for hormonal balance and healthy aging',
      icon: <Sun className="h-8 w-8 text-pink-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            Select Your Life Stage
          </h1>
          <p className="text-lg text-gray-700">
            Choose your current life stage to get a personalized nutrition plan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stages.map((stage) => (
            <Card 
              key={stage.id}
              className="border-2 border-transparent hover:border-pink-500 cursor-pointer transition-all"
              onClick={() => navigate(`/plan/${stage.id}`)}
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  {stage.icon}
                  <CardTitle>{stage.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{stage.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 mb-4">
            Not sure about your life stage? Take our quick assessment
          </p>
          <Button
            variant="outline"
            onClick={() => navigate('/assessment')}
            className="hover:bg-pink-50"
          >
            Take Assessment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LifeStage; 