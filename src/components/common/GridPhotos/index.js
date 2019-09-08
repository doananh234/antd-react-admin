import React, { useState, useRef } from 'react';
import { Carousel, Modal, Icon } from 'antd';
import PropTypes from 'prop-types';
import PreviewImage from '../PreviewImage';
import GridPhotosWrapper from './styles';

const GridPhotos = ({ images }) => {
  const carouselRef = useRef(null);
  const subImages = images ? [...images].splice(0, 2) : [];
  const [previewVisible, setPreviewVisible] = useState(null);

  const handleCancel = () => {
    setPreviewVisible(null);
  };

  const onPreviewUI = index => {
    setPreviewVisible(true);
    setTimeout(() => {
      carouselRef.current && carouselRef.current.goTo(index);
    }, 10);
  };
  return (
    <GridPhotosWrapper>
      {subImages.map((data, index) => (
        <PreviewImage onPreview={() => onPreviewUI(index)} key={data} src={data} />
      ))}
      {images && images.length > subImages.length ? (
        <div className="imageCount">
          <img alt="" src={images[2]} className="image" />
          {images.length - subImages.length - 1 ? (
            <div className="overlay">
              <span>
+
                {images.length - subImages.length - 1}
              </span>
            </div>
          ) : null}
          <div className="overlay2">
            <Icon type="eye" onClick={() => onPreviewUI(2)} />
          </div>
        </div>
      ) : null}

      <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
        <Carousel draggable ref={carouselRef}>
          {images &&
            images.map(data => (
              <img key={data} alt="example" style={{ width: '100%', height: '100%' }} src={data} />
            ))}
        </Carousel>
      </Modal>
    </GridPhotosWrapper>
  );
};

GridPhotos.propTypes = {
  images: PropTypes.array,
};
GridPhotos.defaultProps = {
  images: [],
};

export default GridPhotos;
