# solidjs-phosphor

[Phosphor Icons](https://phosphoricons.com/) as SolidJS components. Auto-generated from [phosphor-icons/core](https://github.com/phosphor-icons/core).

## Install

```bash
pnpm add solidjs-phosphor
```

## Usage

```tsx
import { PhGearIcon, PhArrowClockwiseIcon } from "solidjs-phosphor";

function App() {
  return (
    <div>
      <PhGearIcon size={24} />
      <PhGearIcon size={32} weight="bold" />
      <PhGearIcon size={32} weight="duotone" color="#569cd6" />
      <PhArrowClockwiseIcon size={16} mirrored />
    </div>
  );
}
```

## Naming

Components follow the pattern `Ph{IconName}Icon`. All 1512 Phosphor icons are available.

## Props

Each component accepts all standard SVG attributes plus:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `"1em"` | Width and height |
| `color` | `string` | `"currentColor"` | Fill color |
| `weight` | `"thin" \| "light" \| "regular" \| "bold" \| "fill" \| "duotone"` | `"regular"` | Icon weight/style |
| `mirrored` | `boolean` | `false` | Flip horizontally (useful for RTL) |

## How it works

A GitHub Action runs weekly, clones [phosphor-icons/core](https://github.com/phosphor-icons/core), transforms SVGs into SolidJS components, and publishes a new version if anything changed.

The package ships pre-compiled JS and type declarations. The `solid` export condition also provides the raw JSX icon factory, so Solid-aware toolchains compile it for their own target (DOM on the client, SSR on the server).

## Solid 1.x and 2.x

The same release works with Solid 1.x and Solid 2.x:

- The icon factory imports nothing from `solid-js`, so it compiles and runs under either major.
- The prop types pick up `<svg>` attributes from whichever major is installed (`solid-js` for 1.x, `@solidjs/web` for 2.x).

On Solid 2.x, the toolchain has to resolve the `solid` export condition, which `@solidjs/vite-plugin` does. The pre-compiled fallback targets the Solid 1.x runtime.

## License

MIT (this package) — Phosphor Icons are [MIT licensed](https://github.com/phosphor-icons/core/blob/main/LICENSE).
