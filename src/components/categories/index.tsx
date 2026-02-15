import { caterogies } from "@/src/utils/categories";
import { FlatList } from "react-native";
import { Category } from "../category";
import { styles } from "./styles";

interface CategoriesProps {
  selected: string;
  onChange: (category: string) => void;
}

export const Categories = ({ selected, onChange }: CategoriesProps) => {
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      data={caterogies}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          icon={item.icon}
          isSelected={item.name === selected}
          onPress={() => onChange(item.name)}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};
