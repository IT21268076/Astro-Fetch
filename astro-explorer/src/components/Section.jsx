// Section.jsx
import React from 'react';

const Section = ({ id, title, children }) => {
  const childrenArray = React.Children.toArray(children);
 return (
    <section
      id={id}
      className=" py-16 flex scroll-mt-24  flex-col items-center gap-4 space-y-8">
      <div className="flex flex-col items-center gap-4">
        {childrenArray.find(child => child.props.slot === 'eyebrow')}
        <h2
          className="gradient-text text-center font-extrabold tracking-tight text-6xl">
          {title}
        </h2>
      </div>
      <p className="max-w-xl text-center font-bold text-2xl text-white">
        {childrenArray.find(child => child.props.slot === 'lead')}
      </p>
        {childrenArray.filter(child => !child.props.slot)}
    </section>
 );
};

export default Section;
