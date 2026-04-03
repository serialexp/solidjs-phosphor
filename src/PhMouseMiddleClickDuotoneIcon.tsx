import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMouseMiddleClickDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsODh2NDhhOCw4LDAsMCwxLTgsOEgxMjBhOCw4LDAsMCwxLTgtOFY4OGE4LDgsMCwwLDEsOC04aDE2QTgsOCwwLDAsMSwxNDQsODhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTQ0LDE2SDExMkE2NC4wNyw2NC4wNywwLDAsMCw0OCw4MHY5NmE2NC4wNyw2NC4wNywwLDAsMCw2NCw2NGgzMmE2NC4wNyw2NC4wNywwLDAsMCw2NC02NFY4MEE2NC4wNyw2NC4wNywwLDAsMCwxNDQsMTZabTQ4LDY0djI0SDE1MlY4OGExNiwxNiwwLDAsMC0xNi0xNlYzMmg4QTQ4LjA1LDQ4LjA1LDAsMCwxLDE5Miw4MFptLTU2LDU2SDEyMFY4OGgxNnYyMy45YS41MS41MSwwLDAsMCwwLC4yWk0xMTIsMzJoOFY3MmExNiwxNiwwLDAsMC0xNiwxNnYxNkg2NFY4MEE0OC4wNSw0OC4wNSwwLDAsMSwxMTIsMzJabTMyLDE5MkgxMTJhNDguMDUsNDguMDUsMCwwLDEtNDgtNDhWMTIwaDQwdjE2YTE2LDE2LDAsMCwwLDE2LDE2aDE2YTE2LDE2LDAsMCwwLDE2LTE2VjEyMGg0MHY1NkE0OC4wNSw0OC4wNSwwLDAsMSwxNDQsMjI0WiIvPjwvc3ZnPg==)
 */
export function PhMouseMiddleClickDuotoneIcon(props: PhMouseMiddleClickDuotoneIconProps) {
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
      <path d="M144,88v48a8,8,0,0,1-8,8H120a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h16A8,8,0,0,1,144,88Z" opacity="0.2"/><path d="M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,64v24H152V88a16,16,0,0,0-16-16V32h8A48.05,48.05,0,0,1,192,80Zm-56,56H120V88h16v23.9a.51.51,0,0,0,0,.2ZM112,32h8V72a16,16,0,0,0-16,16v16H64V80A48.05,48.05,0,0,1,112,32Zm32,192H112a48.05,48.05,0,0,1-48-48V120h40v16a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V120h40v56A48.05,48.05,0,0,1,144,224Z"/>
    </svg>
  );
}
