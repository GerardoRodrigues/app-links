import { Categories } from "@/src/components/categories";
import { Link } from "@/src/components/link";
import { colors } from "@/src/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import {
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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

      <Categories />

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

      <Modal transparent visible>
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
          </View>
        </View>
      </Modal>
    </View>
  );
}
