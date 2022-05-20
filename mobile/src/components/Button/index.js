import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {theme} from '../../theme';

import {styles} from './styles';

export function Button({isLoading}) {
  return (
    <TouchableOpacity style={styles.container}>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.text_on_brand_color} />
      ) : (
        <Text style={styles.title}>Enviar Feedback</Text>
      )}
    </TouchableOpacity>
  );
}
