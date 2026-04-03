import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowDownRightFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsODhWMTkyYTgsOCwwLDAsMS04LDhIODhhOCw4LDAsMCwxLTUuNjYtMTMuNjZMMTI4LjY5LDE0MCw1OC4zNCw2OS42NkE4LDgsMCwwLDEsNjkuNjYsNTguMzRMMTQwLDEyOC42OWw0Ni4zNC00Ni4zNUE4LDgsMCwwLDEsMjAwLDg4WiIvPjwvc3ZnPg==)
 */
export function PhArrowDownRightFillIcon(props: PhArrowDownRightFillIconProps) {
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
      <path d="M200,88V192a8,8,0,0,1-8,8H88a8,8,0,0,1-5.66-13.66L128.69,140,58.34,69.66A8,8,0,0,1,69.66,58.34L140,128.69l46.34-46.35A8,8,0,0,1,200,88Z"/>
    </svg>
  );
}
