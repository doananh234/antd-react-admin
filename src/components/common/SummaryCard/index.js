import React from 'react';
import I18n from 'i18next';
import PropTypes from 'prop-types';
import { SUMMARY_CARD_TYPES } from 'configs/localData';
import Text from '../Text';
import { SummaryCardWrapper } from './styles';

const SummaryCard = ({
  color,
  value,
  title,
  icon: CardIcon,
  percentage,
  type,
}) => {
  const SummaryCardIcon = SUMMARY_CARD_TYPES.find(
    (cardType) => cardType.value === type,
  )?.icon;

  return (
    <SummaryCardWrapper>
      <div className="vInfo">
        <div className="row">
          <Text type="h5" className="title">
            {I18n.t(title)}
          </Text>
        </div>
        <div className="row value-div">
          <Text className="value">{value}</Text>
          <CardIcon theme="outlined" className="icon" style={{ color }} />
        </div>
        {percentage && (
          <div className="row">
            <span className="text-bottom">
              <span
                className="percent-value"
                style={{
                  color: SUMMARY_CARD_TYPES.find(
                    (cardType) => cardType.value === type,
                  )?.color,
                }}
              >
                <SummaryCardIcon
                  style={{
                    color: SUMMARY_CARD_TYPES.find(
                      (cardType) => cardType.value === type,
                    )?.color,
                  }}
                />
                {`${percentage}% `}
              </span>
              <span className="text">
                {I18n.t(
                  SUMMARY_CARD_TYPES.find((cardType) => cardType.value === type)
                    ?.text,
                )}
              </span>
            </span>
          </div>
        )}
      </div>
    </SummaryCardWrapper>
  );
};
SummaryCard.propTypes = {
  color: PropTypes.string,
  value: PropTypes.any,
  title: PropTypes.any,
  icon: PropTypes.any,
  type: PropTypes.string,
  percentage: PropTypes.number,
};

export default SummaryCard;
