import { MaterialIcons } from "@expo/vector-icons";

interface Category {
  id: string;
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
}

export const caterogies: Category[] = [
  {
    id: "1",
    name: "Curso",
    icon: "code",
  },
  {
    id: "2",
    name: "Projetos",
    icon: "folder",
  },
  {
    id: "3",
    name: "Site",
    icon: "language",
  },
  {
    id: "4",
    name: "Artigo",
    icon: "newspaper",
  },
  {
    id: "5",
    name: "Vídeo",
    icon: "movie",
  },
  {
    id: "6",
    name: "Documentação",
    icon: "content-paste",
  },
];
