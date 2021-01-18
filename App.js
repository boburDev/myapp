import React, { useState } from 'react'
import { Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import axios from 'axios'
function App() {
	const defaultImgPath = 'file:///Users/boburmirzo/Library/Developer/CoreSimulator/Devices/7423F334-DD07-4030-916B-74E4453E6734/data/Containers/Data/Application/16374B62-C808-43A5-AECB-D589CD10CD26/Library/Caches/ExponentExperienceData/%2540anonymous%252Fmyapp-826cd0d7-cb33-48d1-9830-bf6725406bb2/ImagePicker/F8B47EC9-D9A3-4CF2-9E75-3DD74593EDBD.jpg'
	
	const [image,setImage] = useState()
	let openImagePickerAsync = async () => {
		let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
		
		if (permissionResult.granted) {
			let pickerResult = await ImagePicker.launchImageLibraryAsync()
			setImage(pickerResult)
		}
	  }

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
			image ? <Image source={{
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
    </SafeAreaView>
  )
}

// openImagePickerAsync()

const styles = ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  authButton: {
	flex: 1,
	alignItems: 'center',
	marginTop:10
  },
  upload: {
	  flex: 3,
  },
  uploadImg: {
	width: 200,
	height: 200,
	borderRadius: 100,
	backgroundColor: '#000',
	overflow: 'hidden'
}
})

export default App