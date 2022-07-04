import React from "react";
import { SlogunSection, SlogunBig, SlogunSmall } from "./styledComponent";
function Slogun() {
  return (
    <SlogunSection>
      <>
        <SlogunBig>To-Do List</SlogunBig>
        <SlogunSmall>오늘 할 일을 적어보세요!</SlogunSmall>
      </>
    </SlogunSection>
  );
}

export default React.memo(Slogun);
