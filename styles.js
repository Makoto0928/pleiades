import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  modal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0, 0.8)",
    alignItems: "center",
    justifyContent: "center"
  },
  cameraView: {
    flex: 1
  },
  imageView: {
    flex: 1,
    width: "100%",
    height: "100%"
  }
});
