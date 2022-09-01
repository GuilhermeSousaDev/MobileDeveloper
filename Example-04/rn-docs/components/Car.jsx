import { useCallback, useEffect, useState } from 'react';
import { View, Text, FlatList, Button, ScrollView, AsyncStorage } from 'react-native';

export default function Car() {
    const [car, setCar] = useState([]);

    useEffect(() => {
        (async () => {
            const carStorage = await AsyncStorage.getItem('car').length;

            if (!car.length && carStorage) {
                setCar(carStorage);
            }
        })();
    }, []);

    const products = [
        {
            id: 1,
            name: 'PC',
            price: 2000,
            stock: 250
        },
        {
            id: 2,
            name: 'IPhone',
            price: 5250,
            stock: 25
        },
        {
            id: 3,
            name: 'Pen',
            price: 2,
            stock: 150
        },
        {
            id: 4,
            name: 'Shirt',
            price: 25,
            stock: 50
        }
    ];

    const addProductToCar = useCallback(product => {
        setCar([...car, product]);
    }, [car]);

    const removeProductCar = useCallback(async i => {
        setCar(car.filter(item => item !== car[i]));

        await AsyncStorage.setItem('car', car);
    }, [car]);

    return (
        <ScrollView horizontal={true}>
            <Text>Products</Text>

            <FlatList 
                data={products}
                renderItem={({ item }) => (
                    <View>
                        <Text>{ item.name }</Text>
                        <Text>Price: { `R$ ${item.price},00` }</Text>
                        <Text>Stock: { item.stock }</Text>
                        <Button onPress={() => addProductToCar(item)} title="Add" />
                    </View>
                )}
            />

            <FlatList 
                data={car}
                keyExtractor={(_, index) => index}
                renderItem={({ item, index }) => (
                    <View>
                        <Text>{ item.name }</Text>
                        <Text>Price: { `R$ ${item.price},00` }</Text>
                        <Text>Stock: { item.stock }</Text>
                        <Button onPress={() => removeProductCar(index)} title="Remove" />
                    </View>
                )}
            />

            <Text>Item in Car: {car.length}</Text>
        </ScrollView>
    )
}