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
  },
  homeTileParent: {
    flexDirection: "column",
    flex: 6
  },
  HomeTileChild: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  homeTileGrandChild1: {
    backgroundColor: "#00ff9d", //#00ff9d (緑系) #ffb3db (ピンク系)   #00ffff (水色系)
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.7
  },
  homeTileGrandChild2: {
    backgroundColor: "#ffcce6", //#00ffd5 (緑系) #ffcce6 (ピンク系)  #00cc7e (緑水色系)
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.7
  }
});
