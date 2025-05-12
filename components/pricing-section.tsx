"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { CheckIcon, HelpCircle } from "lucide-react";

export function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const tiers = [
    {
      name: "Free",
      description: "Get started with basic comic creation",
      price: "$0",
      priceDetail: "/month",
      features: [
        "5 AI panel generations/month",
        "Basic comic style",
        "Standard panel layouts",
        "Community support",
        "Basic export quality",
        "7-day project history",
      ],
      limitations: [
        "Watermarked exports",
        "No custom styles",
        "No commercial usage",
      ],
      action: "Sign Up Free",
    },
    {
      name: "Starter",
      description: "Perfect for beginners and casual creators",
      price: billingPeriod === "monthly" ? "$19" : "$190",
      priceDetail: billingPeriod === "monthly" ? "/month" : "/year",
      discount: billingPeriod === "yearly" ? "Save $38" : null,
      features: [
        "50 AI panel generations/month",
        "Western comic style only",
        "Basic panel layouts",
        "Standard export quality",
        "Community support",
        "7-day project history",
      ],
      limitations: [
        "No custom style fine-tuning",
        "No priority rendering",
        "No commercial usage rights",
      ],
      action: "Get Started",
    },
    {
      name: "Professional",
      description: "For serious comic creators and storytellers",
      price: billingPeriod === "monthly" ? "$49" : "$490",
      priceDetail: billingPeriod === "monthly" ? "/month" : "/year",
      discount: billingPeriod === "yearly" ? "Save $98" : null,
      popular: true,
      features: [
        "200 AI panel generations/month",
        "All comic styles (Western, Manga, Children's)",
        "Advanced panel layouts",
        "HD export quality",
        "Priority email support",
        "30-day project history",
        "Style fine-tuning options",
        "Personal character storage",
      ],
      limitations: [
        "Limited commercial usage rights",
      ],
      action: "Get Started",
    },
    {
      name: "Enterprise",
      description: "For studios and professional publishers",
      price: billingPeriod === "monthly" ? "$99" : "$990",
      priceDetail: billingPeriod === "monthly" ? "/month" : "/year",
      discount: billingPeriod === "yearly" ? "Save $198" : null,
      features: [
        "Unlimited AI panel generations",
        "All comic styles with custom options",
        "Premium panel layouts",
        "4K export quality",
        "Dedicated support manager",
        "Unlimited project history",
        "Advanced style customization",
        "Team collaboration features",
        "Full commercial usage rights",
        "API access",
        "Custom branding options",
      ],
      limitations: [],
      action: "Contact Sales",
      contactSales: true,
    },
  ];

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Choose Your Plan</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Simple, transparent pricing that scales with your creative needs.
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-6">
            <Button
              variant={billingPeriod === "monthly" ? "default" : "outline"}
              onClick={() => setBillingPeriod("monthly")}
              className="w-28"
            >
              Monthly
            </Button>
            <Button
              variant={billingPeriod === "yearly" ? "default" : "outline"}
              onClick={() => setBillingPeriod("yearly")}
              className="w-28"
            >
              Yearly
              <Badge variant="outline" className="ml-2 bg-primary/20 text-primary">
                20% off
              </Badge>
            </Button>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 items-start pt-12">
          <TooltipProvider>
            {tiers.map((tier, index) => (
              <Card key={index} className={`flex flex-col justify-between ${tier.popular ? 'border-primary shadow-md relative' : ''}`}>
                {tier.popular && (
                  <Badge className="absolute -top-2 right-6 bg-primary">Most Popular</Badge>
                )}
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription className="min-h-[50px]">{tier.description}</CardDescription>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    <span className="ml-1 text-sm text-muted-foreground">{tier.priceDetail}</span>
                  </div>
                  {tier.discount && (
                    <Badge variant="outline" className="mt-1 bg-primary/20 text-primary">
                      {tier.discount}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">What's included:</h4>
                    <ul className="space-y-2 text-sm">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckIcon className="mr-2 h-4 w-4 text-primary mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {tier.limitations.length > 0 && (
                      <div className="pt-4">
                        <h4 className="text-sm font-medium text-muted-foreground">Limitations:</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground mt-2">
                          {tier.limitations.map((limitation, limitIndex) => (
                            <li key={limitIndex} className="flex items-start">
                              <Tooltip>
                                <TooltipTrigger>
                                  <HelpCircle className="mr-2 h-4 w-4 text-muted-foreground mt-0.5" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  Upgrade to remove this limitation
                                </TooltipContent>
                              </Tooltip>
                              <span>{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant={tier.contactSales ? "outline" : "default"}>
                    <Link href={tier.contactSales ? "/contact" : "/signup"}>
                      {tier.action}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}