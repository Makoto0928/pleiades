import React from "react";
import { ImageBackground } from "react-native";
import { Container, Header, View, Text, Button, Icon, Fab } from "native-base";
import { AntDesign, Feather } from "@expo/vector-icons";
import styles from "../styles.js";

class HomeScreenContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <Container>
        <ImageBackground
          source={require("../assets/theStringsOmotesandoh3.png")} // {{ uri: "../assets/theStringsOmotesandoh.png" }}
          imageStyle={{ resizeMode: "stretch" }}
          style={{ width: "100%", height: "100%" }} //    resizeMode: 'stretch', ...otherStyles
        >
          <View style={styles.container}>
            <Text>Home Screen</Text>
            <Feather.Button
              name="camera"
              size={25}
              onPress={() => this.props.navigation.navigate("PhotoTake")}
            >
              PhotoScreen
            </Feather.Button>
            <Fab
              active={this.state.active}
              direction="up"
              containerStyle={{}}
              style={{ backgroundColor: "#5067FF" }}
              position="bottomRight"
              onPress={() => this.setState({ active: !this.state.active })}
            >
              <Icon name="share" />
              <Button style={{ backgroundColor: "#34A34F" }}>
                <Icon name="logo-whatsapp" />
              </Button>
              <Button style={{ backgroundColor: "#3B5998" }}>
                <Icon name="logo-facebook" />
              </Button>
              <Button disabled style={{ backgroundColor: "#DD5144" }}>
                <Icon name="mail" />
              </Button>
            </Fab>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

// <Button
//   title="Take a Photo"
//   onPress={() => this.props.navigation.navigate("PhotoTake")}
// />

const HomeScreen = ({ navigation }) => {
  return <HomeScreenContent navigation={navigation} />;
};

export default HomeScreen;

// export default HomeScreen = ({ navigation }) => {
//     render() {
//         return (
//             <ImageBackground
//                 source={{ uri: '../assets/theStringsOmotesandoh.png'}}
//                 style={{ width: '100%', height: '100%' }}
//             ></ImageBackground>
//             <View style={styles.container}>
//               <Text>Home Screen</Text>
//               <Button
//                 title="Go to Details"
//                 onPress={() => navigation.navigate("Details")}
//               />
//             </View>
//           );
//     }
// }
