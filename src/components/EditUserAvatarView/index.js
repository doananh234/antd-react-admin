import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import i18next from 'i18next';
import { EditUserAvatarViewWrapper } from './styles';
import RestAvatarInput from '../RestInput/RestAvatarInput';
import RestInputItem from '../RestInput/RestInputItem';
import RestSelect from '../RestInput/RestSelect';
import SaveButton from '../RestActions/SaveButton';

const EditUserAvatarView = ({ avatarSource, titleSource, subTitleConfig }) => (
  <EditUserAvatarViewWrapper>
    <Card className="box">
      <div className="contentUserAvatar">
        <RestAvatarInput
          style={{ width: 60, height: 60 }}
          source={avatarSource}
          header="clients.avatar"
        />
        <div className="vInfo">
          <RestInputItem className="txtName" source={titleSource} />
          <RestSelect
            disabled
            resourceData={subTitleConfig.resourceData}
            formatText={(text, data) => (
              <span style={{ color: data.color }}>{i18next.t(text)}</span>
            )}
            valueProp={subTitleConfig.valueProp}
            titleProp={subTitleConfig.titleProp}
            className="lbStatus"
            ruleType={subTitleConfig.ruleType}
            source={subTitleConfig.source}
          />
          <SaveButton className="icEdit" />
        </div>
      </div>
    </Card>
  </EditUserAvatarViewWrapper>
);
EditUserAvatarView.propTypes = {
  avatarSource: PropTypes.string,
  titleSource: PropTypes.string,
  subTitleConfig: PropTypes.object,
};

EditUserAvatarView.defaultProps = {
  avatarSource: 'avatar',
  titleSource: 'name',
  subTitleConfig: {
    ruleType: 'boolean',
    source: 'isActive',
    valueProp: 'value',
    titleProp: 'text',
    resourceData: [],
  },
};
export default EditUserAvatarView;
