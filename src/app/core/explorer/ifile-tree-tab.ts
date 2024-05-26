import { IIconProps } from "../../icons";

export interface IFileTreeTab {
  folders?: IFileFolderTab[];
  files: IFileTab[];
}

export interface IFileTab extends IBaseTab {
  iconProps: IIconProps,
  page: string,
}

export interface IFileFolderTab extends IBaseTab {
  folders?: IFileFolderTab[];
  files: IFileTab[];
}

export interface IBaseTab {
  id: number,
  isSelected: boolean;
  isOpened: boolean;
  name: string,
}
