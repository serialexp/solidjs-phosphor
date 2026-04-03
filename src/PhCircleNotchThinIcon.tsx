import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCircleNotchThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsMTI4YTEwMCwxMDAsMCwwLDEtMjAwLDBjMC0zOS40LDIyLjktNzUuMzcsNTguMzMtOTEuNjNhNCw0LDAsMSwxLDMuMzQsNy4yN0M1Ny4wNyw1OC42LDM2LDkxLjcxLDM2LDEyOGE5Miw5MiwwLDAsMCwxODQsMGMwLTM2LjI5LTIxLjA3LTY5LjQtNTMuNjctODQuMzZhNCw0LDAsMSwxLDMuMzQtNy4yN0MyMDUuMSw1Mi42MywyMjgsODguNiwyMjgsMTI4WiIvPjwvc3ZnPg==)
 */
export function PhCircleNotchThinIcon(props: PhCircleNotchThinIconProps) {
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
      <path d="M228,128a100,100,0,0,1-200,0c0-39.4,22.9-75.37,58.33-91.63a4,4,0,1,1,3.34,7.27C57.07,58.6,36,91.71,36,128a92,92,0,0,0,184,0c0-36.29-21.07-69.4-53.67-84.36a4,4,0,1,1,3.34-7.27C205.1,52.63,228,88.6,228,128Z"/>
    </svg>
  );
}
