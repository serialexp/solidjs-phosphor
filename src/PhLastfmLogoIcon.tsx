import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLastfmLogoIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsMTYwYTQwLDQwLDAsMCwxLTQwLDQwSDE5MC41N2E1Ni4yMiw1Ni4yMiwwLDAsMS01MC43NS0zMi4zMmwtMzAuMTQtNjQuNkE0MC4xNSw0MC4xNSwwLDAsMCw3My40Myw4MEg2NGE0MCw0MCwwLDAsMC00MCw0MHYyNGE0MCw0MCwwLDAsMCw0MCw0MGg4YTMyLDMyLDAsMCwwLDI5LjM0LTE5LjJBOCw4LDAsMSwxLDExNiwxNzEuMiw0OCw0OCwwLDAsMSw3MiwyMDBINjRBNTYuMDYsNTYuMDYsMCwwLDEsOCwxNDRWMTIwQTU2LjA2LDU2LjA2LDAsMCwxLDY0LDY0aDkuNDNhNTYuMjIsNTYuMjIsMCwwLDEsNTAuNzUsMzIuMzJsMzAuMTQsNjQuNkE0MC4xNSw0MC4xNSwwLDAsMCwxOTAuNTcsMTg0SDIwOGEyNCwyNCwwLDAsMCwwLTQ4SDE4OGEzNiwzNiwwLDAsMSwwLTcyaDIwYTMyLDMyLDAsMCwxLDMyLDMyLDgsOCwwLDAsMS0xNiwwLDE2LDE2LDAsMCwwLTE2LTE2SDE4OGEyMCwyMCwwLDAsMCwwLDQwaDIwQTQwLDQwLDAsMCwxLDI0OCwxNjBaIi8+PC9zdmc+)
 */
export function PhLastfmLogoIcon(props: PhLastfmLogoIconProps) {
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
      <path d="M248,160a40,40,0,0,1-40,40H190.57a56.22,56.22,0,0,1-50.75-32.32l-30.14-64.6A40.15,40.15,0,0,0,73.43,80H64a40,40,0,0,0-40,40v24a40,40,0,0,0,40,40h8a32,32,0,0,0,29.34-19.2A8,8,0,1,1,116,171.2,48,48,0,0,1,72,200H64A56.06,56.06,0,0,1,8,144V120A56.06,56.06,0,0,1,64,64h9.43a56.22,56.22,0,0,1,50.75,32.32l30.14,64.6A40.15,40.15,0,0,0,190.57,184H208a24,24,0,0,0,0-48H188a36,36,0,0,1,0-72h20a32,32,0,0,1,32,32,8,8,0,0,1-16,0,16,16,0,0,0-16-16H188a20,20,0,0,0,0,40h20A40,40,0,0,1,248,160Z"/>
    </svg>
  );
}
