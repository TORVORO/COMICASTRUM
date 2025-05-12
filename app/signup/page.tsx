"use client"

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";

export default function SignupPage() {
  const [step, setStep] = useState<"plan" | "details">("plan");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const plans = [
    {
      id: "free",
      name: "Free",
      price: "$0/month",
      features: [
        "5 AI panel generations/month",
        "Basic comic style",
        "Standard panel layouts",
        "Community support",
        "Basic export quality",
        "7-day project history",
      ]
    },
    {
      id: "starter",
      name: "Starter",
      price: "$19/month",
      features: [
        "50 AI panel generations/month",
        "Western comic style only",
        "Basic panel layouts",
        "Standard export quality",
      ]
    },
    {
      id: "professional",
      name: "Professional",
      price: "$49/month",
      recommended: true,
      features: [
        "200 AI panel generations/month",
        "All comic styles",
        "Advanced panel layouts",
        "HD export quality",
        "Style fine-tuning options",
      ]
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "$99/month",
      features: [
        "Unlimited AI panel generations",
        "All comic styles with custom options",
        "Premium panel layouts",
        "4K export quality",
        "Team collaboration features",
      ]
    }
  ];

  const [selectedPlan, setSelectedPlan] = useState(plans[0].id);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("details");
  };

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">Sign up for ComicStrum</CardTitle>
            <CardDescription>
              {step === "plan" 
                ? "Choose a plan to start your creative journey" 
                : "Create your account to get started"}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            {step === "plan" ? (
              <div className="space-y-4">
                {plans.map((plan) => (
                  <div 
                    key={plan.id}
                    className={`relative rounded-lg border p-4 cursor-pointer transition-all ${
                      selectedPlan === plan.id 
                        ? 'border-primary bg-primary/5' 
                        : 'hover:border-primary/50'
                    }`}
                    onClick={() => handlePlanSelect(plan.id)}
                  >
                    {plan.recommended && (
                      <div className="absolute -top-2 right-4 px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded-md">
                        Recommended
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{plan.name}</h3>
                        <p className="text-sm text-muted-foreground">{plan.price}</p>
                      </div>
                      <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${
                        selectedPlan === plan.id ? 'border-primary bg-primary text-white' : 'border-muted'
                      }`}>
                        {selectedPlan === plan.id && <CheckIcon className="h-3 w-3" />}
                      </div>
                    </div>
                    <ul className="mt-2 space-y-1">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="text-sm flex items-start gap-2">
                          <CheckIcon className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Button onClick={handleContinue} className="w-full mt-4">Continue with {plans.find(p => p.id === selectedPlan)?.name}</Button>
              </div>
            ) : (
              <form onSubmit={handleContinue} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input 
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <Button type="submit">Complete Sign Up</Button>
                  <Button variant="outline" onClick={() => setStep("plan")}>
                    Back to Plan Selection
                  </Button>
                </div>
              </form>
            )}
          </CardContent>

          <CardFooter className="flex flex-col items-center space-y-4">
            <div className="text-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2 mb-2">
                <Separator className="flex-1" />
                <span>OR</span>
                <Separator className="flex-1" />
              </div>
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Log in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}