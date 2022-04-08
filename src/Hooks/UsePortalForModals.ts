import { useEffect, useMemo } from "react";
import { IUsePortalForModals } from "./Interfaces";

const usePortalForModals = (modalElement: IUsePortalForModals) => {
  const element = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    modalElement.appendChild(element);

    return () => {
      modalElement.removeChild(element);
    };
  }, [element, modalElement]);

  return element;
};

export default usePortalForModals;
