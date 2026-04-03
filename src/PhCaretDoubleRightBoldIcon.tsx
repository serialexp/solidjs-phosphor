import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretDoubleRightBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQuNDksMTM2LjQ5bC04MCw4MGExMiwxMiwwLDAsMS0xNy0xN0wxMTksMTI4LDQ3LjUxLDU2LjQ5YTEyLDEyLDAsMCwxLDE3LTE3bDgwLDgwQTEyLDEyLDAsMCwxLDE0NC40OSwxMzYuNDlabTgwLTE3LTgwLTgwYTEyLDEyLDAsMSwwLTE3LDE3TDE5OSwxMjhsLTcxLjUyLDcxLjUxYTEyLDEyLDAsMCwwLDE3LDE3bDgwLTgwQTEyLDEyLDAsMCwwLDIyNC40OSwxMTkuNTFaIi8+PC9zdmc+)
 */
export function PhCaretDoubleRightBoldIcon(props: PhCaretDoubleRightBoldIconProps) {
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
      <path d="M144.49,136.49l-80,80a12,12,0,0,1-17-17L119,128,47.51,56.49a12,12,0,0,1,17-17l80,80A12,12,0,0,1,144.49,136.49Zm80-17-80-80a12,12,0,1,0-17,17L199,128l-71.52,71.51a12,12,0,0,0,17,17l80-80A12,12,0,0,0,224.49,119.51Z"/>
    </svg>
  );
}
