import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTornadoLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAsNDBhNiw2LDAsMCwxLTYsNkg1NmE2LDYsMCwwLDEsMC0xMkgyMjRBNiw2LDAsMCwxLDIzMCw0MFpNMTgyLDcyYTYsNiwwLDAsMC02LTZIMzJhNiw2LDAsMCwwLDAsMTJIMTc2QTYsNiwwLDAsMCwxODIsNzJabS0xNiwzMmE2LDYsMCwwLDAtNi02SDU2YTYsNiwwLDAsMCwwLDEySDE2MEE2LDYsMCwwLDAsMTY2LDEwNFptMTYsMzJhNiw2LDAsMCwwLTYtNkg4OGE2LDYsMCwwLDAsMCwxMmg4OEE2LDYsMCwwLDAsMTgyLDEzNlptMiwyNkgxMjBhNiw2LDAsMCwwLDAsMTJoNjRhNiw2LDAsMCwwLDAtMTJabS0yNCwzMkgxMjhhNiw2LDAsMCwwLDAsMTJoMzJhNiw2LDAsMCwwLDAtMTJabS0zMiwzMkgxMTJhNiw2LDAsMCwwLDAsMTJoMTZhNiw2LDAsMCwwLDAtMTJaIi8+PC9zdmc+)
 */
export function PhTornadoLightIcon(props: PhTornadoLightIconProps) {
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
      <path d="M230,40a6,6,0,0,1-6,6H56a6,6,0,0,1,0-12H224A6,6,0,0,1,230,40ZM182,72a6,6,0,0,0-6-6H32a6,6,0,0,0,0,12H176A6,6,0,0,0,182,72Zm-16,32a6,6,0,0,0-6-6H56a6,6,0,0,0,0,12H160A6,6,0,0,0,166,104Zm16,32a6,6,0,0,0-6-6H88a6,6,0,0,0,0,12h88A6,6,0,0,0,182,136Zm2,26H120a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12Zm-24,32H128a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12Zm-32,32H112a6,6,0,0,0,0,12h16a6,6,0,0,0,0-12Z"/>
    </svg>
  );
}
