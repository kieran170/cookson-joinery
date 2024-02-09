import React, { useState } from 'react';
import './OursServices.css';
import fencing1 from '../../assets/fencing.jpg';
import kitchenBathroomImage from '../../assets/kitchen.jpg';
import windowsAndDoorsImage from '../../assets/windowAndDoors.jpeg';
import propertyMaintenanceImage from '../../assets/propertyMaintenance.jpeg';
import SectionLineBreak from '../SectionLineBreak/SectionLineBreak';
import fencing2 from '../../assets/fencing2.png';
import fencing3 from '../../assets/fencing3.png';
import kitchen2 from '../../assets/kitchen2.png';
import kitchen3 from '../../assets/kitchen3.png';
import kitchen4 from '../../assets/kitchen4.png';
import kitchen5 from '../../assets/kitchen5.png';
import kitchen6 from '../../assets/kitchen6.png';
import bathroom2 from '../../assets/bathroom2.png';
import doors2 from '../../assets/doors2.png';
import windows3 from '../../assets/windows3.png';
import windows4 from '../../assets/windows4.png';
import rightArrow from '../../assets/right-arrow.png';
import bathroom3 from '../../assets/bathroom3.png';
import bathroom4 from '../../assets/bathroom4.png';
import fencing4 from '../../assets/fence3.png';
import fencing5 from '../../assets/fence4.png';
import fencing6 from '../../assets/fencing5.png';
import fencing7 from '../../assets/fence6.png';
import property2 from '../../assets/property2.png';
import property3 from '../../assets/property3.png';
import property4 from '../../assets/property4.png';

type Services = {
  heading: string;
  text: string;
  image: string;
};

const fencingImages = [
  fencing1,
  fencing2,
  fencing3,
  fencing4,
  fencing6,
  fencing7,
];
const kitchenImages = [
  kitchenBathroomImage,
  kitchen2,
  kitchen3,
  bathroom2,
  bathroom3,
  bathroom4,
  kitchen4,
  kitchen5,
  kitchen6,
];
const windowImages = [windowsAndDoorsImage, doors2, windows3, windows4];

const propertyImages = [
  propertyMaintenanceImage,
  property2,
  property3,
  property4,
  fencing5,
];

const OursServices = () => {
  const [fencingImage, setFencingImage] = useState(fencingImages[0]);
  const [fencingImageIndex, setFencingImageIndex] = useState(0);
  const [kitchenImage, setKitchenImage] = useState(kitchenImages[0]);
  const [kitchenImageIndex, setKitchenImageIndex] = useState(0);
  const [windowImage, setWindowImage] = useState(windowImages[0]);
  const [windowImageIndex, setWindowImageIndex] = useState(0);
  const [propertyImage, setPropertyImage] = useState(propertyImages[0]);
  const [propertyImageIndex, setPropertyImageIndex] = useState(0);

  const services: Services[] = [
    {
      heading: 'Fencing & Decking',
      text: `Premium materials, precise craftsmanship. From decks to fences, tailored to you. Excellence meets elegance. Trust us for outdoor perfection.`,
      image: fencingImage,
    },
    {
      heading: 'Kitchen & Bathrooms',
      text: `Revitalize your home with our custom kitchen and bathroom designs. Tailored to your lifestyle, our expert touch brings your vision to life. From functionality to elegance, we craft luxurious retreats for ultimate comfort and joy.`,
      image: kitchenImage,
    },
    {
      heading: 'Windows & Doors',
      text: `Elevate your home's appeal and function with our tailored window and door solutions. Seamlessly blending style and practicality, our meticulous designs reflect your unique taste, ensuring perfection in every detail.`,
      image: windowImage,
    },
    {
      heading: 'Property Maintenance',
      text: `Count on us to maintain your home flawlessly. Specializing in quality maintenance for landlords, we offer reliable support and peace of mind to owners and tenants alike. With our proactive approach, your home is in capable hands.`,
      image: propertyImage,
    },
  ];

  const updateServiceImage = (heading: string) => {
    switch (heading) {
      case 'Fencing & Decking': {
        if (!fencingImages[fencingImageIndex + 1]) {
          setFencingImage(fencingImages[0]);
          setFencingImageIndex(0);
        } else {
          setFencingImage(fencingImages[fencingImageIndex + 1]);
          setFencingImageIndex(fencingImageIndex + 1);
        }
        break;
      }
      case 'Kitchen & Bathrooms': {
        if (!kitchenImages[kitchenImageIndex + 1]) {
          setKitchenImage(kitchenImages[0]);
          setKitchenImageIndex(0);
        } else {
          setKitchenImage(kitchenImages[kitchenImageIndex + 1]);
          setKitchenImageIndex(kitchenImageIndex + 1);
        }
        break;
      }
      case 'Windows & Doors': {
        if (!windowImages[windowImageIndex + 1]) {
          setWindowImage(windowImages[0]);
          setWindowImageIndex(0);
        } else {
          setWindowImage(windowImages[windowImageIndex + 1]);
          setWindowImageIndex(windowImageIndex + 1);
        }
        break;
      }
      case 'Property Maintenance': {
        if (!propertyImages[propertyImageIndex + 1]) {
          setPropertyImage(propertyImages[0]);
          setPropertyImageIndex(0);
        } else {
          setPropertyImage(propertyImages[propertyImageIndex + 1]);
          setPropertyImageIndex(propertyImageIndex + 1);
        }
        break;
      }
    }
  };

  return (
    <div className="services-section-container">
      <SectionLineBreak heading="Our Service" />
      <div className="our-services-container">
        {services.map((service) => {
          return (
            <div key={service.heading} className="service-container">
              <p className="service-header">{service.heading}</p>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <img
                  className="service-image"
                  src={service.image}
                  alt="service"
                />
                <img
                  className="right-arrow"
                  onClick={() => updateServiceImage(service.heading)}
                  height={28}
                  src={rightArrow}
                  alt="right-arrow"
                />
              </div>
              <p style={{ fontWeight: 700, fontSize: 16 }}>{service.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OursServices;
