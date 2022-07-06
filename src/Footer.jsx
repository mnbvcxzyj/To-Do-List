import React from "react";
import { Footerdiv, FooterBig, FooterSmall } from "./styledComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <Footerdiv>
      <FontAwesomeIcon icon={faReact} />
      <FooterBig>To-Do List</FooterBig>
      <FooterSmall>2022. by Yeji</FooterSmall>
    </Footerdiv>
  );
}

export default React.memo(Footer);
