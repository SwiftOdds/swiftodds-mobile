import { Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 40 }}>
      <Text>SwiftOdds</Text>
      <Button title="Place Bet" onPress={() => alert('Bet placed')} />
    </View>
  );
}
