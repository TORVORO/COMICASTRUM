import { ArrowRight } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Style",
      description: "Select from Western comics, Manga/Anime, or Children's illustration styles to match your vision."
    },
    {
      number: "02",
      title: "Write Your Prompt",
      description: "Describe your scene or story using our AI-optimized prompt field with smart suggestions."
    },
    {
      number: "03",
      title: "Generate Panels",
      description: "Watch as AI transforms your text into stunning visual panels that match your chosen style."
    },
    {
      number: "04",
      title: "Customize & Arrange",
      description: "Drag and drop panels, add text bubbles, and fine-tune your comic layout to perfection."
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">How It Works</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Create Comics in Minutes</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our streamlined process makes comic creation simple, fast, and enjoyable.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 pt-12">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-start space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-12 hidden h-[calc(100%-48px)] w-px bg-border lg:block" />
              )}
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <ArrowRight className="mt-2 h-5 w-5 rotate-90 text-muted-foreground lg:rotate-0 lg:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}