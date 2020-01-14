import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import HomeEmptyState from '../comps/HomeEmptyState';

export class Home extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    return (
      <Fragment>
        <HomeEmptyState
          onAdd={() => this.props.navigation.navigate('AddBill')}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
