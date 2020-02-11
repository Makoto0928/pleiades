import React from "react";
import { Modal, Image, ImageBackground, Alert } from "react-native";
import { Container, Header, View, Text, Button, Icon, Fab } from "native-base";
import { Subscribe } from "unstated";
import styles from "../styles";
import photoData from "./../models/PhotoData";
import PhotoContainer from "../containers/PhotoContainer";

class PhotoSubmitScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    photo: null
  };

  showPhotoForSubmit(uri) {
    this.setState({ photo: uri });
  }

  render() {
    {
      this.showPhotoForSubmit(uri);
    }
    let { photo } = this.state;
    return (
      <Subscribe to={[PhotoContainer]}>
        {globalState => (
          <Container>
            <View style={styles.container}>
              <Text>yeah!</Text>
              {photo && (
                <Image source={{ uri: photo }} style={styles.imageView} />
              )}
            </View>
          </Container>
        )}
      </Subscribe>
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
