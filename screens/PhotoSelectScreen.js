import React from "react";
import { Modal, Image, ImageBackground, Alert } from "react-native";
import { Container, Header, View, Text, Button, Icon, Fab } from "native-base";
//import { Camera } from "expo-camera";
//import CameraRoll from "@react-native-community/cameraroll";
//import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import Constants from "expo-constants";
import styles from "../styles";
import { AntDesign, Feather } from "@expo/vector-icons";
import axios from "axios";
import photoData from "./../models/PhotoData";

class PhotoTakeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    hasCameraRollPermission: null,
    //hasCameraPermission: null,
    //type: Camera.Constants.Type.back,
    photo: null,
    modalImageViewVisible: false
  };

  // async componentDidMount() {
  //   const { status } = await Permissions.askAsync(Permissions.CAMERA);
  //   this.setState({ hasCameraPermission: status === "granted" });
  // }

  setModalImageViewVisible(visible) {
    this.setState({ modalImageViewVisible: visible });
  }

  componentDidMount() {
    this.getPerMissionAsync();
    console.log("GRANTED");
  }

  getPerMissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      } else {
        this.setState({ hasCameraRollPermission: status === "granted" });
      }
    }
  };

  _takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      quality: 1
    });
    console.log(result);
    MediaLibrary.saveToLibraryAsync(result.uri);
    if (!result.cancelled) {
      this.setState({ photo: result.uri });
      //let decodeData = JSON.stringify(result);
      this.dataPost(result.uri);
      //photoData.uri(result.uri);
      this.props.navigation.navigate("PhotoSubmit");
    }
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false, //true
      //aspect: [16, 9]
      quality: 1
    });
    console.log(result);
    if (!result.cancelled) {
      this.setState({ photo: result.uri });
      this.props.navigation.navigate("PhotoSubmit");
    }
  };

  dataPost = postDataToServer => {
    axios
      .post("http://192.168.11.2:3001", postDataToServer)
      .then(result => {
        console.log(result.data);
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
      });
  };

  setPhoto(photo) {
    this.setState({ photo: photo });
  }

  render() {
    let { photo } = this.state;
    return (
      <Container>
        <ImageBackground
          source={require("../assets/theStringsOmotesandoh3.png")}
          imageStyle={{ resizeMode: "stretch" }}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={styles.container}>
            <Text>Take Photo</Text>
            <Feather
              name="camera"
              size={100}
              color="blue"
              onPress={this._takePhoto}
            ></Feather>
            <Text>Search Photo</Text>
            <AntDesign
              name="picture"
              size={100}
              color="blue"
              onPress={this._pickImage}
            ></AntDesign>
          </View>
        </ImageBackground>
      </Container>
    );
  }

  /* <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalImageViewVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={styles.modal}>
              {photo && (
                <Image source={{ uri: photo }} style={styles.imageView} />
              )}
            </View>
          </Modal> */

  //<Button title="BootCamera" onPress={this._takePhoto} />
  //<Button title="SelectCameraRoll" onPress={this._pickImage} />
  // title="BootCamera"
  // title="SelectCameraRoll"

  // render() {
  //   const { hasCameraPermission } = this.state;
  //   if (hasCameraPermission === null) {
  //     return (
  //       <View style={styles.container}>
  //         <Text>NO RESPONSE</Text>
  //         <Button
  //           title="HOME"
  //           onPress={() => this.props.navigation.navigate("Home")}
  //         />
  //       </View>
  //     );
  //   } else if (hasCameraPermission === false) {
  //     return (
  //       <View style={styles.container}>
  //         <Text>No access to Camera.</Text>
  //         <Button
  //           title="HOME"
  //           onPress={() => this.props.navigation.navigate("Home")}
  //         />
  //       </View>
  //     );
  //   } else {
  //     return (
  //       <View style={styles.container}>
  //         <Camera
  //           style={styles.cameraView}
  //           type={this.state.type}
  //           ref={cam => {
  //             this.camera = cam;
  //           }}
  //         />
  //         <Button
  //           style={styles.cameraView}
  //           title="snap!"
  //           onPress={photo => {
  //             if (this.camera) {
  //               this.camera.takePictureAsync().then(photo => {
  //                 this.setPhoto(photo);
  //                 setTimeout(() => {
  //                   this.setPhoto(null);
  //                   CameraRoll.saveToCameraRoll(photo.uri);
  //                 }, 2000);
  //               });
  //             }
  //           }}
  //         />
  //         <Modal
  //           animationType="slide"
  //           visible={this.state.photo !== null}
  //           onRequestClose={() => {
  //             alert("Modal has been closed.");
  //           }}
  //         >
  //           <Image
  //             style={styles.imageView}
  //             source={{
  //               uri: this.state.photo === null ? "" : this.state.photo.uri
  //             }}
  //           />
  //         </Modal>
  //       </View>
  //     );
  //   }
  // }
}

export default PhotoTakeScreen;
