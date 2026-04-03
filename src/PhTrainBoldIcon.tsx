import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTrainBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMjBINzJBMzYsMzYsMCwwLDAsMzYsNTZWMTg0YTM2LDM2LDAsMCwwLDM2LDM2aDBsLTkuNiwxMi44YTEyLDEyLDAsMSwwLDE5LjIsMTQuNEwxMDIsMjIwaDUybDIwLjQsMjcuMmExMiwxMiwwLDAsMCwxOS4yLTE0LjRMMTg0LDIyMGgwYTM2LDM2LDAsMCwwLDM2LTM2VjU2QTM2LDM2LDAsMCwwLDE4NCwyMFpNNjAsMTE2Vjg0aDU2djMyWm04MC0zMmg1NnYzMkgxNDBaTTcyLDQ0SDE4NGExMiwxMiwwLDAsMSwxMiwxMnY0SDYwVjU2QTEyLDEyLDAsMCwxLDcyLDQ0Wk0xODQsMTk2SDcyYTEyLDEyLDAsMCwxLTEyLTEyVjE0MEgxOTZ2NDRBMTIsMTIsMCwwLDEsMTg0LDE5NlptLTgwLTI4YTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDEwNCwxNjhabTgwLDBhMTYsMTYsMCwxLDEtMTYtMTZBMTYsMTYsMCwwLDEsMTg0LDE2OFoiLz48L3N2Zz4=)
 */
export function PhTrainBoldIcon(props: PhTrainBoldIconProps) {
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
      <path d="M184,20H72A36,36,0,0,0,36,56V184a36,36,0,0,0,36,36h0l-9.6,12.8a12,12,0,1,0,19.2,14.4L102,220h52l20.4,27.2a12,12,0,0,0,19.2-14.4L184,220h0a36,36,0,0,0,36-36V56A36,36,0,0,0,184,20ZM60,116V84h56v32Zm80-32h56v32H140ZM72,44H184a12,12,0,0,1,12,12v4H60V56A12,12,0,0,1,72,44ZM184,196H72a12,12,0,0,1-12-12V140H196v44A12,12,0,0,1,184,196Zm-80-28a16,16,0,1,1-16-16A16,16,0,0,1,104,168Zm80,0a16,16,0,1,1-16-16A16,16,0,0,1,184,168Z"/>
    </svg>
  );
}
