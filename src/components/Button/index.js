import React from "react";

import * as style from "./styles";

function Button({ content, primary, maxWidth, big, round, ...rest }) {
  return (
    <style.Button
      to="/contact"
      primary={primary}
      big={big}
      round={round}
      maxWidth={maxWidth}
      {...rest}
    >
      {content}
    </style.Button>
  );
}

export default Button;
