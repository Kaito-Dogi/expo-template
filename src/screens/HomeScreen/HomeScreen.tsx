import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { Text, View } from "react-native";

import { styles } from "./style";

type Props = {
  message: string;
};

/**
 * @package
 */
export const HomeScreen: FC<Props> = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <StatusBar style="auto" />
    </View>
  );
};
