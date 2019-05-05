import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { styles, setting } from "../../assets/css/Style";
import { Icon } from "native-base";

class Setting extends Component {
  static navigationOptions = () => {
    return {
      header: (
        <View style={styles.header}>
          <Text style={styles.headerText}> Settings </Text>
        </View>
      )
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={setting.userTitle}>USER</Text>
        <View style={setting.settingBox}>
          <Text style={setting.settingText}>Logout</Text>
          <View style={setting.valueBox}>
            <Text style={setting.valueText}>hzd.hazard@gmail.com</Text>
            <Icon style={setting.icon} type="Ionicons" name="md-log-out" />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting);
