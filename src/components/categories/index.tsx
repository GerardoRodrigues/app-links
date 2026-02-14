import { caterogies } from "@/src/utils/categories";
import { FlatList } from "react-native";
import { Category } from "../category";
import { styles } from "./styles";

export const Categories = () => {
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      data={caterogies}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category name={item.name} icon={item.icon} isSelected={false} />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};
