import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { User_SignOut } from "../redux/actions/AuthAction";
import { styles, setting, global } from "../../assets/css/Style";
import { Icon } from "native-base";
import AwesomeAlert from "react-native-awesome-alerts";

class Setting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAlert: false
    };
  }

  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  handleSignOut = async () => {
    await this.props.userSignOut();
    await this.props.navigation.navigate("signOut");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={setting.userTitle}>USER</Text>
        <TouchableOpacity onPress={() => this.showAlert()}>
          <View style={setting.settingBox}>
            <Text style={setting.settingText}>Sign Out</Text>
            <View style={setting.valueBox}>
              <Text style={setting.valueText}>{this.props.username}</Text>
              <Icon style={setting.icon} type="Ionicons" name="md-log-out" />
            </View>
          </View>
        </TouchableOpacity>
        <AwesomeAlert
          show={this.state.showAlert}
          message="Are you sure you want to sign out?"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Cancel"
          confirmText="Yes"
          cancelButtonTextStyle={global.textColor}
          cancelButtonStyle={{backgroundColor:global.badColor, width:75, alignItems:"center"}}
          confirmButtonTextStyle={global.textColor}
          confirmButtonStyle={{backgroundColor:global.headerColor, width:75, alignItems:"center"}}
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.handleSignOut();
          }}
        />
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
