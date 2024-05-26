export interface ISvgProps extends ISvgRequiredProps{
  paths?: IPath[],
  gs?: IG[],
  defs?: IDefs[],
}

export interface ISvgRequiredProps {
  width: string,
  height: string,
  viewBox: string,
  fill: string,
}

interface IPath {
  fillRule?: string,
  clipRule?: string,
  d: string,
  fill: string,
}

interface IG {
  clipPath: string,
  paths: IPath[],
}

interface IDefs {
  clipPaths: IClipPath[]
}

interface IClipPath {
  id: string,
  rects?: IRect[]
}

interface IRect {
  width: string,
  height: string,
  fill: string
}
