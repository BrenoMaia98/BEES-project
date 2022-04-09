export type Palette = {
  primary: string;
  secondary: string;
  background: string;
  font: {
    primaryBg: string;
    secondaryBg: string;
  };
};
export type GlobalThemeType = { light: Palette; dark: Palette };

const globalTheme: GlobalThemeType = {
  light: {
    primary: '#F3EC57',
    secondary: '#52515C',
    background: '#FFFEF2',
    font: {
      primaryBg: '#00010D',
      secondaryBg: '#fff',
    },
  },
  dark: {
    primary: '#52515C',
    secondary: '#F3EC57',
    background: '#00010D',
    font: {
      primaryBg: '#fff',
      secondaryBg: '#00010D',
    },
  },
};

export default globalTheme;
