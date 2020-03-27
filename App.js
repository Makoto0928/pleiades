import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "unstated";
import HomeScreen from "./screens/HomeScreen";
import PhotoSelectScreen from "./screens/PhotoSelectScreen";
import PhotoSubmitScreen from "./screens/PhotoSubmitScreen";
import WeddingPamphletScreen from "./screens/WeddingPamphletScreen";
import { Form } from "native-base";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    PhotoSelect: PhotoSelectScreen,
    PhotoSubmit: PhotoSubmitScreen,
    WeddingPamphlet: WeddingPamphletScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider>
        <AppContainer />
      </Provider>
    );
  }
}

// export default createAppContainer(AppNavigator);

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }
