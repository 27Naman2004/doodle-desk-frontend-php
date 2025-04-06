
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Slider from '@/components/Slider';
import ValueCard from '@/components/ValueCard';
import BabysitterCard from '@/components/BabysitterCard';
import { Button } from '@/components/ui/button';
import './Index.css';

const Index = () => {
  // Slider data
  const sliderData = [
    {
      image: 'https://images.unsplash.com/photo-1536337005238-94b997371b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500&q=80',
      title: 'Doodle Desk - Nurturing Creativity',
      subtitle: 'Where every child discovers their unique potential.'
    },
    {
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500&q=80',
      title: 'Safe and Engaging Environment',
      subtitle: 'Building strong foundations for lifelong learning.'
    },
    {
      image: 'https://images.unsplash.com/photo-1612387290123-34af734b5f5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500&q=80',
      title: 'Personalized Attention',
      subtitle: 'Ensuring each child grows with confidence and joy.'
    }
  ];

  // Value card data
  const valueCardData = [
    {
      image: 'https://i.pinimg.com/736x/5c/ee/6d/5cee6de0fdd620632c968d21c2b1e037.jpg',
      title: 'Learn And Play',
      description: 'Join the intense of playing and learning to make your child comfortable',
      bgColor: 'primary'
    },
    {
      image: 'https://i.pinimg.com/736x/13/49/c9/1349c904cd84cc45af0490636b4fed79.jpg',
      title: 'Nutritious Meal',
      description: 'Children needs meals with full of nutrition necessary for a day of life.',
      bgColor: 'secondary'
    },
    {
      image: 'https://i.pinimg.com/736x/61/c7/85/61c785305b4588d05082a896520d2a25.jpg',
      title: 'Great Teachers',
      description: 'Experienced and well trained teachers help your child develop more in all aspects.',
      bgColor: 'primary'
    },
    {
      image: 'https://i.pinimg.com/736x/0c/e0/b7/0ce0b7e0f53ef5136241939e596d0c04.jpg',
      title: 'Cute Environment',
      description: "The colorful environment of Kindori helps your child develop it's age, making them more comfortable.",
      bgColor: 'secondary'
    }
  ];

  // Babysitter data
  const babysitterData = [
    {
      name: 'Shivani Sharma',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      description: 'Experienced babysitter with a passion for childcare.',
      experience: '5 years',
      availability: 'Mon-Fri, 9am-5pm'
    },
    {
      name: 'Saakshi Jha',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      description: 'Certified in CPR and First Aid, dedicated to child safety.',
      experience: '3 years',
      availability: 'Weekends, flexible hours'
    },
    {
      name: 'Mahak Sharma',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      description: 'Specializes in early childhood education and development.',
      experience: '7 years',
      availability: 'Mon-Fri, 10am-6pm'
    }
  ];

  return (
    <div className="page-container">
      <Header />
      
      {/* Hero Section with Slider */}
      <Slider slides={sliderData} />
      
      {/* Core Values Section */}
      <section className="values-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Us</h2>
            <h3 className="section-subtitle">Our Core Values</h3>
            <p className="section-description">
              With Us, we always put the quality of teaching children first, 
              please rest assured when sending children at DoodleDesk.
            </p>
          </div>
          
          <div className="values-grid">
            {valueCardData.map((card, index) => (
              <ValueCard
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
                bgColor={card.bgColor as 'primary' | 'secondary'}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* How to Enroll Section */}
      <section className="enroll-section">
        <div className="section-container">
          <div className="enroll-box">
            <h2 className="enroll-title">
              How To Let Your Child Study At Doodle Desk?
            </h2>
            <p className="enroll-description">
              At Doodle Desk Daycare, we understand that choosing the right place for your child 
              is one of the most important decisions you'll make as a parent. That's why we're 
              dedicated to creating a nurturing, safe, and engaging environment where every child 
              feels at home. Our experienced caregivers and educators focus on holistic development—encouraging 
              creativity, building social skills, and laying strong foundations for lifelong learning. 
              With structured programs, playful activities, and personalized attention, we ensure each 
              child grows with confidence, joy, and curiosity. More than just a daycare, we're a trusted 
              partner in your child's early journey.
            </p>
            <div className="enroll-action">
              <Button className="enroll-button">
                Enroll Your Child Today
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Babysitters Section */}
      <section className="babysitters-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Our Babysitters</h2>
            <p className="section-description">
              Meet our team of experienced and caring professionals dedicated to your child's growth and development.
            </p>
          </div>
          
          <div className="babysitters-grid">
            {babysitterData.map((babysitter, index) => (
              <BabysitterCard
                key={index}
                name={babysitter.name}
                image={babysitter.image}
                description={babysitter.description}
                experience={babysitter.experience}
                availability={babysitter.availability}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Us Section */}
      <section className="contact-section">
        <div className="section-container">
          <div className="contact-content">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-description">Feel Free to contact us for any enquiry</p>
            <div className="contact-details">
              <p><span className="contact-label">Email:</span> sharma.shivani9155@gmail.com</p>
              <p><span className="contact-label">Phone:</span> 7004675031</p>
              <p><span className="contact-label">Address:</span> Jalandhar, Punjab</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
