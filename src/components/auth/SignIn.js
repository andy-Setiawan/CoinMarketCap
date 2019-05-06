import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Icon } from "native-base";
import { styles, signIn, global } from "../../assets/css/Style";
import { connect } from "react-redux";
import { User_SignIn } from "../redux/actions/AuthAction";
import SplashScreen from "react-native-splash-screen";
import AsyncStorage from "@react-native-community/async-storage";
import AwesomeAlert from "react-native-awesome-alerts";

class SignIn extends Component {
  componentDidMount() {
    AsyncStorage.getItem("LoginStatus").then(value =>
      value
        ? (AsyncStorage.getItem("Username").then(name =>
            this.props.userSignIn(name)
          ),
          this.props.navigation.navigate("signIn"))
        : SplashScreen.hide()
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      showAlert:false
    };

    this.handleSignIn = this.handleSignIn.bind(this);
  }

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  handleSignIn = () => {
    this.state.username.match(/.*\S.*/)
      ? (this.props.userSignIn(this.state.username, this.state.password),
        this.props.navigation.navigate("signIn"))
      : this.setState({showAlert:true});
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={signIn.topContainer}>
          <Text style={signIn.welcomeText}>Welcome to CoinCap</Text>
          <Image
            style={signIn.image}
            source={require("../../assets/images/logo.png")}
          />
        </View>
        <View style={signIn.bottomContainer}>
          <Text style={signIn.titleText}>Login to Your Account</Text>
          <View style={signIn.signInBox}>
            <Icon style={signIn.icon} type="Ionicons" name="md-person" />
            <TextInput
              style={signIn.input}
              placeholder="Username"
              placeholderTextColor={global.textInputColor}
              returnKeyType="next"
              onSubmitEditing={() => this.password.focus()}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={username => this.setState({ username })}
            />
          </View>
          <View style={signIn.signInBox}>
            <Icon style={signIn.icon} type="Ionicons" name="md-lock" />
            <TextInput
              style={signIn.input}
              placeholder="Password"
              placeholderTextColor={global.textInputColor}
              returnKeyType="done"
              ref={input => (this.password = input)}
              onSubmitEditing={() => this.handleSignIn()}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              onChangeText={password => this.setState({ password })}
            />
          </View>
          <View style={signIn.signInContainer}>
            <TouchableOpacity onPress={() => this.handleSignIn()}>
              <View style={signIn.signIn}>
                <Text style={signIn.signInText}>Sign In</Text>
                <Icon
                  style={signIn.signInIcon}
                  type="Ionicons"
                  name="md-log-in"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <AwesomeAlert
          show={this.state.showAlert}
          message="Username must not blank"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="OK"
          confirmButtonTextStyle={global.textColor}
          confirmButtonStyle={{backgroundColor:global.headerColor, width:75, alignItems:"center"}}
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userSignIn: username => dispatch(User_SignIn(username))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
