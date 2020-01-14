import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';

export class AddBill extends Component {
  static navigationOptions = {
    title: 'Add a Bill',
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.icon}></View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddBill);

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'darkslateblue',
    height: 100,
  },
  icon: {
    backgroundColor: 'white',
    borderRadius: 8,
    bottom: -(80 / 2),
    height: 80,
    left: 18,
    position: 'absolute',
    shadowColor: 'black',
    shadowOffset: {height: 2, width: 0},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    width: 80,
  },
});
