import { Category } from "@/src/components/category";
import { colors } from "@/src/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/src/assets/logo.png")} style={styles.logo} />
        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Category name="React Native" icon="code" isSelected />

      <Category name="Vídeo" icon="movie" isSelected={false} />
    </View>
  );
}
