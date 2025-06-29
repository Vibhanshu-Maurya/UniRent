import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const PrivacyCenterScreen = () => {
  const [privateAccount, setPrivateAccount] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Privacy Center</Text>
      <Text style={styles.info}>Control your privacy settings below.</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Private Account</Text>
        <Switch value={privateAccount} onValueChange={setPrivateAccount} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 18, textAlign: 'center' },
  info: { fontSize: 15, color: '#555', marginBottom: 18, textAlign: 'center' },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 },
  label: { fontSize: 16 },
});

export default PrivacyCenterScreen;
