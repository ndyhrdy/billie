import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, ScrollView, TextInput} from 'react-native';
import words from 'lodash/words';

export class AddBill extends Component {
  static navigationOptions = {
    title: 'Add a Bill',
  };

  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconInitials}>
              {this.state.name.trim().length > 0
                ? words(this.state.name).map(nameWord => nameWord.substr(0, 1))
                : '?'}
            </Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.nameInput}
            placeholder="this is a bill for..."
            value={this.state.name}
            onChangeText={name => this.setState({name})}
            selectionColor="darkslateblue"
          />
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
    marginBottom: 80 / 2 + 24,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 18,
    bottom: -(80 / 2),
    height: 80,
    justifyContent: 'center',
    left: 18,
    position: 'absolute',
    shadowColor: 'black',
    shadowOffset: {height: 2, width: 0},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    width: 80,
  },
  iconInitials: {
    color: 'lightgray',
    fontSize: 46,
    textAlign: 'center',
  },
  inputContainer: {
    paddingHorizontal: 18,
  },
  nameInput: {
    fontSize: 24,
  },
});
