import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class GridLayout extends Component {
  render() {
  	return (
      <View style={styles.container}>
          <View style={styles.row}>
            <View style={[styles.box, styles.box2]}></View>
            <View style={[styles.box, styles.box3]}></View>
            <View style={[styles.box, styles.two]}></View>
          </View>

          <View style={styles.row}>
            <View style={[styles.box, styles.two]}></View>
            <View style={[styles.box, styles.box2]}></View>
            <View style={[styles.box, styles.box3]}></View>
          </View>

          <View style={styles.row}>
            <View style={[styles.box, styles.box2]}></View>
            <View style={[styles.box, styles.two]}></View>
            <View style={[styles.box, styles.box3]}></View>
          </View>

          <View style={styles.row}>
            <View style={[styles.box, styles.box2]}></View>
            <View style={[styles.box]}></View>
            <View style={[styles.box, styles.box3]}></View>
          </View>

          <View style={styles.row}>
            <View style={[styles.box, styles.box2]}></View>
            <View style={[styles.box]}></View>
          </View>

          <View style={styles.row}>
            <View style={[styles.box]}></View>
          </View>
      </View>
  	);
  }
}


const styles = StyleSheet.create({
  container: { flex: 1 },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
  box: {
    flex: 1,
    height: 100,
    backgroundColor: 'gray',
  },
  box2: { backgroundColor: 'blue' },
  box3: { backgroundColor: 'green' },
  two: { flex: 2 }
});
