import {StyleSheet} from "react-native";

// theme
import {default_theme, Fonts, FontsSize} from "@/theme";

// utils
import {hp, wp} from "@/utils";

const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: hp(4),
    borderBottomRightRadius: hp(4),
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: wp(3),
    paddingVertical: hp(2),
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
  msgContainer: {
    flexDirection: "row-reverse",
    minWidth: wp(50),
    paddingBottom: hp(1),
    overflow: "hidden",
  },
  msgContent: {
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(5),
    borderTopLeftRadius: hp(5),
    borderTopRightRadius: hp(5),
    maxWidth: wp(85),
  },
  sendMsgContent: {
    backgroundColor: default_theme.primary,
    borderBottomLeftRadius: hp(5),
  },
  recieveMsgContent: {
    borderBottomRightRadius: hp(5),
  },
  msgText: {
    color: default_theme.white,
    fontFamily: Fonts.Regular,
    fontSize: FontsSize.tiny,
  },
  msgTimeContainer: {
    flexDirection: "row-reverse",
  },
  msgTime: {
    paddingTop: hp(1),
    fontFamily: Fonts.Regular,
    fontSize: FontsSize.nano,
  },
  galleryImage: {
    borderTopLeftRadius: hp(5),
    borderTopRightRadius: hp(5),
    width: wp(60),
    height: wp(60),
  },
});

export default styles;
