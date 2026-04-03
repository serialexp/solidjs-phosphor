import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPipeFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTA0SDIwOFY1NmgyNGE4LDgsMCwwLDAsMC0xNkgyMDUuODNBMTYsMTYsMCwwLDAsMTkyLDMySDE3NmExNiwxNiwwLDAsMC0xMy44Myw4SDE0NEExMDQuMTEsMTA0LjExLDAsMCwwLDQwLDE0NHYxOC4xNkExNiwxNiwwLDAsMCwzMiwxNzZ2MTZhMTYsMTYsMCwwLDAsOCwxMy44NFYyMzJhOCw4LDAsMCwwLDE2LDBWMjA4aDQ4djI0YTgsOCwwLDAsMCwxNiwwVjIwNS44NEExNiwxNiwwLDAsMCwxMjgsMTkyVjE3NmExNiwxNiwwLDAsMC04LTEzLjg0VjE0NGEyNCwyNCwwLDAsMSwyNC0yNGgxOC4xN0ExNiwxNiwwLDAsMCwxNzYsMTI4aDE2YTE2LDE2LDAsMCwwLDEzLjgzLThIMjMyYTgsOCwwLDAsMCwwLTE2Wk0xMTIsMTkySDQ4VjE3Nmg2NFptNjQtODBWNDhoMTZ2NjMuOGMwLC4wNywwLC4xMywwLC4yWiIvPjwvc3ZnPg==)
 */
export function PhPipeFillIcon(props: PhPipeFillIconProps) {
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
      <path d="M232,104H208V56h24a8,8,0,0,0,0-16H205.83A16,16,0,0,0,192,32H176a16,16,0,0,0-13.83,8H144A104.11,104.11,0,0,0,40,144v18.16A16,16,0,0,0,32,176v16a16,16,0,0,0,8,13.84V232a8,8,0,0,0,16,0V208h48v24a8,8,0,0,0,16,0V205.84A16,16,0,0,0,128,192V176a16,16,0,0,0-8-13.84V144a24,24,0,0,1,24-24h18.17A16,16,0,0,0,176,128h16a16,16,0,0,0,13.83-8H232a8,8,0,0,0,0-16ZM112,192H48V176h64Zm64-80V48h16v63.8c0,.07,0,.13,0,.2Z"/>
    </svg>
  );
}
