import React, { useCallback, useEffect, useState } from 'react';
import { 
  StyleSheet,
  Text, 
  View, 
  TouchableOpacity, 
  FlatList,
} from 'react-native';
import RegisterUser from './components/RegisterUser';
import Users from './components/Users';
import api from './services/Axios';

interface IUsers {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  createdAt: Date;
  updatedAt: Date;
}

export default function App() {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [age, setAge] = useState<number>();
  const [show, setShow] = useState<boolean>(false);

  const [users, setUsers] = useState<IUsers[]>();

  const registerUserInDatabase = useCallback(async () => {
    await api.post<IUsers>('api', { firstName, lastName, age });
  }, [firstName, lastName, age]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('api');

      setUsers(data);
    })();
  }, []);

  return (
    <View style={styles.container}>  
      <View style={styles.flatList}>
        <FlatList 
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Users user={item} />}
        />
       </View>

      <Text>
        { show? <RegisterUser /> : '' }
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => setShow(!show)}>
        <Text style={{ color: '#fff' }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    marginTop: 100
  },
  button: {
    color: '#fff', 
    marginTop: 15,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  textInput: {
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 10
  }
});
