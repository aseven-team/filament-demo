import theme from "tailwindcss/defaultTheme";
import preset from "../../../../vendor/filament/filament/tailwind.config.preset";

export default {
    presets: [preset],
    content: [
        "./app/Filament/Clusters/Products/**/*.php",
        "./resources/views/filament/clusters/products/**/*.blade.php",
        "./vendor/filament/**/*.blade.php",
    ],
    theme: {
        extend: {
            borderRadius: {
                lg: "0.375rem",
                xl: "0.5rem",
            },
            backgroundImage: {
                main: "radial-gradient(50% 30% at 65% 0%, var(--tw-gradient-stops)), url(../../../images/dot-grid.png)",
                "main-dark":
                    "radial-gradient(50% 30% at 65% 0%, var(--tw-gradient-stops)), url(../../../images/dot-grid-dark.png)",
            },
        },
    },
};
