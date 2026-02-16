import AsyncStorage from "@react-native-async-storage/async-storage";

const LINKS_STORAGE_KEY = "links-storage";

export interface LinkStorage {
  id: string;
  name: string;
  url: string;
  category: string;
}

async function getLinks(): Promise<LinkStorage[]> {
  const links = await AsyncStorage.getItem(LINKS_STORAGE_KEY);
  const response = links ? JSON.parse(links) : [];
  return response;
}

async function saveLink(link: LinkStorage) {
  try {
    const links = await getLinks();
    const updatedLinks = JSON.stringify([...links, link]);
    await AsyncStorage.setItem(LINKS_STORAGE_KEY, updatedLinks);
  } catch (error) {
    throw error;
  }
}

async function removeLink(id: string) {
  try {
    const links = await getLinks();
    const updatedLinks = links.filter((link) => link.id !== id);
    await AsyncStorage.setItem(LINKS_STORAGE_KEY, JSON.stringify(updatedLinks));
  } catch (error) {
    throw error;
  }
}

export const linkStorage = { getLinks, saveLink, removeLink };
