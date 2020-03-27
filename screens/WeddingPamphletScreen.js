import React from "react";
import { ImageBackground } from "react-native";
import { WebView } from "react-native-webview";
import { Container, Header, View, Text, Button, Icon, Fab } from "native-base";
import { AntDesign, Feather } from "@expo/vector-icons";
import styles from "../styles.js";

//TODO : need to build PDF Viewer
const PdfReader = ({ url: uri }) => <WebView style={{ flex: 1 }} source={{ uri }} />

class WeddingPamphletScreen extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <View style={styles.container}>
                <PdfReader url="https://www.sun-ray.co.jp/temporary/place_shiunkaku_pdf/140514041111253731pdf1.pdf" />
            </View>
        );
    }
}

//<WebView source={{uri: pdf.uri}} />

export default WeddingPamphletScreen;