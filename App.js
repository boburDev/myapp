import React, { useState } from 'react'
import {
	Text,
	View,
	SafeAreaView,
	Image,
	TextInput,
	TouchableOpacity,
	TouchableHighlight,
	Modal,
	Alert,
	FlatList,
	StatusBar
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import Linking from 'expo-linking'

	
const App = function() {


const DATA = [
	{
	  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
	  title: 'First Item',
	},
	{
	  id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
	  title: 'Second Item',
	},
	{
	  id: '58694a0f-3da1-471f-bd96-145571e29d72',
	  title: 'Third Item',
	},
  ];
  
  const Item = ({ item, onPress, style }) => (
	<TouchableOpacity onPress={onPress} style={[styles.item, style]}>
	  <Text style={styles.title}>{item.title}</Text>
	</TouchableOpacity>
  );
  
  
	const defaultImgPath = 'file:///Users/boburmirzo/Library/Developer/CoreSimulator/Devices/7423F334-DD07-4030-916B-74E4453E6734/data/Containers/Data/Application/16374B62-C808-43A5-AECB-D589CD10CD26/Library/Caches/ExponentExperienceData/%2540anonymous%252Fmyapp-826cd0d7-cb33-48d1-9830-bf6725406bb2/ImagePicker/F8B47EC9-D9A3-4CF2-9E75-3DD74593EDBD.jpg'


	
	const [image,setImage] = useState()
	const [selectedId, setSelectedId] = useState(null);
	const [modalVisible, setModalVisible] = useState(false);

	let openImagePickerAsync = async () => {
		let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
		
		if (permissionResult.granted) {
			let pickerResult = await ImagePicker.launchImageLibraryAsync()
			setImage(pickerResult)
		}
	  }

	  
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.auth}>
	  <TextInput
	  placeholder="Username"
      style={styles.authInput} />
	  <TextInput
	  placeholder="Password"
      style={styles.authInput} />
	  <TouchableOpacity
	  onPress={()=>{
		  Alert.alert('Form request')
	  }}
	  style={styles.authButton}>
		  <Text style={{
			  fontSize: 20
		  }}>
			  Submit
		  </Text>
	  </TouchableOpacity>
      </View>
		  
      <View style={styles.upload}>
		  <View style={styles.uploadImg}>
        {
			(image && image.uri) ? <Image source={{
				uri: image.uri
			}}
			style={{
				width:200,
				height:200
			}}
			/> : <Image source={{
				uri: defaultImgPath
			}}
			style={{
				width:200,
				height:200
			}}
			/>
		}
	</View>
		<TouchableOpacity
			onPress={openImagePickerAsync}
			style={styles.authButton}>
			<Text style={{
				fontSize: 20
				}}>
				Edit
			</Text>
		</TouchableOpacity>
	</View>
	<View style={styles.Flat}>
	<FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
	</View>

	<View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          Linking.openURL(`tel:+998901515064`)
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
    </View>
    </SafeAreaView>
  )
}

const styles = ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
	justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },
  authInput: {
	width:150,
	height: 30,
	padding:4,
	borderColor: 'gray',
	borderWidth: 1,
	marginTop: 10,
  },
  auth: {
	  flex: 1,
	  marginTop: 50
  },
  authButton: {
	flex: 1,
	alignItems: 'center',
	marginTop:10
  },
  upload: {
	  flex: 2,
  },
  Flat: {
	  flex: 2,
  },
  uploadImg: {
	width: 200,
	height: 200,
	borderRadius: 100,
	backgroundColor: '#000',
	overflow: 'hidden'
},
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})

export default App