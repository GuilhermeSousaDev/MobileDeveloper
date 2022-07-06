import React, { useEffect, useState } from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity, 
  FlatList,
} from 'react-native';
import RegisterUser from './components/RegisterUser';
import Users from './components/Users';
import { IUsers } from './interfaces/IUsers';
import api from './services/Axios';
import styles from './style';

export default function App() {
  const [show, setShow] = useState<boolean>(false);
  const [users, setUsers] = useState<IUsers[]>();

  useEffect(() => {
    (async () => {
      const { data } = await api.get('api');

      setUsers(data);
    })();
  }, [users]);

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
        { show? <RegisterUser setShow={setShow} /> : '' }
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => setShow(!show)}>
        <Text style={{ color: '#fff' }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
