export const inputHeight = 48;
export const h1FontSize = 32;
export const h2FontSize = 24;
export const h3FontSize = 20;
export const extraBigFontSize = 18;
export const bigFontSize = 16;
export const fontSize = 14;
export const smallFontSize = 12;
export const smallerFontSize = 11;
export const biggerFontSize = 160;
export const fontFamily: string = [
  "Montserrat",
  "Montserrat-semiBold",
  "Montserrat-Bold",
  "Montserrat-ExtraBold",
].join(",");
export const fontStyle = "normal";
export const fontWeightNormal = 400;
export const fontWeightRegular = 500;
export const fontWeightBold = 600;
export const fontWeightBolder = 700;

export const colour: Colour = {
  primary: "rgb(0, 46, 109)", // #002E6D
  primaryLighter: "rgb(31, 180, 238)", // #1FB4EE
  primaryDarker: "rgb(15, 62, 126)", //#0F3E7E
  canvasInverse: "rgb(25, 25, 25)", // #191919
  secondaryText: "rgb(117, 133, 146)", // #758592
  secondaryTextLighter: "rgb(117, 133, 146, 0.2)", // #758592 0.2 Opacity
  secondaryTextStrongLighter: "rgb(117, 133, 146, 0.06)", // #758592 0.06 Opacity
  canvas: "rgb(255, 255, 255)", // #FFFFFF
  canvasLighter: "rgb(255, 255, 255, 0.6)", // #FFFFFF
  error: "rgb(245, 51, 63)", // #F5333F
  defaultPrimary: "rgb(0, 162, 225)", // #00A2E1
  defaultPrimaryLighter: "rgb(0, 162, 225, 0.1)", // #00A2E1 0.1 Opacity
  blueLighterBg: "rgba(0, 162, 225, 0.35)", //#00a2e159
  defaultPrimaryLight: "rgb(rgb(148, 221, 249)", // #94DDF9
  defaultSecondary: "rgb(255, 217, 84)", // #ffd954
  disabled: "rgb(227, 227, 227)", // #E3E3E3
  textDisabled: "rgb(102, 102, 102)", // #666666
  placeholder: "rgb(174, 174, 174)", // #AEAEAE
  iconBtnPrimary: "rgba(236, 102, 7)", // #EC6607
  iconBtnPrimaryLighter: "rgba(236, 102, 7, 0.1)", // #EC6607
  iconBtnSecondary: "rgba(117, 141, 146, 0.05)", // #758D92
  primaryRed: "rgba(208, 13, 45)", // #D00D2D
  defaultPrimaryDark: "rgb(21, 100, 131)", // #156483
  errorLighter: "rgba(245, 51, 63, 0.9);", // #F5333F 0.1 Opacity
  success: "rgb(0, 165, 133)", // #00A585
  successLighter: "rgba(0, 165, 133, 0.1)", // #00A585 0.1 Opacity
  lightGrey: "rgb(248, 249, 249)", // #F8F9F9
  lightBlack: "rgb(0, 0, 0, 0.8)", // #000000 0.8 Opacity
  pageErrorText: "rgba(117, 141, 146, 0.6)", // #758D92" 0.6 Opacity
  background: "rgb(248, 248, 248)", // #F8F8F8
  backgroundLighter: "rgb(242, 250, 253)", // #F2FAFD
  iconBackgroundHover: "rgb(18, 133, 155)", // #12859b
  secondaryDark: "rgb(55, 63, 65)", // #373f41
  progressDark: "#00A585",
  progressLight: "#8cedda",
  skeletonBackground: "rgba(117, 141, 146, 0.2)", // #758D92 0.2 Opacity
  takeTourCardBackground: "rgb(233, 248, 254)", // #E9F8FE
  bannerBackground: "rgb(182, 220, 255)", // #B6DCFF
  successHex:"#00A585" //#00A585

};

export const megaNav = {
  lineHeight: "50px",
  mobieMegaNavWidth: "90%",
};

export const padding = {
  //Padding
  sm: "5px",
  md: "10px",
  lg: "15px",
  xl: "20px",
};

export const defaultValues = {
  iconButtonHeight: "48px",
  iconButtonWidth: "48px",
  iconHeightLg: "48px",
  iconWidthLg: "48px",
  fontsizeXs: "12px",
  fontsizeSm: "14px",
  fontsizeMd: "16px",
  fontSizeLg: "20px",
  fontsizeXl: "25px",
  lineHeightLg: "30px",
};

export const iconSizeConfig = (iconSize: "small" | string) => {
  let width = 54;
  let height = 60;

  switch (iconSize) {
    case "small": {
      width = 25;
      height = 28;
      break;
    }
    case "medium": {
      width = 35;
      height = 40;
      break;
    }
    case "large": {
      width = 45;
      height = 52;
      break;
    }
  }
  return { width, height };
};

export const margin = {
  //Margins
  sm: "5px",
  md: "10px",
  lg: "15px",
  xl: "20px",
};
interface Colour {
  primary: string;
  primaryLighter: string;
  primaryDarker: string;
  canvas: string;
  canvasLighter: string;
  canvasInverse: string;
  error: string;
  defaultPrimary: string;
  disabled: string;
  textDisabled: string;
  placeholder: string;
  secondaryText: string;
  secondaryTextLighter: string;
  secondaryTextStrongLighter: string;
  defaultPrimaryLight: string;
  defaultSecondary: string;
  defaultPrimaryLighter: string;
  iconBtnPrimary: string;
  iconBtnPrimaryLighter: string;
  iconBtnSecondary: string;
  primaryRed: string;
  defaultPrimaryDark: string;
  blueLighterBg: string;
  errorLighter: string;
  success: string;
  successLighter: string;
  lightGrey: string;
  lightBlack: string;
  pageErrorText: string;
  background: string;
  backgroundLighter: string;
  iconBackgroundHover: string;
  secondaryDark: string;
  progressDark: string;
  progressLight: string;
  skeletonBackground: string;
  takeTourCardBackground: string;
  bannerBackground: string;
  successHex: string;
}