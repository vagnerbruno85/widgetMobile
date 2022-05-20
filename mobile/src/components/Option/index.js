import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';

import {styles} from './styles';

export function Option({image, title}) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
