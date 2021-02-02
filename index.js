const backgroundColor = "#1a1b26";
const foregroundColor = "#a9b1d6";

const black = "#363b54";
const blue = "#7aa2f7";
const cyan = "#7dcfff";
const green = "#41a6b5";
const magenta = "#bb9af7";
const red = "#f7768e";
const white = "#787c99";
const yellow = "#e0af68";

const lightBlack = "#363b54";
const lightBlue = "#7aa2f7";
const lightCyan = "#7dcfff";
const lightGreen = "#41a6b5";
const lightMagenta = "#bb9af7";
const lightRed = "#f7768e";
const lightWhite = "#acb0d0";
const lightYellow = "#e0af68";

const borderColor = "#101014";
const activeTabBorderBottomColor = "#3d59a1";

const cursorColor = foregroundColor;
const cursorAccentColor = backgroundColor;

const selectionColor = "#515c7e40";

exports.decorateConfig = (config) =>
  Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    cursorAccentColor,
    selectionColor,
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack,
      lightRed,
      lightGreen,
      lightYellow,
      lightBlue,
      lightMagenta,
      lightCyan,
      lightWhite,
    },
    css: `
    /* source: https://github.com/sindresorhus/hyper-snazzy */

    /* Hide title when only one tab */
    .tabs_title {
      display: none !important;
    }

    /* Add a highlight line below the active tab */
    .tab_tab::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background-color: ${activeTabBorderBottomColor};
      transform: scaleX(0);
      will-change: transform;
    }
    .tab_tab.tab_active::before {
      transform: scaleX(1);
      transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
    }

    /* Fade the title of inactive tabs and the content of inactive panes */
    .tab_text,
    .term_term {
      opacity: 0.6;
      will-change: opacity;
    }
    .tab_active .tab_text,
    .term_active .term_term {
      opacity: 1;
      transition: opacity 0.12s ease-in-out;
    }

    /* Allow custom css / overrides */
    ${config.css}
  `,
  });

