import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhQuotesLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDAsNThINDBBMTQsMTQsMCwwLDAsMjYsNzJ2NjRhMTQsMTQsMCwwLDAsMTQsMTRoNjJ2MTBhMzQsMzQsMCwwLDEtMzQsMzQsNiw2LDAsMCwwLDAsMTIsNDYuMDYsNDYuMDYsMCwwLDAsNDYtNDZWNzJBMTQsMTQsMCwwLDAsMTAwLDU4Wm0yLDgwSDQwYTIsMiwwLDAsMS0yLTJWNzJhMiwyLDAsMCwxLDItMmg2MGEyLDIsMCwwLDEsMiwyWk0yMTYsNThIMTU2YTE0LDE0LDAsMCwwLTE0LDE0djY0YTE0LDE0LDAsMCwwLDE0LDE0aDYydjEwYTM0LDM0LDAsMCwxLTM0LDM0LDYsNiwwLDAsMCwwLDEyLDQ2LjA2LDQ2LjA2LDAsMCwwLDQ2LTQ2VjcyQTE0LDE0LDAsMCwwLDIxNiw1OFptMiw4MEgxNTZhMiwyLDAsMCwxLTItMlY3MmEyLDIsMCwwLDEsMi0yaDYwYTIsMiwwLDAsMSwyLDJaIi8+PC9zdmc+)
 */
export function PhQuotesLightIcon(props: PhQuotesLightIconProps) {
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
      <path d="M100,58H40A14,14,0,0,0,26,72v64a14,14,0,0,0,14,14h62v10a34,34,0,0,1-34,34,6,6,0,0,0,0,12,46.06,46.06,0,0,0,46-46V72A14,14,0,0,0,100,58Zm2,80H40a2,2,0,0,1-2-2V72a2,2,0,0,1,2-2h60a2,2,0,0,1,2,2ZM216,58H156a14,14,0,0,0-14,14v64a14,14,0,0,0,14,14h62v10a34,34,0,0,1-34,34,6,6,0,0,0,0,12,46.06,46.06,0,0,0,46-46V72A14,14,0,0,0,216,58Zm2,80H156a2,2,0,0,1-2-2V72a2,2,0,0,1,2-2h60a2,2,0,0,1,2,2Z"/>
    </svg>
  );
}
