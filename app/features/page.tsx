"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            Powerful Features for Your Creative Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover all the innovative tools and capabilities that make our platform the perfect choice for your creative projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <Button size="lg" className="text-lg px-8">
            Try it Free
          </Button>
        </div>
      </div>
    </main>
  );
}

const features = [
  {
    title: "Advanced Panel Layout",
    description: "Create stunning comic layouts with our intuitive panel system. Arrange and resize panels with pixel-perfect precision.",
  },
  {
    title: "Style Customization",
    description: "Choose from a wide range of artistic styles and customize them to match your vision perfectly.",
  },
  {
    title: "Real-time Preview",
    description: "See your changes instantly with our real-time preview feature. What you see is what you get.",
  },
  {
    title: "Export Options",
    description: "Export your comics in multiple formats including high-resolution images and PDF files.",
  },
  {
    title: "Cloud Storage",
    description: "Your work is automatically saved and synced across devices, so you never lose progress.",
  },
  {
    title: "Collaboration Tools",
    description: "Work together with team members in real-time with our powerful collaboration features.",
  },
];