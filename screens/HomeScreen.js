import React from "react";
import { Button, View, Text, ImageBackground } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import styles from "../styles.js";

class HomeScreenContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ImageBackground
        source={require("../assets/theStringsOmotesandoh.png")} // {{ uri: "../assets/theStringsOmotesandoh.png" }}
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
        </View>
      </ImageBackground>
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
