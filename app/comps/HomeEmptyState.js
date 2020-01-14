import React from 'react';
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const HomeEmptyState = props => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>No bills yet</Text>
        <Text style={styles.text}>(We guess that's a good thing?)</Text>

        <TouchableOpacity style={styles.btn} onPress={props.onAdd}>
          <Text style={styles.btnText} numberOfLines={1}>
            Add a Bill
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeEmptyState;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: Dimensions.get('screen').height * (1 / 3),
  },
  heading: {
    color: '#333',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  text: {
    color: '#999',
    textAlign: 'center',
  },
  btn: {
    alignItems: 'center',
    borderRadius: 36 / 2,
    borderColor: '#ccc',
    borderWidth: 0.5,
    height: 36,
    justifyContent: 'center',
    marginTop: 24,
    paddingHorizontal: 24,
  },
  btnText: {
    color: '#333',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
