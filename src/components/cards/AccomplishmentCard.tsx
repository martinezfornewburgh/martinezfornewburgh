import { AccomplishmentData } from '@/data/accomplishments';
import PlaceholderImage from '../utils/PlaceholderGenerator';

const AccomplishmentCard = ({ title, description, imageSrc, imageAlt }: AccomplishmentData) => {
  return (
    <div className="accomplishment-card">
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-image-container">
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={imageAlt}
            className="card-image"
          />
        ) : (
          <PlaceholderImage 
            text={title}
            width={400}
            height={220}
            bgColor="#3B0764"
            textColor="#ffffff"
          />
        )}
      </div>
    </div>
  );
};

export default AccomplishmentCard;
