import { FlashList } from '@shopify/flash-list';
import { Image } from 'expo-image';
import { Dimensions, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Event, events } from '../../data/events';

type StorylineEventProps = {
  item: Event;
};

const { width } = Dimensions.get('window');
const imageWidth = width / 3;

function StorylineEvent({ item }: StorylineEventProps) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text style={{ fontVariant: ['tabular-nums'] }}>{item.date}</Text>

      <View
        style={{
          width: 12,
          height: '100%',
          backgroundColor: '#e50',
          marginHorizontal: 12,
        }}
      />

      <View style={{ flex: 1 }}>
        <Text>{item.title}</Text>
        <Text style={{ fontStyle: 'italic' }}>{item.location}</Text>

        <View style={{ flexDirection: 'row' }}>
          {item.photos.map((photo, index) => (
            <Image
              key={String(index)}
              source={photo}
              cachePolicy="none"
              style={{
                width: imageWidth,
                aspectRatio: 9 / 16,
                zIndex: item.photos.length - index,
                marginLeft: index === 0 ? 0 : -imageWidth / 1.5,
                borderRadius: 12,
              }}
            />
          ))}
        </View>

        <View style={{ flexDirection: 'row' }}>
          {item.videos.map((video, index) => (
            <Image
              key={String(index)}
              source={video}
              cachePolicy="none"
              style={{ height: 100, width: 100 }}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

export default function Storyline() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlashList
        data={events}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        renderItem={({ item }) => {
          return <StorylineEvent item={item} />;
        }}
      />
    </SafeAreaView>
  );
}
