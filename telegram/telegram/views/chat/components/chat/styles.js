import {StyleSheet} from "react-native";

// theme
import {default_theme, Fonts, FontsSize} from "@/theme";

// utils
import {hp, wp} from "@/utils";

const styles = StyleSheet.create({
  container: {
    height: hp(6),
  },
  content: {
    flexGrow: 1,
    borderBottomLeftRadius: hp(6),
    borderBottomRightRadius: hp(6),
  },
  chatBoxContainer: {
    flexDirection: "row",
    minHeight: hp(6),
    maxHeight: hp(12),
    paddingHorizontal: wp(3),
  },
  input: {
    width: "92%",
    marginLeft: wp(3),
    fontFamily: Fonts.Regular,
    fontSize: FontsSize.small,
    paddingTop: 0,
    paddingBottom: 0,
    lineHeight: hp(2),
  },
  cameraIconContainer: {
    marginRight: wp(2),
    transform: [{rotate: "-45deg"}],
  },
  sendIconContainer: {
    flexDirection: "column",
    backgroundColor: default_theme.primary,
    justifyContent: "center",
    alignItems: "center",
    width: hp(3),
    height: hp(3),
    borderRadius: hp(3),
  },
  sendIcon: {
    transform: [{rotate: "45deg"}],
    marginRight: wp(1),
  },
  leftSide: {
    flexDirection: "row",
    alignSelf: "flex-end",
    paddingBottom: hp(0.5),
  },
  middleSide: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  rightSide: {
    flexDirection: "row",
    alignSelf: "flex-end",
    paddingBottom: hp(0.5),
  },
});

export default styles;