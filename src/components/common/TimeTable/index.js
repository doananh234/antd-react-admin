import React from 'react';
import { Card, Table } from 'antd';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledTable = styled(Table)`
  && {
    width: 100%;
    .ant-empty-image {
      height: 317px;
      margin-bottom: 8px;
    }
    .ant-table-tbody > tr > td {
      padding: 8px 16px;
      overflow-wrap: break-word;
    }
  }
`;

const StyledSectionColumn = styled.table`
  th {
    color: #0f100d;
    font-weight: 500;
    text-align: left;
    background: #ffff;
    border: 1px solid #e8e8e8;
    border-right: none;
    padding: 16px;
  }
  td {
    color: #0f100d;
    font-weight: 500;
    text-align: left;
    background: #ffff;
    border: 1px solid #e8e8e8;
    border-right: none;
    padding: 84px 16px;
  }
`;

const TimeTable = () => {
  const data = useSelector(state => state.timetables.currentData);

  const columns = [
    {
      title: 'THỜI GIAN',
      dataIndex: 'hourStart',
      render: (row, data) => (
        <span>
          {data.hourStart}
          {'-'}
          {data.hourEnd}
        </span>
      ),
    },
    {
      title: 'THỨ HAI',
      colSpan: 1,
      dataIndex: 'monday',
    },
    {
      title: 'THỨ BA',
      colSpan: 1,
      dataIndex: 'wednesday',
    },
    {
      title: 'THỨ TƯ',
      colSpan: 1,
      dataIndex: 'address',
    },
    {
      title: 'THỨ NĂM',
      colSpan: 1,
      dataIndex: 'thursday',
    },
    {
      title: 'THỨ SÁU',
      colSpan: 1,
      dataIndex: 'friday',
    },
    {
      title: 'THỨ BẢY',
      colSpan: 1,
      dataIndex: 'saturday',
    },
    {
      title: 'CHỦ NHẬT',
      colSpan: 1,
      dataIndex: 'sunday',
    },
  ];
  return (
    <Card title="Thời khoá biểu" extra="20/01 - 09/02/2019">
      <section className="flex">
        <StyledSectionColumn>
          <thead>
            <tr>
              <th>Buổi </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sáng</td>
            </tr>
            <tr>
              <td>Chiều</td>
            </tr>
          </tbody>
        </StyledSectionColumn>
        <StyledTable
          columns={columns}
          bordered
          dataSource={data?.timetableData}
          pagination={false}
        />
      </section>
    </Card>
  );
};

TimeTable.propTypes = {};

export default TimeTable;
