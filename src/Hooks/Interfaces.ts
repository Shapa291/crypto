export interface IUseKeyPress {
  (key: string, action: Function): void;
}

export interface IUsePortalForModals {
  appendChild: Function;
  removeChild: Function;
}
