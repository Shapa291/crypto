import { useEffect } from "react";
import { IUseKeyPress } from "./Interfaces";

const useKeyPress: IUseKeyPress = (key, action) => {
  useEffect(() => {
    const onKeyUp = (e: { key: string }) => {
      if (e.key === key) action();
    };

    window.addEventListener("keyup", onKeyUp);
    return () => window.removeEventListener("keyup", onKeyUp);
  });
};

export default useKeyPress;
