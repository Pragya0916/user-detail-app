import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';

type User = {
  name: string;
  skills: string[];
};

const data: User[] = [
  { name: 'John', skills: ['React Native', 'React JS', 'Next JS'] },
  { name: 'Emma', skills: ['Vue JS', 'Nuxt JS', 'TypeScript'] },
  { name: 'Liam', skills: ['Angular', 'Node JS', 'Express JS'] },
  { name: 'Sophia', skills: ['Python', 'Django', 'Flask'] },
  { name: 'Oliver', skills: ['Java', 'Spring Boot', 'Hibernate'] },
  { name: 'Ava', skills: ['PHP', 'Laravel', 'CodeIgniter'] },
  { name: 'Noah', skills: ['C#', '.NET Core', 'Blazor'] },
  { name: 'Isabella', skills: ['Ruby', 'Ruby on Rails', 'Sinatra'] },
  { name: 'Mason', skills: ['Go', 'Gin', 'Echo'] },
  { name: 'Mia', skills: ['C++', 'Qt', 'Boost'] },
];

const ListScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        renderItem={({ item }:any) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {item.skills.map((skill:string[], index:number) => (
                <Text key={index} style={styles.skill}>
                  {skill}
                </Text>
              ))}
            </ScrollView>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  skill: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
});

export default ListScreen;
