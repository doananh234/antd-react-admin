import React from "react";
import _ from "lodash";
import { ButtonWrapper } from "./styles";
import { RestInputContext } from "../../RestInput/RestInputContext";

const SaveButton = props => (
  <RestInputContext.Consumer>
    {({ handleSubmit }) => (
      <ButtonWrapper
        {...props}
        icon="ic-save"
        onClick={results => handleSubmit(_.omit(results, "email"))}
      />
    )}
  </RestInputContext.Consumer>
);

SaveButton.propTypes = {};

SaveButton.defaultProps = {};

export default SaveButton;
