import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhQuotesDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDgsNzJ2NzJINDBhOCw4LDAsMCwxLTgtOFY3MmE4LDgsMCwwLDEsOC04aDYwQTgsOCwwLDAsMSwxMDgsNzJabTEwOC04SDE1NmE4LDgsMCwwLDAtOCw4djY0YTgsOCwwLDAsMCw4LDhoNjhWNzJBOCw4LDAsMCwwLDIxNiw2NFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xMDAsNTZINDBBMTYsMTYsMCwwLDAsMjQsNzJ2NjRhMTYsMTYsMCwwLDAsMTYsMTZoNjB2OGEzMiwzMiwwLDAsMS0zMiwzMiw4LDgsMCwwLDAsMCwxNiw0OC4wNSw0OC4wNSwwLDAsMCw0OC00OFY3MkExNiwxNiwwLDAsMCwxMDAsNTZabTAsODBINDBWNzJoNjBaTTIxNiw1NkgxNTZhMTYsMTYsMCwwLDAtMTYsMTZ2NjRhMTYsMTYsMCwwLDAsMTYsMTZoNjB2OGEzMiwzMiwwLDAsMS0zMiwzMiw4LDgsMCwwLDAsMCwxNiw0OC4wNSw0OC4wNSwwLDAsMCw0OC00OFY3MkExNiwxNiwwLDAsMCwyMTYsNTZabTAsODBIMTU2VjcyaDYwWiIvPjwvc3ZnPg==)
 */
export function PhQuotesDuotoneIcon(props: PhQuotesDuotoneIconProps) {
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
      <path d="M108,72v72H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60A8,8,0,0,1,108,72Zm108-8H156a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8h68V72A8,8,0,0,0,216,64Z" opacity="0.2"/><path d="M100,56H40A16,16,0,0,0,24,72v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,100,56Zm0,80H40V72h60ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Zm0,80H156V72h60Z"/>
    </svg>
  );
}
