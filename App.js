import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from '@dlwlrma00/react-native-webview-bypass-ssl';
import * as Permissions from 'expo-permissions'






export default class App extends Component {
  permissionFlow = async () => {
    const { status, expires, permissions } = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.AUDIO_RECORDING,Permissions.MEDIA_LIBRARY
    );
    console.log(status)
    if (status !== 'granted') {
      console.log('Hey! You have not enabled selected permissions');
    }

    /*
      Get some data
    */
   
  };
  
  componentDidMount(){
    // this.storeHighScore("1234",80)
     
       this.permissionFlow()
   
   }
  
  
  render() {
    return (
    
     <WebView style={styles.container}
    
    userAgent="Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36"
    originWhitelist={['*']}
    allowsInlineMediaPlayback
    bounces={true}
    source={{
      uri: "https://dewabrata.github.io/cupangdetectionjs/", //URL of your redirect site
    }}
    startInLoadingState
    scalesPageToFit
    javaScriptEnabled={true}
    mediaPlaybackRequiresUserAction={false}
    />
    
    
  
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
