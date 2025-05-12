"use client"

import { Button } from "@/components/ui/button";
import { 
  Save, 
  Download, 
  Undo, 
  Redo, 
  Plus, 
  Copy, 
  Trash, 
  Grid, 
  Eye,
  Share
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ToolbarPanelProps {
  onSave: () => void;
}

export function ToolbarPanel({ onSave }: ToolbarPanelProps) {
  return (
    <TooltipProvider>
      <div className="bg-background rounded-lg border shadow-sm p-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={onSave}>
                  <Save className="h-4 w-4" />
                  <span className="sr-only">Save</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Save</TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Undo className="h-4 w-4" />
                  <span className="sr-only">Undo</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Undo</TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Redo className="h-4 w-4" />
                  <span className="sr-only">Redo</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Redo</TooltipContent>
            </Tooltip>
            
            <Separator orientation="vertical" className="h-6 mx-1" />
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Plus className="h-4 w-4" />
                  <span className="sr-only">Add Panel</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Add Panel</TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Duplicate Panel</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Duplicate Panel</TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Trash className="h-4 w-4" />
                  <span className="sr-only">Delete Panel</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Delete Panel</TooltipContent>
            </Tooltip>
            
            <Separator orientation="vertical" className="h-6 mx-1" />
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Grid className="h-4 w-4" />
                  <span className="sr-only">Layout Options</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Layout Options</TooltipContent>
            </Tooltip>
          </div>
          
          <div className="flex items-center space-x-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Eye className="h-4 w-4" />
                  <span className="sr-only">Preview</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Preview Comic</TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Share className="h-4 w-4" />
                  <span className="sr-only">Share</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Share</TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Download className="h-4 w-4" />
                  <span className="sr-only">Export</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Export Comic</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}