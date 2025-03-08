import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/Card';
import { Button } from '../components/Button';
import { Utensils, Droplets, Apple, Coffee, Moon } from 'lucide-react';

const NutritionPlan: React.FC = () => {
  const { stage } = useParams<{ stage: string }>();

  const nutrients = [
    {
      name: 'Protein',
      amount: '50g',
      percentage: 75,
      color: 'bg-blue-500'
    },
    {
      name: 'Iron',
      amount: '18mg',
      percentage: 90,
      color: 'bg-orange-500'
    },
    {
      name: 'Calcium',
      amount: '1000mg',
      percentage: 60,
      color: 'bg-green-500'
    },
    {
      name: 'Omega-3',
      amount: '1.1g',
      percentage: 45,
      color: 'bg-purple-500'
    }
  ];

  const meals = [
    {
      type: 'Breakfast',
      time: '7:00 - 9:00 AM',
      suggestions: [
        'Oatmeal with berries and nuts',
        'Greek yogurt with honey',
        'Whole grain toast with avocado'
      ],
      icon: <Coffee className="h-6 w-6" />
    },
    {
      type: 'Lunch',
      time: '12:00 - 2:00 PM',
      suggestions: [
        'Quinoa bowl with grilled chicken',
        'Mixed green salad',
        'Lentil soup with vegetables'
      ],
      icon: <Utensils className="h-6 w-6" />
    },
    {
      type: 'Snacks',
      time: '3:00 - 4:00 PM',
      suggestions: [
        'Mixed nuts and dried fruits',
        'Apple with almond butter',
        'Hummus with carrot sticks'
      ],
      icon: <Apple className="h-6 w-6" />
    },
    {
      type: 'Dinner',
      time: '7:00 - 8:00 PM',
      suggestions: [
        'Grilled fish with roasted vegetables',
        'Brown rice with stir-fried tofu',
        'Sweet potato curry'
      ],
      icon: <Moon className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            Your Personalized Nutrition Plan
          </h1>
          <p className="text-lg text-gray-700">
            Tailored nutrition recommendations for {stage} life stage
          </p>
        </div>

        {/* Nutrient Breakdown */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Daily Nutrient Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nutrients.map((nutrient, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{nutrient.name}</CardTitle>
                  <CardDescription>{nutrient.amount} daily</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`${nutrient.color} h-2.5 rounded-full`}
                      style={{ width: `${nutrient.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{nutrient.percentage}% of daily goal</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Meal Plan */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Recommended Meal Plan</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {meals.map((meal, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {meal.icon}
                    <div>
                      <CardTitle>{meal.type}</CardTitle>
                      <CardDescription>{meal.time}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {meal.suggestions.map((suggestion, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-pink-500"></span>
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Hydration Reminder */}
        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Droplets className="h-6 w-6 text-blue-500" />
              <CardTitle>Daily Hydration Goal</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">Aim for 8-10 glasses of water per day</p>
            <div className="flex items-center gap-2">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-blue-500 flex items-center justify-center cursor-pointer hover:bg-blue-500 hover:text-white transition-colors"
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="gradient-pink text-white"
          >
            Download Meal Plan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NutritionPlan; 