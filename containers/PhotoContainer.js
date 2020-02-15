import { AsyncStorage } from "react-native";
import { Container } from "unstated";

export default class PhotoContainer extends Container {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  setStateAndSave = async updateStates => {
    try {
      for (var k in updateStates) {
        await AsyncStorage.setItem(k, JSON.stringify(updateStates[k]));
      }
      this.setState(updateStates);
    } catch (error) {
      console.log("strage error");
    }
  };

  laodPhoto = async () => {
    try {
      const value = await AsyncStorage.getItem("data");
      if (value !== null) {
        this.setState({ data: JSON.parse(value) });
      } else {
        this.setState({ data: this.getEmptyData() });
      }
    } catch (error) {
      console.log("Strage error");
    }
  };

  getEmptyData() {
    return {
      uri: []
    };
  }
}
