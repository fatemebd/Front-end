import { useState } from "react";

const useToggle = (init = false) => {
  const [show, setState] = useState(init);

  return [show, () => setState(!show)];
};

export default useToggle;
