
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ValueCardProps {
  title: string;
  description: string;
  image: string;
  bgColor?: 'primary' | 'secondary';
}

const ValueCard = ({ title, description, image, bgColor = 'primary' }: ValueCardProps) => {
  const getBgColor = () => {
    return bgColor === 'primary' ? 'bg-doodle-primary' : 'bg-doodle-secondary';
  };

  return (
    <Card className={`${getBgColor()} text-white overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1`}>
      <div className="flex justify-center pt-6">
        <div className="relative w-24 h-24 rounded-full bg-white p-2 shadow-md">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover rounded-full"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/100?text=Value';
            }}
          />
        </div>
      </div>
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-xl font-heading">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-white/90 text-center">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ValueCard;
