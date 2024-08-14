import React, { useRef, useState, useEffect } from 'react';
import { MenuData } from '../../data/menuData';

const CategoryMenu = ({ refData, activeTab, setActiveTab, scrollToSection, sectionRefs }) => {
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef({});

  useEffect(() => {
    if (tabRefs.current[activeTab]) {
      const { offsetLeft, offsetWidth } = tabRefs.current[activeTab];
      setSliderStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <div className='tabs' ref={refData}>
      {MenuData.map((item, index) => (
        <div
          key={index}
          ref={el => (tabRefs.current[item.menu_name] = el)}
          className={`${item.menu_name === activeTab ? 'active' : ''}`}
          onClick={() => {
            setActiveTab(item.menu_name);
            console.log("Scrolling to section:", sectionRefs.current[item.menu_name]);
            scrollToSection(index);
          }}
        >
          {item.menu_name}
        </div>
      ))}
      <div
        className="activebg"
        style={{
          width: `${sliderStyle.width}px`,
          left: `${sliderStyle.left}px`,
        }}
      ></div>
    </div>
  );
};

export default CategoryMenu;
