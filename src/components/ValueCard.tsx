
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import "./ValueCard.css";

interface ValueCardProps {
  title: string;
  description: string;
  image: string;
  bgColor?: 'primary' | 'secondary';
}

const ValueCard = ({ title, description, image, bgColor = 'primary' }: ValueCardProps) => {
  const cardClass = bgColor === 'primary' ? 'value-card-primary' : 'value-card-secondary';

  return (
    <Card className={`value-card ${cardClass}`}>
      <div className="value-card-image-container">
        <div className="value-card-image-wrapper">
          <img 
            src={image} 
            alt={title} 
            className="value-card-image"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/100?text=Value';
            }}
          />
        </div>
      </div>
      <CardHeader className="value-card-header">
        <CardTitle className="value-card-title">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="value-card-description">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ValueCard;
