import React from 'react';
import { Card, Avatar } from 'antd';
import styled from 'styled-components';
import RestFieldItemWithLabel from 'components/RestField/RestFieldItemWithLable';
import PropTypes from 'prop-types';
import { EditOutlined, UserOutlined } from '@ant-design/icons';

const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 16px;
  }
`;

const CardStudentInfo = ({ data }) => {
  return (
    <StyledCard title="Thông tin" extra=<EditOutlined size={12} />>
      <section className="flex" style={{ marginBottom: '20px' }}>
        <Avatar
          size={80}
          shape="square"
          icon={<UserOutlined />}
          style={{ marginRight: '12px' }}
        />
        <div>
          <h2> Vũ Thị Ngọc Anh</h2>
          <span> MSHS: 7329 </span>
        </div>
      </section>
      <div style={{ marginTop: '21px' }}>
        <h3 style={{ marginBottom: '11px' }}> Thông tin cá nhân</h3>
        <RestFieldItemWithLabel header="Tuổi" source="" record={data} />
        <RestFieldItemWithLabel header="Ngày sinh" source="" record={data} />
        <RestFieldItemWithLabel header="Giới tính" source="" record={data} />
        <RestFieldItemWithLabel header="Quốc gia" source="" record={data} />
        <RestFieldItemWithLabel header="Nhóm máu" source="" record={data} />
      </div>
      <div style={{ marginTop: '21px' }}>
        <h3 style={{ marginBottom: '11px' }}> Người thân </h3>
        <RestFieldItemWithLabel header="Tuổi" source="" record={data} />
        <RestFieldItemWithLabel header="Ngày sinh" source="" record={data} />
        <RestFieldItemWithLabel header="Giới tính" source="" record={data} />
        <RestFieldItemWithLabel header="Quốc gia" source="" record={data} />
        <RestFieldItemWithLabel header="Nhóm máu" source="" record={data} />
      </div>
      <div style={{ marginTop: '21px' }}>
        <h3 style={{ marginBottom: '11px' }}> Học tập </h3>
        <RestFieldItemWithLabel header="Nhập học" source="" record={data} />
        <RestFieldItemWithLabel header="Cấp học" source="" record={data} />
        <RestFieldItemWithLabel header="Lớp" source="" record={data} />
        <RestFieldItemWithLabel header="GVCN" source="" record={data} />
        <RestFieldItemWithLabel header="Khá" source="" record={data} />
        <RestFieldItemWithLabel header="Hạnh kiểm" source="" record={data} />
        <RestFieldItemWithLabel header="Chuyên cần" source="" record={data} />
      </div>
    </StyledCard>
  );
};

CardStudentInfo.propTypes = {
  data: PropTypes.object,
};

export default CardStudentInfo;
