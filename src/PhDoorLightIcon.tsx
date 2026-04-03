import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDoorLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjE4SDIwNlY0MGExNCwxNCwwLDAsMC0xNC0xNEg2NEExNCwxNCwwLDAsMCw1MCw0MFYyMThIMjRhNiw2LDAsMCwwLDAsMTJIMjMyYTYsNiwwLDAsMCwwLTEyWk02Miw0MGEyLDIsMCwwLDEsMi0ySDE5MmEyLDIsMCwwLDEsMiwyVjIxOEg2MlptMTA0LDkyYTEwLDEwLDAsMSwxLTEwLTEwQTEwLDEwLDAsMCwxLDE2NiwxMzJaIi8+PC9zdmc+)
 */
export function PhDoorLightIcon(props: PhDoorLightIconProps) {
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
      <path d="M232,218H206V40a14,14,0,0,0-14-14H64A14,14,0,0,0,50,40V218H24a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12ZM62,40a2,2,0,0,1,2-2H192a2,2,0,0,1,2,2V218H62Zm104,92a10,10,0,1,1-10-10A10,10,0,0,1,166,132Z"/>
    </svg>
  );
}
