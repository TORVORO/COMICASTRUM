"use client"

import { Button } from "@/components/ui/button";

interface PanelLayoutSelectorProps {
  layout: string;
  onSelectLayout: (layout: string) => void;
}

export function PanelLayoutSelector({ layout, onSelectLayout }: PanelLayoutSelectorProps) {
  const layouts = [
    { id: "grid-2x2", name: "2x2 Grid", icon: <div className="grid grid-cols-2 gap-1 h-16 w-full"><div className="bg-primary/20 rounded"></div><div className="bg-primary/20 rounded"></div><div className="bg-primary/20 rounded"></div><div className="bg-primary/20 rounded"></div></div> },
    { id: "grid-3x2", name: "3x2 Grid", icon: <div className="grid grid-cols-3 gap-1 h-16 w-full"><div className="bg-primary/20 rounded"></div><div className="bg-primary/20 rounded"></div><div className="bg-primary/20 rounded"></div><div className="bg-primary/20 rounded"></div><div className="bg-primary/20 rounded"></div><div className="bg-primary/20 rounded"></div></div> },
    { id: "grid-3x3", name: "3x3 Grid", icon: <div className="grid grid-cols-3 gap-1 h-16 w-full"><div className="bg-primary/20 rounded"></div><div className="bg-primary/20 rounded"></div><div className="bg-primary/20 rounded"></div><div className="bg-primary/20 rounded"></div><div className="bg-primary/20 rounded"></div><div className="bg-primary/20 rounded"></div><div className="bg-primary/20 rounded"></div><div className="bg-primary/20 rounded"></div><div className="bg-primary/20 rounded"></div></div> },
  ];

  return (
    <div className="space-y-2">
      <div className="grid gap-2">
        {layouts.map((item) => (
          <Button
            key={item.id}
            variant="outline"
            size="sm"
            className={`h-auto justify-start px-2 py-1 ${layout === item.id ? 'border-primary bg-primary/10' : ''}`}
            onClick={() => onSelectLayout(item.id)}
          >
            <div className="w-full">
              {item.icon}
              <div className="text-xs mt-1">{item.name}</div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}