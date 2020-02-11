import React from "react";
import { Modal, Image, ImageBackground, Alert } from "react-native";
import { Container, Header, View, Text, Button, Icon, Fab } from "native-base";
import styles from "../styles";
import photoData from "./../models/PhotoData";

class PhotoSubmitScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    photo: null
  };

  showPhotoForSubmit() {
    this.setState({ photo: photoData.uri() });
    console.log(photo);
  }

  render() {
    {
      this.showPhotoForSubmit();
    }
    let { photo } = this.state;
    return (
      <Container>
        <View style={styles.container}>
          <Text>yeah!</Text>
          {photo && <Image source={{ uri: photo }} style={styles.imageView} />}
        </View>
      </Container>
    );
  }
}

export default PhotoSubmitScreen;

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
