import { Categories } from "@/src/components/categories";
import { Link } from "@/src/components/link";
import { Options } from "@/src/components/option";
import { colors } from "@/src/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Linking,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinkStorage, linkStorage } from "../storage/link-storage";
import { styles } from "../styles/stylesIndexPage";
import { caterogies } from "../utils/categories";

export default function Index() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedLink, setSelectedLink] = useState<LinkStorage>(
    {} as LinkStorage,
  );
  const [category, setCategory] = useState(caterogies[0].name);
  const [links, setLinks] = useState<LinkStorage[]>([]);

  async function getLinks() {
    try {
      const response = await linkStorage.getLinks();
      const filteredLinks = response.filter(
        (link) => link.category === category,
      );
      setLinks(filteredLinks);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os links");
    }
  }

  function handleRemoveLink() {
    try {
      Alert.alert("Excluir", "Deseja realmente excluir o link?", [
        { style: "cancel", text: "Não" },
        {
          text: "Sim",
          onPress: async () => {
            await linkStorage.removeLink(selectedLink.id);
            setIsModalVisible(false);
            getLinks();
          },
        },
      ]);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível remover o link");
    }
  }

  function handleDetails(selected: LinkStorage) {
    setIsModalVisible(true);
    setSelectedLink(selected);
  }

  async function handleOpen() {
    try {
      await Linking.openURL(selectedLink.url);
      setIsModalVisible(false);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível abrir o link");
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      getLinks();
    }, [category]),
  );

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
        data={links}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link
            name={item.name}
            url={item.url}
            onDetails={() => {
              handleDetails(item);
            }}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linkContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible={isModalVisible} animationType="slide">
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>{selectedLink.category}</Text>
              <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalLinkName}>{selectedLink.name}</Text>
            <Text style={styles.modalUrl}>{selectedLink.url}</Text>

            <View style={styles.modalFooter}>
              <Options
                name="Excluir"
                icon="delete"
                variant="secondary"
                onPress={handleRemoveLink}
              />
              <Options name="Abrir" icon="language" onPress={handleOpen} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
