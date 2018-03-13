import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  Image,
  View,
  Model
} from 'react-vr';

export default class Storyroom extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('forrest-world.jpg')}/>
        <Image source={asset('wappen.png')}
          style={{
            width: 1,
            height: 1,
            layoutOrigin: [0.5, 0.5],
            transform: [{translate: [0.08, 0, -12]}],
          }}
        />
        <Model
          source={{
            obj: asset("Deer.obj")
          }}
          style={{
            transform: [{translate: [1.5, -1, 3]}, {rotateY : 160}]
          }}
          texture={
            asset("Diffuse.jpg")
          }
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('Storyroom', () => Storyroom);
