
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import "./BabysitterCard.css";

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
    <Card className="babysitter-card">
      <div className="babysitter-image-container">
        <div className="babysitter-image-wrapper">
          <img 
            src={image} 
            alt={name} 
            className="babysitter-image"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=Teacher';
            }}
          />
        </div>
      </div>
      <CardHeader className="babysitter-header">
        <CardTitle className="babysitter-title">{name}</CardTitle>
      </CardHeader>
      <CardContent className="babysitter-content">
        <CardDescription className="babysitter-description">
          {description}
        </CardDescription>
        <div className="babysitter-details">
          <p className="babysitter-info">
            <span className="babysitter-label">Experience:</span> {experience}
          </p>
          <p className="babysitter-info">
            <span className="babysitter-label">Availability:</span> {availability}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BabysitterCard;
