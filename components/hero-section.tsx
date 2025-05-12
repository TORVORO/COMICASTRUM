import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Transform Your Ideas Into Comics With AI
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                ComicStrum helps you create professional comics in minutes, not months. No artistic skills required.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="gap-1">
                <Link href="/signup">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Start Creating
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/features">
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block relative h-[450px] w-full overflow-hidden rounded-xl bg-muted">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900">
              <div className="grid grid-cols-3 gap-2 p-6 absolute inset-0">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="rounded-lg bg-white/30 dark:bg-white/10 shadow-lg animate-pulse"
                    style={{
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: "3s"
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}