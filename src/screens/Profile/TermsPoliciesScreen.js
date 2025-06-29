import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const TermsPoliciesScreen = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.title}>Terms, Policies and Licenses</Text>
    <Text style={styles.sectionTitle}>Terms of Service</Text>
    <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa.</Text>
    <Text style={styles.sectionTitle}>Privacy Policy</Text>
    <Text style={styles.text}>Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</Text>
    <Text style={styles.sectionTitle}>Licenses</Text>
    <Text style={styles.text}>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt.</Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 18, marginBottom: 6 },
  text: { fontSize: 15, color: '#333', marginBottom: 10 },
});

export default TermsPoliciesScreen;
