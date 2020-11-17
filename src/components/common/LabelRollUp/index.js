/* eslint-disable consistent-return */
import React from 'react';

const LabelRollUp = ({ type }) => {
  switch (type) {
    case 0:
      return (
        <div className="w-58 h-20 r-2 bg-primary text-white text-center">
          Đi học
        </div>
      );
    case 1:
      return (
        <div className="w-58 h-20 r-2 bg-warning text-white text-center">
          Nghĩ ốm
        </div>
      );
    case 2:
      return (
        <div className="w-58 h-20 r-2 bg-error text-white text-center">
          Nghĩ học
        </div>
      );
    default:
      break;
  }
};

export default LabelRollUp;
