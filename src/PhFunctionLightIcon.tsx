import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFunctionLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDYsNDBhNiw2LDAsMCwxLTYsNkgxNzAuNzFhMjYsMjYsMCwwLDAtMjUuNTgsMjEuMzVMMTM1LjE5LDEyMkgxODRhNiw2LDAsMCwxLDAsMTJIMTMzbC0xMC4zMyw1Ni44QTM4LDM4LDAsMCwxLDg1LjI5LDIyMkg1NmE2LDYsMCwwLDEsMC0xMkg4NS4yOWEyNiwyNiwwLDAsMCwyNS41OC0yMS4zNUwxMjAuODEsMTM0SDcyYTYsNiwwLDAsMSwwLTEyaDUxbDEwLjMzLTU2LjhBMzgsMzgsMCwwLDEsMTcwLjcxLDM0SDIwMEE2LDYsMCwwLDEsMjA2LDQwWiIvPjwvc3ZnPg==)
 */
export function PhFunctionLightIcon(props: PhFunctionLightIconProps) {
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
      <path d="M206,40a6,6,0,0,1-6,6H170.71a26,26,0,0,0-25.58,21.35L135.19,122H184a6,6,0,0,1,0,12H133l-10.33,56.8A38,38,0,0,1,85.29,222H56a6,6,0,0,1,0-12H85.29a26,26,0,0,0,25.58-21.35L120.81,134H72a6,6,0,0,1,0-12h51l10.33-56.8A38,38,0,0,1,170.71,34H200A6,6,0,0,1,206,40Z"/>
    </svg>
  );
}
