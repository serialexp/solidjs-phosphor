import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMicrophoneFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04MCwxMjhWNjRhNDgsNDgsMCwwLDEsOTYsMHY2NGE0OCw0OCwwLDAsMS05NiwwWm0xMjgsMGE4LDgsMCwwLDAtMTYsMCw2NCw2NCwwLDAsMS0xMjgsMCw4LDgsMCwwLDAtMTYsMCw4MC4xMSw4MC4xMSwwLDAsMCw3Miw3OS42VjI0MGE4LDgsMCwwLDAsMTYsMFYyMDcuNkE4MC4xMSw4MC4xMSwwLDAsMCwyMDgsMTI4WiIvPjwvc3ZnPg==)
 */
export function PhMicrophoneFillIcon(props: PhMicrophoneFillIconProps) {
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
      <path d="M80,128V64a48,48,0,0,1,96,0v64a48,48,0,0,1-96,0Zm128,0a8,8,0,0,0-16,0,64,64,0,0,1-128,0,8,8,0,0,0-16,0,80.11,80.11,0,0,0,72,79.6V240a8,8,0,0,0,16,0V207.6A80.11,80.11,0,0,0,208,128Z"/>
    </svg>
  );
}
