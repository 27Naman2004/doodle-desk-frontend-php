
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface BabysitterCardProps {
  name: string;
  image: string;
  description: string;
  experience: string;
  availability: string;
}

const BabysitterCard = ({
  name,
  image,
  description,
  experience,
  availability
}: BabysitterCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="flex justify-center pt-6">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-doodle-primary">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=Teacher';
            }}
          />
        </div>
      </div>
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-2xl font-heading text-doodle-primary">{name}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <CardDescription className="text-gray-700 mb-4">
          {description}
        </CardDescription>
        <div className="space-y-2 text-sm font-medium">
          <p className="flex items-center justify-center gap-1">
            <span className="font-semibold">Experience:</span> {experience}
          </p>
          <p className="flex items-center justify-center gap-1">
            <span className="font-semibold">Availability:</span> {availability}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BabysitterCard;
