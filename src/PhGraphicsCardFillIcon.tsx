import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGraphicsCardFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNDhIMTZhOCw4LDAsMCwwLTgsOFYyMDhhOCw4LDAsMCwwLDE2LDBWMTkySDQwdjE2YTgsOCwwLDAsMCwxNiwwVjE5Mkg3MnYxNmE4LDgsMCwwLDAsMTYsMFYxOTJoMTZ2MTZhOCw4LDAsMCwwLDE2LDBWMTkySDIzMmExNiwxNiwwLDAsMCwxNi0xNlY2NEExNiwxNiwwLDAsMCwyMzIsNDhabS0yMCw3MmEzNS44MSwzNS44MSwwLDAsMS01LjUzLDE5LjE2TDE1Ni44NCw4OS41M0EzNiwzNiwwLDAsMSwyMTIsMTIwWm0tOTYsMGEzNS44MSwzNS44MSwwLDAsMS01LjUzLDE5LjE2TDYwLjg0LDg5LjUzQTM2LDM2LDAsMCwxLDExNiwxMjBaTTgwLDE1NmEzNiwzNiwwLDAsMS0zMC40Ny01NS4xNmw0OS42Myw0OS42M0EzNS44MSwzNS44MSwwLDAsMSw4MCwxNTZabTYwLTM2YTM1LjgxLDM1LjgxLDAsMCwxLDUuNTMtMTkuMTZsNDkuNjMsNDkuNjNBMzYsMzYsMCwwLDEsMTQwLDEyMFoiLz48L3N2Zz4=)
 */
export function PhGraphicsCardFillIcon(props: PhGraphicsCardFillIconProps) {
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
      <path d="M232,48H16a8,8,0,0,0-8,8V208a8,8,0,0,0,16,0V192H40v16a8,8,0,0,0,16,0V192H72v16a8,8,0,0,0,16,0V192h16v16a8,8,0,0,0,16,0V192H232a16,16,0,0,0,16-16V64A16,16,0,0,0,232,48Zm-20,72a35.81,35.81,0,0,1-5.53,19.16L156.84,89.53A36,36,0,0,1,212,120Zm-96,0a35.81,35.81,0,0,1-5.53,19.16L60.84,89.53A36,36,0,0,1,116,120ZM80,156a36,36,0,0,1-30.47-55.16l49.63,49.63A35.81,35.81,0,0,1,80,156Zm60-36a35.81,35.81,0,0,1,5.53-19.16l49.63,49.63A36,36,0,0,1,140,120Z"/>
    </svg>
  );
}
