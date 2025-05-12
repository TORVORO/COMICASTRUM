"use client"

interface StylePreviewProps {
  style: string;
}

export function StylePreview({ style }: StylePreviewProps) {
  // These would be actual preview images in a real implementation
  const styleExamples = {
    western: "https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=600",
    manga: "https://images.pexels.com/photos/6498998/pexels-photo-6498998.jpeg?auto=compress&cs=tinysrgb&w=600",
    children: "https://images.pexels.com/photos/265690/pexels-photo-265690.jpeg?auto=compress&cs=tinysrgb&w=600",
  };

  return (
    <div className="rounded-lg overflow-hidden h-32 relative">
      <img 
        src={styleExamples[style as keyof typeof styleExamples]} 
        alt={`${style} style preview`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2">
        <div className="text-white text-xs text-center capitalize font-medium">
          {style} Style
        </div>
      </div>
    </div>
  );
}