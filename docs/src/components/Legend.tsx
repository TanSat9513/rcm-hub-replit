import { Card, CardContent } from "@/components/ui/card";

export function Legend() {
  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded" />
            <span className="text-sm font-medium">High (3) - Market Leader</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-orange-500 rounded" />
            <span className="text-sm font-medium">Medium (2) - Solid Solution</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded" />
            <span className="text-sm font-medium">Low (1) - Emerging/Potential</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
