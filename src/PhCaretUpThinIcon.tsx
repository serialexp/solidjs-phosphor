import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretUpThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTAuODMsMTYyLjgzYTQsNCwwLDAsMS01LjY2LDBMMTI4LDg1LjY2LDUwLjgzLDE2Mi44M2E0LDQsMCwwLDEtNS42Ni01LjY2bDgwLTgwYTQsNCwwLDAsMSw1LjY2LDBsODAsODBBNCw0LDAsMCwxLDIxMC44MywxNjIuODNaIi8+PC9zdmc+)
 */
export function PhCaretUpThinIcon(props: PhCaretUpThinIconProps) {
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
      <path d="M210.83,162.83a4,4,0,0,1-5.66,0L128,85.66,50.83,162.83a4,4,0,0,1-5.66-5.66l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,210.83,162.83Z"/>
    </svg>
  );
}
