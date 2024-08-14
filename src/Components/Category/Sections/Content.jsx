import React from 'react';
import { MenuData } from '../../data/menuData';
import { services } from '../../data/servicesData';

const Content = ({ sectionRefs }) => {
  return (
    <div className='services-wrapper'>
      {MenuData.map((item, index) => (
        <div
          key={index}
          className='services'
          ref={el => sectionRefs.current[index] = el}
        >
          <div className='service-info'>
            <h1 className='services-title'>{item.menu_name}</h1>
            <h3 className='services-desc'>{services?.[item.menu_name]?.service_intro}</h3>
          </div>
          <div className='cards'>
            {services?.[`${item?.menu_name}`]?.services_data?.map((elm, elmIndex) => (
              <div key={elmIndex} className='service-card'>
                <div className='service-details'>
                  <h3 className='card-title'>{elm?.title}</h3>
                  <p className='card-time'>{elm?.duration}</p>
                  <p className='card-desc'>{elm?.description}</p>
                  <p className='price'>{elm?.price}</p>
                </div>
                <button className='add-btn'>+</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
