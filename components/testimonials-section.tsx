"use client"

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "ComicStrum has completely transformed how I create comics. What used to take me weeks now takes just hours, and the quality is incredible!",
      author: "Sarah Johnson",
      role: "Independent Comic Artist",
      avatar: "SJ",
      rating: 5
    },
    {
      quote: "As someone with zero artistic ability, I never thought I could create comics. ComicStrum's AI tools have made it possible for me to bring my stories to life.",
      author: "Mark Thompson",
      role: "Fiction Writer",
      avatar: "MT",
      rating: 5
    },
    {
      quote: "The manga style options are fantastic! I've been able to create a consistent series with characters that maintain their look across all pages.",
      author: "Yuki Tanaka",
      role: "Manga Enthusiast",
      avatar: "YT",
      rating: 4
    },
    {
      quote: "My children's book went from concept to completed illustrations in just two days. The children's style AI is spot on for my target audience!",
      author: "Emily Rodriguez",
      role: "Children's Book Author",
      avatar: "ER",
      rating: 5
    },
    {
      quote: "The panel management system is intuitive and powerful. I can experiment with different layouts until I find what works perfectly for my story.",
      author: "David Chen",
      role: "Graphic Designer",
      avatar: "DC",
      rating: 4
    },
    {
      quote: "As a teacher, I use ComicStrum to create educational comics for my students. It's revolutionized how I present complex topics in an engaging way.",
      author: "James Wilson",
      role: "High School Teacher",
      avatar: "JW",
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const itemsToShow = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => 
        current === testimonials.length - itemsToShow ? 0 : current + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of satisfied creators who have transformed their storytelling with ComicStrum.
            </p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(activeIndex, activeIndex + itemsToShow).map((testimonial, index) => (
            <Card key={index} className="overflow-hidden h-full transition-all duration-300 hover:shadow-md">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                      fill={i < testimonial.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <blockquote className="mb-6 flex-1">
                  <p className="text-muted-foreground">"{testimonial.quote}"</p>
                </blockquote>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.slice(0, testimonials.length - itemsToShow + 1).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                activeIndex === index ? "bg-primary" : "bg-muted"
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}