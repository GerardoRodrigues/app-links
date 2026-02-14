import { Category } from "@/src/components/category";
import { colors } from "@/src/styles/colors";
import { caterogies } from "@/src/utils/categories";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Categories } from "@/src/components/categories";

export default function Index() {
  const categories = caterogies;
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/src/assets/logo.png")} style={styles.logo} />
        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories />
    </View>
  );
}
