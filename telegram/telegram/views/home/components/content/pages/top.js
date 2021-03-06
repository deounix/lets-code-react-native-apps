import React from "react";

import {ScrollView, Text, TouchableOpacity} from "react-native";

import {ChevronDown as ChevronDownIcon} from "react-native-iconly";

// main home components
import {withTabs} from "@home-components";

// components
import {ChatComponent} from "@home-pages-components";

// theme
import {useTheme, themes} from "@/theme";

// json Data
import {HomeData} from "@/assets/json";

// utils
import PropTypes from "prop-types";
import {hp} from "@/utils";

// styles
import {topStyles as styles} from "./styles";

const ChatUI = ({navigation, title, data, setTab}) => {
  const theme = useTheme();

  return (
    <>
      <Text
        style={[
          styles.title,
          {
            color: themes[theme.name].whiteOrDark,
          },
        ]}>
        {title}
      </Text>

      {data.map((item, index) => (
        <ChatComponent
          key={index}
          {...item}
          onClick={() => {
            if (title === "messeges") {
              navigation.navigate("chat", {
                user_data: {
                  id: item.user_id,
                  username: item.username,
                  imgUrl: item.imgUrl,
                  status: item.status,
                },
              });
            }
          }}
        />
      ))}

      <TouchableOpacity
        style={styles.previousContainer}
        onPress={() => setTab()}>
        <Text
          style={[
            styles.previousTitle,
            {
              color: themes[theme.name].primary,
            },
          ]}>
          previous {title}
        </Text>

        <ChevronDownIcon
          style={styles.previousIcon}
          set="light"
          primaryColor={themes[theme.name].primary}
          stroke="regular"
          size={hp(2)}
        />
      </TouchableOpacity>
    </>
  );
};

// ChatUI props Types
ChatUI.propTypes = {
  navigation: PropTypes.object,
  title: PropTypes.string,
  data: PropTypes.array,
  setTab: PropTypes.func,
};

const Top = ({tabs, navigation}) => {
  const {messeges, groups, channels} = HomeData;

  // NO NEED FOR (RECYCLE LIST - FLAT LIST) AS THIS ITEMS SHOULD BE LIMITED TO MAXIMUM 3 PER SECTION !!
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}>
      {/* Messeges Tab >> tab_index is (1) */}
      <ChatUI
        navigation={navigation}
        title="messeges"
        data={messeges.slice(0, 3)}
        setTab={() => tabs.setTab(1)}
      />

      {/* Groups Tab >> tab_index is (2) */}
      <ChatUI
        navigation={navigation}
        title="groups"
        data={groups.slice(0, 3)}
        setTab={() => tabs.setTab(2)}
      />

      {/* Channels Tab >> tab_index is (3) */}
      <ChatUI
        navigation={navigation}
        title="channels"
        data={channels.slice(0, 3)}
        setTab={() => tabs.setTab(3)}
      />
    </ScrollView>
  );
};

// Top props Types
Top.propTypes = {
  tabs: PropTypes.object,
  navigation: PropTypes.object,
};

export default withTabs(Top);
