// No solid-js imports: this file must compile and run under Solid 1.x and 2.x.
// See createIcon.tsx for why svgAttributes replaces splitProps / omit.
const ICON_PROPS = new Set(["size", "color", "weight", "mirrored"]);

function svgAttributes(props) {
  const passes = (key) =>
    !ICON_PROPS.has(key) && Reflect.getOwnPropertyDescriptor(props, key) !== undefined;
  return new Proxy({}, {
    get: (_, key) => (ICON_PROPS.has(key) ? undefined : Reflect.get(props, key)),
    has: (_, key) => !ICON_PROPS.has(key) && Reflect.has(props, key),
    ownKeys: () => Reflect.ownKeys(props).filter((key) => !ICON_PROPS.has(key)),
    getOwnPropertyDescriptor: (_, key) =>
      passes(key)
        ? { configurable: true, enumerable: true, get: () => Reflect.get(props, key) }
        : undefined,
  });
}

export function createIcon(weights) {
  return function Icon(props) {
    const attributes = svgAttributes(props);
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        fill={props.color ?? "currentColor"}
        width={props.size ?? "1em"}
        height={props.size ?? "1em"}
        style={props.mirrored ? { transform: "scale(-1, 1)" } : undefined}
        {...attributes}
        innerHTML={weights[props.weight ?? "regular"]}
      />
    );
  };
}
