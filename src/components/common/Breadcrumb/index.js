import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import Text from '../Text';

const CustomBreadcrumb = props => (
  <Breadcrumb separator={<Text inline>&gt;</Text>}>
    {props.data.map((data, index) => (
      <Breadcrumb.Item key={data.path}>
        <Link href={data.path} to={data.path}>
          {index === props.data.length - 1 ? (
            <Text inline>
              {data.title}
            </Text>
          ) : (
            <Text inline>
              {data.title}
            </Text>
          )}
        </Link>
      </Breadcrumb.Item>
    ))}
  </Breadcrumb>
);

export const makeBreacrumbFromPath = (path, title) => {
  const BREADCRUMB_LIST = [];
  const paths = path.split('/');
  paths.forEach((data, index) => {
    if (data === '') return;
    BREADCRUMB_LIST.push({
      title: data,
      path: `${BREADCRUMB_LIST[index - 1] ? BREADCRUMB_LIST[index - 1].path : ''}/${data}`,
    });
  });
  if (title) {
    BREADCRUMB_LIST[paths.length].title = title || BREADCRUMB_LIST[paths.length].title;
  }
  return BREADCRUMB_LIST;
};

CustomBreadcrumb.propTypes = {
  data: PropTypes.array,
};
export default CustomBreadcrumb;
