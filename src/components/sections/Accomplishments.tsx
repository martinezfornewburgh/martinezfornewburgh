import Link from 'next/link';
import AccomplishmentCard from '../cards/AccomplishmentCard';
import { accomplishmentsData } from '@/data/accomplishments';

export default function Accomplishments() {
  return (
    <section className="section-container accomplishments-section" id="accomplishments">
      <div className="container mx-auto">
        <h2 className="section-title">
          Fighting For A Safe & <br />
          Affordable Newburgh For All
        </h2>
        
        <div className="accomplishments-grid">
          {accomplishmentsData.map((item, index) => (
            <AccomplishmentCard
              key={index}
              title={item.title}
              description={item.description}
              imageAlt={item.imageAlt}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>
        
        <div className="view-more-container" style={{ display: 'none' }}>
          <Link href="/impact" className="view-more-link">
            See Full List Of Giselle Martinez's Local Impact →
          </Link>
        </div>
      </div>
    </section>
  );
}
