import { FC } from 'react';
import styled from 'styled-components';

import Banner1 from '../../../assets/images/fb-page/1.jpg';
import Banner2 from '../../../assets/images/fb-page/2.jpg';
import Banner3 from '../../../assets/images/fb-page/3.jpg';
import Banner4 from '../../../assets/images/fb-page/4.jpg';
import Banner5 from '../../../assets/images/fb-page/5.jpg';

const ImageGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: row; /* Stack in a single row */
    justify-content: center; /* Center the visible image */
  }
`;

const ImageRow = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const ImageItem = styled.img`
  width: 200px;
  object-fit: contain;
  border-radius: 8px;

  /* Hide all images except the first on small screens */
  @media (max-width: 768px) {
    &:not(:first-of-type) {
      display: none; /* Hide all images except the first */
    }
  }
`;

const Introduction: FC = () => {
  return (
    <a target="_blank" href="https://www.facebook.com/profile.php?id=61570303657854" rel="noreferrer">
      <ImageGrid>
        {/* First row */}
        <ImageRow>
          <ImageItem src={Banner1} alt="Image 1" />
          <ImageItem src={Banner2} alt="Image 2" />
        </ImageRow>
        {/* Second row */}
        <ImageRow>
          <ImageItem src={Banner3} alt="Image 3" />
          <ImageItem src={Banner4} alt="Image 4" />
          <ImageItem src={Banner5} alt="Image 5" />
        </ImageRow>
      </ImageGrid>
    </a>
  );
};

export default Introduction;
