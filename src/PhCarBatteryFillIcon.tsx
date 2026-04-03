import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCarBatteryFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNzJIMjA4VjU2YTE2LDE2LDAsMCwwLTE2LTE2SDE2MGExNiwxNiwwLDAsMC0xNiwxNlY3MkgxMTJWNTZBMTYsMTYsMCwwLDAsOTYsNDBINjRBMTYsMTYsMCwwLDAsNDgsNTZWNzJIMzJBMTYsMTYsMCwwLDAsMTYsODh2OTZhMTYsMTYsMCwwLDAsMTYsMTZIMjI0YTE2LDE2LDAsMCwwLDE2LTE2Vjg4QTE2LDE2LDAsMCwwLDIyNCw3MlpNNjQsNTZIOTZWNzJINjRabTQwLDg4SDcyYTgsOCwwLDAsMSwwLTE2aDMyYTgsOCwwLDAsMSwwLDE2Wm04MCwwaC04djhhOCw4LDAsMCwxLTE2LDB2LThoLThhOCw4LDAsMCwxLDAtMTZoOHYtOGE4LDgsMCwwLDEsMTYsMHY4aDhhOCw4LDAsMCwxLDAsMTZabTgtNzJIMTYwVjU2aDMyWiIvPjwvc3ZnPg==)
 */
export function PhCarBatteryFillIcon(props: PhCarBatteryFillIconProps) {
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
      <path d="M224,72H208V56a16,16,0,0,0-16-16H160a16,16,0,0,0-16,16V72H112V56A16,16,0,0,0,96,40H64A16,16,0,0,0,48,56V72H32A16,16,0,0,0,16,88v96a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V88A16,16,0,0,0,224,72ZM64,56H96V72H64Zm40,88H72a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16Zm80,0h-8v8a8,8,0,0,1-16,0v-8h-8a8,8,0,0,1,0-16h8v-8a8,8,0,0,1,16,0v8h8a8,8,0,0,1,0,16Zm8-72H160V56h32Z"/>
    </svg>
  );
}
