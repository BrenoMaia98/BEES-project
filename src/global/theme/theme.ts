export type Palette = {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  secondaryLight: string;
  secondaryDark: string;
  background2: string;
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
    primaryLight: '#ffff8a',
    primaryDark: '#bdba1f',
    secondary: '#52515C',
    secondaryLight: '#7e7d89',
    secondaryDark: '#292933',
    background2: '#FFF',
    background: '#FFFEF2',
    font: {
      primaryBg: '#00010D',
      secondaryBg: '#fff',
    },
  },
  dark: {
    secondary: '#F3EC57',
    secondaryLight: '#ffff8a',
    secondaryDark: '#bdba1f',
    primary: '#52515C',
    primaryLight: '#7e7d89',
    primaryDark: '#292933',
    background2: '#000',
    background: '#00010D',
    font: {
      primaryBg: '#fff',
      secondaryBg: '#00010D',
    },
  },
};

export default globalTheme;
