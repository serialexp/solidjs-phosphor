import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhClipboardTextIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsMTUyYTgsOCwwLDAsMS04LDhIOTZhOCw4LDAsMCwxLDAtMTZoNjRBOCw4LDAsMCwxLDE2OCwxNTJabS04LTQwSDk2YTgsOCwwLDAsMCwwLDE2aDY0YTgsOCwwLDAsMCwwLTE2Wm01Ni02NFYyMTZhMTYsMTYsMCwwLDEtMTYsMTZINTZhMTYsMTYsMCwwLDEtMTYtMTZWNDhBMTYsMTYsMCwwLDEsNTYsMzJIOTIuMjZhNDcuOTIsNDcuOTIsMCwwLDEsNzEuNDgsMEgyMDBBMTYsMTYsMCwwLDEsMjE2LDQ4Wk05Niw2NGg2NGEzMiwzMiwwLDAsMC02NCwwWk0yMDAsNDhIMTczLjI1QTQ3LjkzLDQ3LjkzLDAsMCwxLDE3Niw2NHY4YTgsOCwwLDAsMS04LDhIODhhOCw4LDAsMCwxLTgtOFY2NGE0Ny45Myw0Ny45MywwLDAsMSwyLjc1LTE2SDU2VjIxNkgyMDBaIi8+PC9zdmc+)
 */
export function PhClipboardTextIcon(props: PhClipboardTextIconProps) {
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
      <path d="M168,152a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,152Zm-8-40H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm56-64V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V48A16,16,0,0,1,56,32H92.26a47.92,47.92,0,0,1,71.48,0H200A16,16,0,0,1,216,48ZM96,64h64a32,32,0,0,0-64,0ZM200,48H173.25A47.93,47.93,0,0,1,176,64v8a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V64a47.93,47.93,0,0,1,2.75-16H56V216H200Z"/>
    </svg>
  );
}
