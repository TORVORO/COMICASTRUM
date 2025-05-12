"use client"

import { ImageIcon, RotateCcw, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ComicPanelProps {
  id: string;
  content: string | null;
  style: string;
  isGenerating: boolean;
}

export function ComicPanel({ id, content, style, isGenerating }: ComicPanelProps) {
  // Placeholder style classes based on the comic style
  const styleClasses = {
    western: "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900 dark:to-indigo-950",
    manga: "bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-950",
    children: "bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-yellow-900 dark:to-orange-950"
  };

  return (
    <div 
      className={cn(
        "aspect-square rounded-lg border-2 border-dashed relative overflow-hidden group",
        content ? "border-transparent" : "border-muted-foreground/20",
        styleClasses[style as keyof typeof styleClasses]
      )}
    >
      {content ? (
        // When panel has content
        <div className="w-full h-full relative">
          <img 
            src={content} 
            alt="Comic panel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 flex items-center justify-center gap-2">
            <Button size="sm" variant="outline" className="bg-background/90">
              <RefreshCw className="h-4 w-4 mr-2" />
              Regenerate
            </Button>
            <Button size="sm" variant="outline" className="bg-background/90">
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>
        </div>
      ) : (
        // Empty panel - placeholder or loading state
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {isGenerating ? (
            <div className="flex flex-col items-center gap-2">
              <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
              <p className="text-sm text-muted-foreground animate-pulse">Generating...</p>
            </div>
          ) : (
            <>
              <ImageIcon className="h-8 w-8 mb-2 text-muted-foreground/40" />
              <p className="text-sm text-muted-foreground max-w-[80%] text-center">
                Panel will appear here after generation
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}