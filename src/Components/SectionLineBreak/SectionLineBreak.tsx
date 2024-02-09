import React from 'react';
import './SectionLineBreak.css';

const SectionLineBreak = ({ heading }: { heading: string }) => {
  return (
    <div className="section-line-break">
      <hr className="section-line-hr" />
      <p className="section-header">{heading}</p>
      <hr className="section-line-hr" />
    </div>
  );
};
export default SectionLineBreak;
