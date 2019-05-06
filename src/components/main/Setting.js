import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { User_SignOut } from "../redux/actions/AuthAction";
import { styles, setting } from "../../assets/css/Style";
import { Icon } from "native-base";

class Setting extends Component {
  handleSignOut = async () => {
    await this.props.userSignOut();
    await this.props.navigation.navigate("signOut");
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={setting.userTitle}>USER</Text>
        <TouchableOpacity onPress={() => this.handleSignOut()}>
          <View style={setting.settingBox}>
            <Text style={setting.settingText}>Logout</Text>
            <View style={setting.valueBox}>
              <Text style={setting.valueText}>{this.props.username}</Text>
              <Icon style={setting.icon} type="Ionicons" name="md-log-out" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  username: state.auth.username
});

const mapDispatchToProps = dispatch => {
  return {
    userSignOut: () => dispatch(User_SignOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting);
