import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Task = (props) => {
  const [click, setClick] = useState(false);
  const [icon, setIcon] = useState('');

  useEffect(() => {
    if(click) {
      setIcon('check');
    } else {
      setIcon('');
    }
  }, [click]);

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square} onPress={() => setClick(!click)}>
          <Icon name={icon} size={20} color="green" />
        </TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.itemRight}>
        <TouchableOpacity onPress={() => props.delete(props.index)}>
          <Icon name="delete" size={26} color="red"/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    maxWidth: '78%',
  },
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default Task;