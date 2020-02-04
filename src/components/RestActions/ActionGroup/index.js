import React from 'react';
import PropTypes from 'prop-types';
import { Popover, Icon } from 'antd';
import { GroupWrapper } from './styles';

const ActionGroup = ({
  children,
  elementProps,
  gotoEditPage,
  gotoShowPage,
  deleteItem,
  record,
  modelResource,
  icon,
  placement,
  hasCustomize,
}) => {
  if (hasCustomize) {
    if (!record.isDefault) {
      return (
        <GroupWrapper {...elementProps}>
          <Popover
            content={React.Children.map(children, element =>
              React.cloneElement(element, {
                resource: modelResource,
                gotoEditPage: element.props.gotoEditPage || gotoEditPage,
                gotoShowPage: element.props.gotoShowPage || gotoShowPage,
                deleteItem: element.props.deleteItem || deleteItem,
                record,
                key: element.props.source,
              }),
            )}
            trigger="click"
            placement={placement}
          >
            <Icon className="iconSetting" type={icon} />
          </Popover>
        </GroupWrapper>
      );
    }
    return null;
  }
  return (
    <GroupWrapper {...elementProps}>
      <Popover
        content={React.Children.map(children, element =>
          React.cloneElement(element, {
            resource: modelResource,
            gotoEditPage: element.props.gotoEditPage || gotoEditPage,
            gotoShowPage: element.props.gotoShowPage || gotoShowPage,
            deleteItem: element.props.deleteItem || deleteItem,
            record,
          }),
        )}
        trigger="hover"
        placement={placement}
      >
        <Icon className="iconSetting" type={icon} />
      </Popover>
    </GroupWrapper>
  );
};

ActionGroup.propTypes = {
  children: PropTypes.node,
  elementProps: PropTypes.object,
  record: PropTypes.object,
  gotoEditPage: PropTypes.func,
  gotoShowPage: PropTypes.func,
  deleteItem: PropTypes.func,
  source: PropTypes.string,
  fixed: PropTypes.string,
  width: PropTypes.number,
  resource: PropTypes.string,
  icon: PropTypes.string,
  placement: PropTypes.string,
  modelResource: PropTypes.string,
  hasCustomize: PropTypes.bool,
};

ActionGroup.defaultProps = {
  source: 'actionGroup',
  fixed: 'right',
  width: 100,
  placement: 'bottomRight',
};

export default ActionGroup;
