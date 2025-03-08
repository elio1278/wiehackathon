import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/Card';
import { Button } from '../components/Button';
import { Upload, Camera, AlertCircle, Check } from 'lucide-react';

const SmartPlate: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const mockNutrition = {
    calories: 450,
    protein: 25,
    carbs: 45,
    fats: 20,
    vitamins: ['Vitamin A', 'Vitamin C', 'Iron'],
    suggestions: [
      'Add more leafy greens for iron',
      'Consider adding nuts for healthy fats',
      'Include a source of vitamin D'
    ]
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            Smart Plate Scanner
          </h1>
          <p className="text-lg text-gray-700">
            Analyze your meal and get instant nutrition insights
          </p>
        </div>

        {/* Image Upload Section */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <div className="w-full max-w-md">
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center ${
                    selectedImage ? 'border-pink-500' : 'border-gray-300'
                  }`}
                >
                  {selectedImage ? (
                    <div className="space-y-4">
                      <img
                        src={selectedImage}
                        alt="Uploaded meal"
                        className="max-h-64 mx-auto rounded-lg"
                      />
                      <Button
                        variant="outline"
                        onClick={() => setSelectedImage(null)}
                        className="mt-4"
                      >
                        Remove Image
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <Upload className="h-12 w-12 text-gray-400" />
                      </div>
                      <p className="text-gray-600">
                        Drag and drop an image here, or click to select
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <div className="flex gap-4 justify-center">
                        <Button
                          variant="outline"
                          onClick={() => document.getElementById('image-upload')?.click()}
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          Upload Image
                        </Button>
                        <Button variant="outline">
                          <Camera className="h-4 w-4 mr-2" />
                          Take Photo
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {selectedImage && (
          <>
            {/* Nutritional Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Nutritional Breakdown</CardTitle>
                  <CardDescription>Estimated values per serving</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Calories</span>
                      <span className="font-semibold">{mockNutrition.calories} kcal</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-600">Protein</div>
                        <div className="font-semibold">{mockNutrition.protein}g</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-600">Carbs</div>
                        <div className="font-semibold">{mockNutrition.carbs}g</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-600">Fats</div>
                        <div className="font-semibold">{mockNutrition.fats}g</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Vitamins & Minerals</h4>
                      <div className="flex flex-wrap gap-2">
                        {mockNutrition.vitamins.map((vitamin, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-sm"
                          >
                            {vitamin}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Suggestions */}
              <Card>
                <CardHeader>
                  <CardTitle>Suggestions for Improvement</CardTitle>
                  <CardDescription>Tips to enhance your meal's nutrition</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockNutrition.suggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <AlertCircle className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">{suggestion}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Daily Progress */}
            <Card className="bg-gradient-to-r from-pink-50 to-rose-50">
              <CardHeader>
                <CardTitle>Daily Nutrition Progress</CardTitle>
                <CardDescription>Based on your recommended daily intake</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-pink-500" />
                      <span>Protein Goal</span>
                    </div>
                    <div className="w-1/2">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-2 bg-pink-500 rounded-full"
                          style={{ width: '75%' }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-pink-500" />
                      <span>Vitamin Goals</span>
                    </div>
                    <div className="w-1/2">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-2 bg-pink-500 rounded-full"
                          style={{ width: '60%' }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium">60%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default SmartPlate; 