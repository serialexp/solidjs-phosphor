// Exactly one of these imports resolves. The other is an unresolved type,
// which IsUnresolved detects (`unknown extends T` holds only for any/unknown,
// and a real JSX.Element is neither).
// @ts-ignore -- Solid 1.x only: `solid-js` owns the JSX namespace.
import type { JSX as SolidOneJSX } from "solid-js";
// @ts-ignore -- Solid 2.x only: the web renderer owns the JSX namespace.
import type { JSX as SolidTwoJSX } from "@solidjs/web";

type IsUnresolved<T> = unknown extends T ? true : false;

/** `<svg>` attributes from whichever Solid major is installed. */
export type SvgAttributes =
  IsUnresolved<SolidTwoJSX.Element> extends true
    ? SolidOneJSX.SvgSVGAttributes<SVGSVGElement>
    : SolidTwoJSX.SvgSVGAttributes<SVGSVGElement>;
