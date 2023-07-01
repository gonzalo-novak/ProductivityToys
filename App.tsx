import { StatusBar } from 'expo-status-bar';
import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const userAtomTest = atom<{ name: string, age: number } | null>(null);

export default function App() {
  const [user, setUser] = useAtom(userAtomTest);

  const handleUserSession = useCallback(() => {
    setUser(prevUser => prevUser ? null : { name: 'John Doe', age: 20 });
  }, []);

  return (
    <View style={styles.container}>
      {(user) && <Text>Hello {user.name}, your age is: {user.age}</Text>}
      <Button onPress={handleUserSession} title={(user) ? 'Log out' : 'Log in'} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
