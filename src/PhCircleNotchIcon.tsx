import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCircleNotchIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTI4YTEwNCwxMDQsMCwwLDEtMjA4LDBjMC00MSwyMy44MS03OC4zNiw2MC42Ni05NS4yN2E4LDgsMCwwLDEsNi42OCwxNC41NEM2MC4xNSw2MS41OSw0MCw5My4yNyw0MCwxMjhhODgsODgsMCwwLDAsMTc2LDBjMC0zNC43My0yMC4xNS02Ni40MS01MS4zNC04MC43M2E4LDgsMCwwLDEsNi42OC0xNC41NEMyMDguMTksNDkuNjQsMjMyLDg3LDIzMiwxMjhaIi8+PC9zdmc+)
 */
export function PhCircleNotchIcon(props: PhCircleNotchIconProps) {
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
      <path d="M232,128a104,104,0,0,1-208,0c0-41,23.81-78.36,60.66-95.27a8,8,0,0,1,6.68,14.54C60.15,61.59,40,93.27,40,128a88,88,0,0,0,176,0c0-34.73-20.15-66.41-51.34-80.73a8,8,0,0,1,6.68-14.54C208.19,49.64,232,87,232,128Z"/>
    </svg>
  );
}
