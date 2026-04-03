import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhForkKnifeLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03NCw4OFY0MGE2LDYsMCwwLDEsMTIsMFY4OGE2LDYsMCwwLDEtMTIsMFpNMjE0LDQwVjIyNGE2LDYsMCwwLDEtMTIsMFYxNzRIMTUyYTYsNiwwLDAsMS02LTZjMC00LjQxLjY4LTEwOC4yNSw1OS42NC0xMzMuNTFBNiw2LDAsMCwxLDIxNCw0MFpNMjAyLDUwYy0zNi43OSwyNC4yOS00Mi44Miw5MS40OC00My44MSwxMTJIMjAyWk0xMTcuOTIsMzlhNiw2LDAsMSwwLTExLjg0LDJMMTE0LDg4LjQ4YTM0LDM0LDAsMCwxLTY4LDBMNTMuOTIsNDFhNiw2LDAsMCwwLTExLjg0LTJsLTgsNDhBNi42MSw2LjYxLDAsMCwwLDM0LDg4YTQ2LjA2LDQ2LjA2LDAsMCwwLDQwLDQ1LjZWMjI0YTYsNiwwLDAsMCwxMiwwVjEzMy42QTQ2LjA2LDQ2LjA2LDAsMCwwLDEyNiw4OGE2LjYxLDYuNjEsMCwwLDAtLjA4LTFaIi8+PC9zdmc+)
 */
export function PhForkKnifeLightIcon(props: PhForkKnifeLightIconProps) {
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
      <path d="M74,88V40a6,6,0,0,1,12,0V88a6,6,0,0,1-12,0ZM214,40V224a6,6,0,0,1-12,0V174H152a6,6,0,0,1-6-6c0-4.41.68-108.25,59.64-133.51A6,6,0,0,1,214,40ZM202,50c-36.79,24.29-42.82,91.48-43.81,112H202ZM117.92,39a6,6,0,1,0-11.84,2L114,88.48a34,34,0,0,1-68,0L53.92,41a6,6,0,0,0-11.84-2l-8,48A6.61,6.61,0,0,0,34,88a46.06,46.06,0,0,0,40,45.6V224a6,6,0,0,0,12,0V133.6A46.06,46.06,0,0,0,126,88a6.61,6.61,0,0,0-.08-1Z"/>
    </svg>
  );
}
