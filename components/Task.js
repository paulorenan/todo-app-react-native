import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default Task;