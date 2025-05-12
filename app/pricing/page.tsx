"use client"

import { PricingSection } from "@/components/pricing-section";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <PricingSection />
      </div>
    </div>
  );
}