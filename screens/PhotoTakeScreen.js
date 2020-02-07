import React from "react";
import { Text, View, Button, Modal, Image } from "react-native";
//import { Camera } from "expo-camera";
import CameraRoll from "@react-native-community/cameraroll";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import styles from "../styles";

class PhotoTakeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    hasCameraRollPermission: null,
    //type: Camera.Constants.Type.back,
    photo: null
  };

  //async componentWillMount() {
  //const { status } = await Permissions.askAsync(Permissions.CAMERA);
  //this.setState({ hasCameraPermission: status === "granted" });
  //}

  componentDidMount() {
    this.getPerMissionAsync();
    console.log("hi");
  }

  getPerMissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      } else {
        this.setState({ hasCameraRollPermission: status === "granted" });
      }
    }
  };

  // async componentDidMount() {
  //   const { status } = await Permissions.askAsync(Permissions.CAMERA);
  //   this.setState({ hasCameraPermission: status === "granted" });
  // }

  _takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      quality: 1
    });
    console.log(result);
    if (!result.cancelled) {
      this.setState({ photo: result.uri });
    }
    CameraRoll.saveToCameraRoll(result.uri); //TODO: Resolve Error FIXME: Modify Libraries dedicated to ios & android. => $ expo eject
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
    }
  };

  setPhoto(photo) {
    this.setState({ photo: photo });
  }

  render() {
    let { hasCameraRollPermission, photo } = this.state;
    return (
      <View style={styles.container}>
        <Text>ImagePickerTest</Text>
        <Button title="BootCamera" onPress={this._takePhoto} />
        <Button title="SelectCameraRoll" onPress={this._pickImage} />
        {
          (hasCameraRollPermission,
          photo && <Image source={{ uri: photo }} style={styles.imageView} />)
        }
      </View>
    );
  }

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
