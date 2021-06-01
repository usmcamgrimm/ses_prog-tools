import { parseColorHexRGB } from "https://unpkg.com/@microsoft/fast-colors";
import { createColorPalette } from "https://unpkg.com/@microsoft/fast-components";

const accent = "#fc273f";
const palette = createColorPalette(parseColorHexRGB(accent));
const provider = document.querySelector("fast-design-system-provider");

provider.accentBaseColor = accent;
provider.accentPalette = palette;