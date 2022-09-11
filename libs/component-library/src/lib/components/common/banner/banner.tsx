/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from "react";
import Box from "@material-ui/core/Box";
import BannerTileSvg, {
  RightSideBannerSvg,
  LeftSideBannerSvg,
  MainSection,
  BannerCubes,
} from "../banner-tile-svg/banner-tile-svg";
import { Container, makeStyles, Theme, createStyles } from "@material-ui/core";
import { colour } from "../../../styles/theme/config";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body: {
      height: 160,
      width: "100%",
      marginTop: 5,
      position: "relative",
      background: colour.bannerBackground,
    },
    header: {
      color: colour.primary,
      position: "absolute",
      top: 90,
      left: 160,
      [theme.breakpoints.down("md")]: {
        left: 20,
      },
    },
    bannerSvg: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  })
);

const Banner = () => {
    const styles = useStyles();
    const router = useRouter();

    return (
        <Box className={styles.body} data-testid="banner-box">
          <LeftSideBannerSvg />
          <Box className={styles.bannerSvg}>
          {" "}
          <BannerTileSvg />
          </Box>
        </Box>
    );
};

export default Banner;