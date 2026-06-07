import { splitProps, mergeProps } from "solid-js";

export function createIcon(weights) {
  return function Icon(props) {
    const merged = mergeProps(
      { size: "1em", color: "currentColor", weight: "regular", mirrored: false },
      props
    );
    const [local, svgProps] = splitProps(merged, ["size", "color", "weight", "mirrored"]);
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        fill={local.color}
        width={local.size}
        height={local.size}
        style={local.mirrored ? { transform: "scale(-1, 1)" } : undefined}
        {...svgProps}
        innerHTML={weights[local.weight]}
      />
    );
  };
}
