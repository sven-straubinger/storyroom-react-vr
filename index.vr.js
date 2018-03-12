import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  Image,
  View,
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('forrest-world.jpg')}/>

        <Image source={asset('wappen.png')}
          style={{
            width: 1,
            height: 1,
            layoutOrigin: [0.5, 0.5],
            transform: [{translate: [0, 0, -5]}],
          }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
