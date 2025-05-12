import {
  BrainCircuit,
  LayoutPanelLeft,
  Palette,
  Clock,
  CloudUpload,
  Smartphone,
  Sparkles,
  Shield
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <BrainCircuit className="h-8 w-8" />,
      title: "AI-Powered Creation",
      description:
        "Transform text prompts into stunning comic panels with our advanced AI engine."
    },
    {
      icon: <LayoutPanelLeft className="h-8 w-8" />,
      title: "Drag & Drop Panels",
      description:
        "Easily arrange and customize your comic layouts with intuitive drag-and-drop tools."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Multiple Styles",
      description:
        "Create in Western, Manga/Anime, or Children's illustration styles with unique assets."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Auto-Save",
      description:
        "Never lose your work with automatic saving every 30 seconds."
    },
    {
      icon: <CloudUpload className="h-8 w-8" />,
      title: "Cloud Storage",
      description:
        "Access your comics from any device with secure cloud storage."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Responsive Design",
      description:
        "Create and view your comics on any device with our responsive interface."
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Smart Suggestions",
      description:
        "Get intelligent suggestions for storylines, dialogues, and visual elements."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Content Protection",
      description:
        "Keep your creations safe with built-in copyright protection tools."
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Everything You Need to Create Amazing Comics
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform combines cutting-edge AI with intuitive tools to make comic creation accessible to everyone.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 pt-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 rounded-lg border p-4 transition-all hover:border-primary">
              <div className="rounded-full border border-primary/20 bg-primary/10 p-2 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-sm text-center text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}