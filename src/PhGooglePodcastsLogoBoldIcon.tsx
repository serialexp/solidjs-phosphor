import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGooglePodcastsLogoBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDAsMTZWNDhhMTIsMTIsMCwwLDEtMjQsMFYxNmExMiwxMiwwLDAsMSwyNCwwWm0zNiwzNmExMiwxMiwwLDAsMC0xMiwxMlY5NmExMiwxMiwwLDAsMCwyNCwwVjY0QTEyLDEyLDAsMCwwLDE3Niw1MlpNMTI4LDE5NmExMiwxMiwwLDAsMC0xMiwxMnYzMmExMiwxMiwwLDAsMCwyNCwwVjIwOEExMiwxMiwwLDAsMCwxMjgsMTk2Wm0wLTEyMGExMiwxMiwwLDAsMC0xMiwxMnY4MGExMiwxMiwwLDAsMCwyNCwwVjg4QTEyLDEyLDAsMCwwLDEyOCw3NlpNODAsNTJBMTIsMTIsMCwwLDAsNjgsNjR2NTZhMTIsMTIsMCwwLDAsMjQsMFY2NEExMiwxMiwwLDAsMCw4MCw1MlptOTYsNzJhMTIsMTIsMCwwLDAtMTIsMTJ2NTZhMTIsMTIsMCwwLDAsMjQsMFYxMzZBMTIsMTIsMCwwLDAsMTc2LDEyNFpNMzIsMTAwYTEyLDEyLDAsMCwwLTEyLDEydjMyYTEyLDEyLDAsMCwwLDI0LDBWMTEyQTEyLDEyLDAsMCwwLDMyLDEwMFptNDgsNDhhMTIsMTIsMCwwLDAtMTIsMTJ2MzJhMTIsMTIsMCwwLDAsMjQsMFYxNjBBMTIsMTIsMCwwLDAsODAsMTQ4Wm0xNDQtNDhhMTIsMTIsMCwwLDAtMTIsMTJ2MzJhMTIsMTIsMCwwLDAsMjQsMFYxMTJBMTIsMTIsMCwwLDAsMjI0LDEwMFoiLz48L3N2Zz4=)
 */
export function PhGooglePodcastsLogoBoldIcon(props: PhGooglePodcastsLogoBoldIconProps) {
  const merged = mergeProps({ size: "1em", color: "currentColor" }, props);
  const [local, svgProps] = splitProps(merged, ["size", "color"]);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill={local.color}
      width={local.size}
      height={local.size}
      {...svgProps}
    >
      <path d="M140,16V48a12,12,0,0,1-24,0V16a12,12,0,0,1,24,0Zm36,36a12,12,0,0,0-12,12V96a12,12,0,0,0,24,0V64A12,12,0,0,0,176,52ZM128,196a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V208A12,12,0,0,0,128,196Zm0-120a12,12,0,0,0-12,12v80a12,12,0,0,0,24,0V88A12,12,0,0,0,128,76ZM80,52A12,12,0,0,0,68,64v56a12,12,0,0,0,24,0V64A12,12,0,0,0,80,52Zm96,72a12,12,0,0,0-12,12v56a12,12,0,0,0,24,0V136A12,12,0,0,0,176,124ZM32,100a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V112A12,12,0,0,0,32,100Zm48,48a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V160A12,12,0,0,0,80,148Zm144-48a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V112A12,12,0,0,0,224,100Z"/>
    </svg>
  );
}
