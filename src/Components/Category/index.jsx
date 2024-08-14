import React, { useRef, useState } from 'react';
import CategoryMenu from './Sections/CategoryMenu';
import Content from './Sections/Content';

const CategoryServices = () => {
  const [activeTab, setActiveTab] = useState("Featured");
  const sliderRef = useRef(null);
  const sectionRefs = useRef([]);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= 150;
  };

  const scrollToSection = (ref) => {
    console.log(ref.current);
    sectionRefs.current[ref].scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft += 150;
  };

  return (
    <div className='Category'>
      <div className='tab-wrapper'>
        <CategoryMenu
          refData={sliderRef}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          scrollToSection={scrollToSection}
          sectionRefs={sectionRefs}
        />
        <div className='btn-wrapper'>
          <button className="scroll-btn left" onClick={scrollLeft}>
            &lt;
          </button>
          <button className="scroll-btn right" onClick={scrollRight}>
            &gt;
          </button>
        </div>
      </div>
      <div className='content'>
        <Content sectionRefs={sectionRefs} activeTab={activeTab} />
      </div>
    </div>
  );
};

export default CategoryServices;
