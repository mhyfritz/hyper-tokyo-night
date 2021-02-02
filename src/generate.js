const fs = require("fs/promises");
const path = require("path");

const JSON5 = require("json5");
const nunjucks = require("nunjucks");
const prettier = require("prettier");

const themePath = path.join(
  __dirname,
  "../tokyo-night-vscode-theme/themes/tokyo-night-color-theme.json"
);

main();

async function main() {
  const themeRaw = await fs.readFile(themePath, "utf8");
  const theme = JSON5.parse(themeRaw);

  const data = {
    backgroundColor: theme.colors["editor.background"],
    foregroundColor: theme.colors["editor.foreground"],
    black: theme.colors["terminal.ansiBlack"],
    blue: theme.colors["terminal.ansiBlue"],
    cyan: theme.colors["terminal.ansiCyan"],
    green: theme.colors["terminal.ansiGreen"],
    magenta: theme.colors["terminal.ansiMagenta"],
    red: theme.colors["terminal.ansiRed"],
    white: theme.colors["terminal.ansiWhite"],
    yellow: theme.colors["terminal.ansiYellow"],
    lightBlack: theme.colors["terminal.ansiBrightBlack"],
    lightBlue: theme.colors["terminal.ansiBrightBlue"],
    lightCyan: theme.colors["terminal.ansiBrightCyan"],
    lightGreen: theme.colors["terminal.ansiBrightGreen"],
    lightMagenta: theme.colors["terminal.ansiBrightMagenta"],
    lightRed: theme.colors["terminal.ansiBrightRed"],
    lightWhite: theme.colors["terminal.ansiBrightWhite"],
    lightYellow: theme.colors["terminal.ansiBrightYellow"],
    borderColor: theme.colors["tab.border"],
    activeTabBorderBottomColor: theme.colors["tab.activeBorder"],
    selectionColor: theme.colors["editor.selectionBackground"],
  };

  const rendered = nunjucks.render(path.join(__dirname, "index.js.j2"), data);
  const formatted = prettier.format(rendered, { parser: "babel" });

  console.log(formatted);
}
