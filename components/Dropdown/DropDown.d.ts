import * as React from 'react';

import { ButtonUse, ButtonSize } from '../Button';

export interface DropdownProps {
  caption: React.ReactNode;
  disablePortal?: boolean;
  disabled?: boolean;
  error?: boolean;
  icon?: string;
  maxMenuHeight?: number;
  menuAlign?: 'left' | 'right';
  menuWidth?: number | string;
  size?: ButtonSize;
  use?: ButtonUse;
  warning?: boolean;
  width?: number;
  onClose?: () => void;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseOver?: React.MouseEventHandler<HTMLButtonElement>;
  onOpen?: () => void;
}

export interface DropdownState {}

export default class Dropdown extends React.Component<
  DropdownProps,
  DropdownState
> {}