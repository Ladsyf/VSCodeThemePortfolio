import { getFilesIcon, getUserIcon, getSettingsIcon, getChevronDownIcon, getChevronRightIcon, getHtmlIcon, getCloseIcon, getUndoIcon, getRedoIcon, getPhoneIcon, getLinkedInIcon, getGithubIcon } from "./iconsSource";
import { ISvgProps, ISvgRequiredProps } from "./shared/isvg-props"

export interface IIconProps
{
  iconName?: string,
  width: number,
  height?: number,
  color?: string
}

interface IRectRequiredProps
{
  height: string,
  width: string,
}

export interface IIconSwitchProps
{
  svgPartialProps: ISvgRequiredProps,
  clipPathId: string,
  color: string | undefined,
  rectPartialProps: IRectRequiredProps,
}

export function icon(props: IIconProps): ISvgProps
{
  let { iconName, width, height, color } = props;

  if (!height) height = width

  const svgPartialProps: ISvgRequiredProps = {
    width: `${width}`,
    height: `${height}`,
    viewBox: `0 0 ${height} ${width}`,
    fill: "none"
  }

  const rectProps = {
    width: `${width}`,
    height: `${height}`,
  }

  const clipPathId1 = "clipPath_id1"

  const iconSwitchProps: IIconSwitchProps = {
    svgPartialProps: svgPartialProps,
    clipPathId: clipPathId1,
    color,
    rectPartialProps: rectProps,
  }

  switch (iconName)
  {
    case "files":
      return getFilesIcon(iconSwitchProps);
    case "user":
      return getUserIcon(iconSwitchProps);
    case "settings":
      return getSettingsIcon(iconSwitchProps);
    case "chevron_down":
      return getChevronDownIcon(iconSwitchProps);
    case "chevron_right":
      return getChevronRightIcon(iconSwitchProps);
    case "html":
      return getHtmlIcon(iconSwitchProps);
    case "close":
      return getCloseIcon(iconSwitchProps);
    case "undo":
      return getUndoIcon(iconSwitchProps);
    case "redo":
      return getRedoIcon(iconSwitchProps);
    case "phone":
      return getPhoneIcon(iconSwitchProps);
    case "linkedin":
      return getLinkedInIcon(iconSwitchProps);
    case "github":
      return getGithubIcon(iconSwitchProps);
    default:
      return svgPartialProps;
  }
}
