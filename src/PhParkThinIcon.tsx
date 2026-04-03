import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhParkThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTk2SDE5NlYxNjRoMjhhNCw0LDAsMCwwLDMuODgtNWwtMzItMTI4YTQsNCwwLDAsMC03Ljc2LDBsLTMyLDEyOGE0LDQsMCwwLDAsMy44OCw1aDI4djMySDExNlYxNzJoMTJhNCw0LDAsMCwwLDAtOEgxMTZWMTQwaDEyYTQsNCwwLDAsMCwwLThINDBhNCw0LDAsMCwwLDAsOEg1MnYyNEg0MGE0LDQsMCwwLDAsMCw4SDUydjI0SDI0YTQsNCwwLDAsMCwwLDhIMjMyYTQsNCwwLDAsMCwwLThaTTE5Miw0OC40OSwyMTguODgsMTU2SDE2NS4xMlpNNjAsMTQwaDQ4djI0SDYwWm0wLDMyaDQ4djI0SDYwWm01Ni04MEEyNCwyNCwwLDEsMCw5Miw2OCwyNCwyNCwwLDAsMCwxMTYsOTJabTAtNDBhMTYsMTYsMCwxLDEtMTYsMTZBMTYsMTYsMCwwLDEsMTE2LDUyWiIvPjwvc3ZnPg==)
 */
export function PhParkThinIcon(props: PhParkThinIconProps) {
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
      <path d="M232,196H196V164h28a4,4,0,0,0,3.88-5l-32-128a4,4,0,0,0-7.76,0l-32,128a4,4,0,0,0,3.88,5h28v32H116V172h12a4,4,0,0,0,0-8H116V140h12a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8H52v24H40a4,4,0,0,0,0,8H52v24H24a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8ZM192,48.49,218.88,156H165.12ZM60,140h48v24H60Zm0,32h48v24H60Zm56-80A24,24,0,1,0,92,68,24,24,0,0,0,116,92Zm0-40a16,16,0,1,1-16,16A16,16,0,0,1,116,52Z"/>
    </svg>
  );
}
