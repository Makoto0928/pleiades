import React from "react";
import { Text, View, Button, Modal, Image, CameraRoll } from "react-native";
import { Camera, Permissions } from "expo-camera";
import styles from "../styles";

export default class PhotoTakeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    photo: null
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  setPhoto(photo) {
    this.setState({ photo: photo });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return (
        <View style={styles.container}>
          <Text>NO RESPONSE</Text>
          <Button
            title="HOME"
            onPress={() => this.props.navigation.navigate("Home")}
          />
        </View>
      );
    } else if (hasCameraPermission === false) {
      return (
        <View style={styles.container}>
          <Text>No access to Camera.</Text>
          <Button
            title="HOME"
            onPress={() => this.props.navigation.navigate("Home")}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Camera
            style={styles.cameraView}
            type={this.state.type}
            ref={cam => {
              this.camera = cam;
            }}
          />
          <Button
            style={styles.cameraView}
            title="snap!"
            onPress={photo => {
              if (this.camera) {
                this.camera.takePictureAsync().then(photo => {
                  this.setPhoto(photo);
                  setTimeout(() => {
                    this.setPhoto(null);
                    CameraRoll.saveToCameraRoll(photo.uri);
                  }, 2000);
                });
              }
            }}
          />
          <Modal
            animationType="slide"
            visible={this.state.photo !== null}
            onRequestClose={() => {
              alert("Modal has been closed.");
            }}
          >
            <Image
              style={styles.imageView}
              source={{
                uri: this.state.photo === null ? "" : this.state.photo.uri
              }}
            />
          </Modal>
        </View>
      );
    }
  }
}
