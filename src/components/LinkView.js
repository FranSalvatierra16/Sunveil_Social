import { Modal, TouchableOpacity, View, } from "react-native";
import { WebView } from 'react-native-webview';
const AdLink = (adVisible) => {
  const adUrl = 'https://www.digitalocean.com/community/tutorials/react-react-native-navigation-es'; // URL de la publicidad

  return (
    <Modal
      visible={adVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={adVisible}
    >
      <TouchableOpacity style={{ width: '100%', height: '100%' }} onPress={!adVisible}>
        <View style={{
          justifyContent: 'center',
          width: '90%',
          borderRadius: 20,
          marginLeft: '5%',
          position: 'absolute',
          top: 100,
          height: 100,
          backgroundColor: 'rgba(217, 217, 217, 0.3)',
          flexDirection: 'column',
          alignItems: 'center',
        }}>


          <View>
            <WebView
              source={{ uri: adUrl }}
              style={{ flex: 1 }}
            />
          </View>

        </View>
      </TouchableOpacity>
    </Modal>

  );
};
export default AdLink
