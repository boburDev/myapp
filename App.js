import React from 'react'
import { Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

function App() {

	let openImagePickerAsync = async () => {
		let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
		
		if (permissionResult.granted === false) {
		  alert("Permission to access camera roll is required!")
		  return
		}
		let pickerResult = await ImagePicker.launchImageLibraryAsync()
		console.log(pickerResult)
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
        <Image source={{
			uri: 'https://picsum.photos/200'
		}}
		style={{
			width:200,
			height:200
		}}
		/>
	</View>
		<TouchableOpacity
			onPress={()=>{
				console.log('Edited')
			}}
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