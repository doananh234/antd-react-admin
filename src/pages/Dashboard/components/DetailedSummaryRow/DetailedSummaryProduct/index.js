import React, { useRef } from 'react';
import { Row, Col, Button, Carousel } from 'antd';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import i18next from 'i18next';
import { map } from 'lodash';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import DetailSummaryProductStyles from './styles';

const DetailedSummaryProduct = ({ data }) => {
  const dataPopular = useSelector((state) => state.config.popularProduct);
  const carousel = useRef(null);
  return (
    <DetailSummaryProductStyles>
      <Carousel autoplay ref={carousel}>
        {map(dataPopular || data, (item, i) => (
          <Row className="carousel-item" key={String(i)}>
            <Col span={18}>
              <div className="image-content">
                <img src={item.image} alt={item.name} height={200} />
              </div>
            </Col>
            <Col span={6}>
              <div className="right-carousel">
                <div className="description-carousel">
                  <span className="sold">{`${item.sold} sold`}</span>
                  <span className="name">{item.name}</span>
                  <span className="price">
                    {`${i18next.t('currencyUnit.sign')} ${item.price?.toFixed(
                      2,
                    )}`}
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </Carousel>
      <div className="next-prev-button">
        <Button
          type="icon"
          icon={<LeftOutlined />}
          onClick={() => carousel.current.prev()}
        />
        <Button
          type="icon"
          icon={<RightOutlined />}
          onClick={() => carousel.current.next()}
        />
      </div>
    </DetailSummaryProductStyles>
  );
};

DetailedSummaryProduct.propTypes = {
  data: PropTypes.array,
};

DetailedSummaryProduct.defaultProps = {
  data: [
    {
      name: 'Leather Bag',
      sold: 654,
      price: 59.0,
      image:
        'https://mannatthemes.com/metrica/metrica_live/assets/images/products/img-7.png',
    },
    {
      name: 'Important Watch',
      sold: 654,
      price: 99.0,
      image:
        'https://mannatthemes.com/metrica/metrica_live/assets/images/products/img-1.png',
    },
    {
      name: 'Wireless Headphone',
      sold: 10,
      price: 39.0,
      image:
        'https://mannatthemes.com/metrica/metrica_live/assets/images/products/img-4.png',
    },
  ],
};

export default DetailedSummaryProduct;
