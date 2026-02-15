import { Categories } from "@/src/components/categories";
import { Link } from "@/src/components/link";
import { Options } from "@/src/components/option";
import { colors } from "@/src/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../styles/stylesIndexPage";
import { caterogies } from "../utils/categories";

export default function Index() {
  const [category, setCategory] = useState(caterogies[0].name);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/src/assets/logo.png")} style={styles.logo} />
        <TouchableOpacity onPress={() => router.navigate("/add")}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories selected={category} onChange={setCategory} />

      <FlatList
        data={["1", "2", "3"]}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Link
            name="Google"
            url="https://google.com"
            onDetails={() => {
              console.log("details");
            }}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linkContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible={false}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Curso</Text>
              <TouchableOpacity>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalLinkName}>Google</Text>
            <Text style={styles.modalUrl}> https://google.com</Text>

            <View style={styles.modalFooter}>
              <Options name="Excluir" icon="delete" variant="secondary" />
              <Options name="Abrir" icon="language" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
