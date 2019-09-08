import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { CustomerContactWrapper } from './styles';
import RestInputItem from '../../../../components/RestInput/RestInputItem';
import RestAvatarInput from '../../../../components/RestInput/RestAvatarInput';
import SaveButton from '../../../../components/RestActions/SaveButton';

const EditUserAvatarView = ({ avatarSource }) => (
  <CustomerContactWrapper>
    <Card className="box">
      <div className="contentUserAvatar">
        <RestAvatarInput
          style={{ width: 80, height: 80 }}
          source={avatarSource}
          header="customers.avatar"
        />
        <div className="vInfo">
          <RestInputItem className="txtName" source="fullName" />
          {/* <RestInputItem className="txtEmail" source="email" /> */}
          <SaveButton className="icEdit" />
        </div>
      </div>
    </Card>
  </CustomerContactWrapper>
);
EditUserAvatarView.propTypes = {
  avatarSource: PropTypes.string,
};

EditUserAvatarView.defaultProps = {
  avatarSource: 'avatar',
};
export default EditUserAvatarView;
