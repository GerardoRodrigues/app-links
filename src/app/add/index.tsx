import { Button } from "@/src/components/button";
import { Categories } from "@/src/components/categories";
import { Input } from "@/src/components/input";
import { colors } from "@/src/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/stylesAddPage";

export default function Add() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  function handleAddLink() {
    if (!category) {
      return Alert.alert("Categoria", "Selecione a categoria");
    }

    if (!name.trim()) {
      return Alert.alert("Nome", "Informe o nome do link");
    }

    if (name.trim().length <= 3) {
      return Alert.alert("Nome", "O nome deve ter pelo menos 4 caracteres");
    }

    if (!url) {
      return Alert.alert("URL", "Informe a URL do link");
    }

    if (!url.includes(".com") || url.includes(" ")) {
      return Alert.alert("URL", "Informe uma URL válida");
    }

    console.log({ category, name, url });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>

        <Text style={styles.title}>Novo</Text>
      </View>

      <Text style={styles.label}>Selecione a categoria</Text>
      <Categories selected={category} onChange={setCategory} />

      <View style={styles.form}>
        <Input placeholder="Nome" onChangeText={setName} />
        <Input placeholder="URL" onChangeText={setUrl} />
        <Button title="Adicionar" onPress={handleAddLink} />
      </View>
    </View>
  );
}
