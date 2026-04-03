import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextItalicThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYsNTZhNCw0LDAsMCwxLTQsNEgxNTQuODhMMTA5LjU1LDE5NkgxNDRhNCw0LDAsMCwxLDAsOEg2NGE0LDQsMCwwLDEsMC04aDM3LjEyTDE0Ni40NSw2MEgxMTJhNCw0LDAsMCwxLDAtOGg4MEE0LDQsMCwwLDEsMTk2LDU2WiIvPjwvc3ZnPg==)
 */
export function PhTextItalicThinIcon(props: PhTextItalicThinIconProps) {
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
      <path d="M196,56a4,4,0,0,1-4,4H154.88L109.55,196H144a4,4,0,0,1,0,8H64a4,4,0,0,1,0-8h37.12L146.45,60H112a4,4,0,0,1,0-8h80A4,4,0,0,1,196,56Z"/>
    </svg>
  );
}
