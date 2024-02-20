// color design tokens export
// export const colorTokens = {
//   grey: {
//     0: "#FFFFFF",
//     10: "#F6F6F6",
//     50: "#F0F0F0",
//     100: "#E0E0E0",
//     200: "#C2C2C2",
//     300: "#A3A3A3",
//     400: "#858585",
//     500: "#666666",
//     600: "#4D4D4D",
//     700: "#333333",
//     800: "#1A1A1A",
//     900: "#0A0A0A",
//     1000: "#000000",
//   },
//   primary: {
//     50: "#E6FBFF",
//     100: "#CCF7FE",
//     200: "#99EEFD",
//     300: "#66E6FC",
//     400: "#33DDFB",
//     500: "#00D5FA",
//     600: "#00A0BC",
//     700: "#006B7D",
//     800: "#00353F",
//     900: "#001519",
//   },
// };

export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#E0E0E0",
    100: "#BDBDBD",
    200: "#9E9E9E",
    300: "#757575",
    400: "#616161",
    500: "#424242",
    600: "#303030",
    700: "#212121",
    800: "#181818",
    900: "#000000",
  },
  primary: {
    50: "#FFF1E1",
    100: "#FFD0A9",
    200: "#FFAF72",
    300: "#FF8F3B",
    400: "#FF6F04",
    500: "#E65A00",
    600: "#B04800",
    700: "#7E3600",
    800: "#4C2400",
    900: "#1A1200",
  },
};

// export const colorTokens = {
//   grey: {
//     0: "#FFFFFF",
//     10: "#F2F2F2",
//     50: "#E5E5E5",
//     100: "#CCCCCC",
//     200: "#A6A6A6",
//     300: "#808080",
//     400: "#595959",
//     500: "#333333",
//     600: "#262626",
//     700: "#1A1A1A",
//     800: "#0D0D0D",
//     900: "#000000",
//   },
//   primary: {
//     50: "#E6F4FF",
//     100: "#B3E0FF",
//     200: "#80CCFF",
//     300: "#4DB8FF",
//     400: "#1AA5FF",
//     500: "#007FB2",
//     600: "#006699",
//     700: "#004C66",
//     800: "#003346",
//     900: "#001A26",
//   },
// };

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              dark: colorTokens.primary[200],
              main: colorTokens.primary[500],
              light: colorTokens.primary[800],
            },
            neutral: {
              dark: colorTokens.grey[100],
              main: colorTokens.grey[200],
              mediumMain: colorTokens.grey[300],
              medium: colorTokens.grey[400],
              light: colorTokens.grey[700],
            },
            background: {
              default: colorTokens.grey[900],
              alt: colorTokens.grey[800],
            },
          }
        : {
            // palette values for light mode
            primary: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[500],
              light: colorTokens.primary[50],
            },
            neutral: {
              dark: colorTokens.grey[700],
              main: colorTokens.grey[500],
              mediumMain: colorTokens.grey[400],
              medium: colorTokens.grey[300],
              light: colorTokens.grey[50],
            },
            background: {
              default: colorTokens.grey[10],
              alt: colorTokens.grey[0],
            },
          }),
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
