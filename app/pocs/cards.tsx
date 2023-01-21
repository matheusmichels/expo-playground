import { Image } from 'expo-image';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function Cards() {
  return (
    <ScrollView style={styles.container}>
      {new Array(5).fill(true).map((_, index) => {
        return (
          <Image
            key={index}
            style={styles.image}
            source={`https://picsum.photos/seed/${index * 5}/1080/1920`}
            placeholder={blurhash}
            contentFit="cover"
            transition={1000}
          />
        );
      })}
    </ScrollView>
  );
}

const { width } = Dimensions.get('window');
const imageWidth = width / 2;
const imageHeight = imageWidth * (16 / 9);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: imageWidth,
    height: imageHeight,
    backgroundColor: '#0553',
  },
});
