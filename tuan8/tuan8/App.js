import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useEffect, useState } from 'react';

const animal = [
  { id: 1, name: 'cat', gender: 'male', yob: '2year', location: 'Long An', image: require('./assets/anhcat.jpg') , },
  { id: 2, name: 'dog', gender: 'female', yob: '3year', location: 'Gò Vấp', image: require('./assets/anhcat.jpg') },
  { id: 3, name: 'lion', gender: 'male', yob: '2year', location: 'Bình Dương', image: require('./assets/anhcat.jpg') },
  { id: 4, name: 'tiger', gender: 'male', yob: '5year', location: 'Long Hoa', image: require('./assets/anhcat.jpg') },
  { id: 5, name: 'chicken', gender: 'female', yob: '2year', location: 'USA', image: require('./assets/anhcat.jpg') },
  { id: 6, name: 'duck', gender: 'male', yob: '3year', location: 'Korea', image: require('./assets/anhcat.jpg') },
];

const animaltype = [
  { id: 1, name: 'cat', image: require('./assets/anhcat.jpg') },
  { id: 2, name: 'dog', image: require('./assets/anhcat.jpg') },
  { id: 3, name: 'rabbit', image: require('./assets/anhcat.jpg') },
];

export default function App() {

//   const [animal, setAnimals] = useState([]);
//   const [animaltype, setAnimalTypes] = useState([]);

//   useEffect(() => {
//     // Lấy dữ liệu cho pets
//     fetch('https://6454c780f803f345763101a6.mockapi.io/pets')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('Pets data:', data); // In ra dữ liệu để kiểm tra
//         setAnimals(data);
//       })
//       .catch(error => console.error('Error fetching pets:', error));

//     // Lấy dữ liệu cho animal types
//     fetch('https://6454c780f803f345763101a6.mockapi.io/animaltypea')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('Animal types data:', data); // In ra dữ liệu để kiểm tra
//         setAnimalTypes(data);
//       })
//       .catch(error => console.error('Error fetching animal types:', error));
//   }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header1}>
          <Ionicons style={styles.iconn} name="list" size={30} />
          <Text style={styles.tieude}>PET ADOPTION</Text>
        </View>

        <View style={styles.header2}>
          <TextInput style={styles.input} placeholder='Search for pets' />
          <Ionicons style={styles.icon2} name='search' size={30} />
        </View>
      </View>

      <View style={styles.banner}>
        <Image source={require('./assets/anhcat.jpg')} style={styles.imgbanner} />
        <Text style={styles.textbanner}> Pet Adoption Made Easy</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textbutton}>Adopt now</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dulieu}>
        <Text style={styles.text1}>Categories</Text>
        <Text style={styles.text2}>Show all</Text>
      </View>

      <FlatList
        horizontal
        data={animaltype}
        renderItem={({ item }) => (
          <View style={styles.animaltype}>
            <Image source={item.image} style={styles.animaltypeImage} />
            <Text style={styles.animaltypeText}>{item.name}</Text>
          </View>
        )}
      
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false} // Tắt thanh cuộn ngang
        style={styles.flat1} // Thêm style cho FlatList đầu tiên
      />

      <FlatList
        data={animal}
        renderItem={({ item }) => (
          <View style={styles.animal}>
            <Image source={item.image} style={styles.animaltypeImage2} />
            <Text style={styles.animaltypeName2}>{item.name}</Text>
            <View style={styles.ghep}>
            <Text style={styles.animaltypeYob}>{item.yob}</Text>
            <Text style={styles.animaltypeGender}>{item.gender}</Text>
            </View>
            <Text style={styles.animaltypeLocation}>{item.location}</Text>
          </View>
        )}
          numColumns={2}
        keyExtractor={item => item.id.toString()}
        style={styles.flat2} // Thêm style cho FlatList thứ hai
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  header1: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  tieude: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 50,
  },

  header2: {
    flexDirection: 'row',
  },
  input: {
    borderWidth: 2,
    width: 350,
    textAlign: 'center',
    height: 30,
  },
  icon2: {
    position: 'absolute',
    right: 10,
  },
  banner: {
    marginTop: 10,
  },

  imgbanner: {
    width: '100%', // Đặt chiều rộng của ảnh banner 100%
    height: 200, // Chiều cao của ảnh banner
    borderRadius: 10, // Bo góc cho ảnh banner
  },
  textbanner: {
    position: 'absolute',
    fontWeight: 'bold',
    color: 'white',
    marginTop: 30,
    marginLeft: 20, // Đặt vị trí cho văn bản
  },
  button: {
    height: 30,
    width: 100,
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: 'white',
    position: 'absolute',
    marginLeft: 200,
    marginTop: 90,
  },
  textbutton: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dulieu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text1: {
    fontWeight: 'bold',
  },
  text2: {
    fontWeight: 'bold',
  },
  animaltype: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  animaltypeImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  animaltypeText: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 10,
    marginTop: 10,
  },
  flat1: {
    marginTop: 20, // Tạo khoảng cách giữa các FlatList
    paddingBottom: 100, // Thêm paddingBottom để tránh che khuất
    maxHeight: 100, // Đặt chiều cao tối đa cho FlatList đầu tiên
  },
  flat2: {
    marginTop: 20,
  },
  animal:{
flex:1
  },
  animaltypeImage2:{
height:100,
width:100
  },
  animaltypeName2:{
fontWeight:'bold',
fontSize:20
  },
  ghep:{
    flexDirection:'row',
 
  },
  animaltypeYob:{
fontWeight:'bold',
  },
  animaltypeGender:{
marginLeft:15,
fontWeight:'bold',
  },
  animaltypeLocation:{
fontWeight:'bold',
  },
}); 