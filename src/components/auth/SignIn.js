import React, { Component } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from "react-native";
import { Icon } from "native-base";
import { styles, signIn } from "../../assets/css/Style";
import { connect } from "react-redux";
import { User_SignIn } from "../redux/actions/AuthAction";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSignIn = this.handleSignIn.bind(this)
  }

  handleSignIn = () => {
    this.props.userSignIn(this.state.username, this.state.password);
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
              placeholderTextColor="#868b93"
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
              placeholderTextColor="#868b93"
              returnKeyType="done"
              ref={input => (this.password = input)}
              onSubmitEditing={()=>this.handleSignIn()}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              onChangeText={password => this.setState({ password })}
            />
          </View>
          <View style={signIn.signInContainer}>
            <TouchableOpacity onPress={()=>this.handleSignIn()}>
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
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userSignIn: (username, password) => dispatch(User_SignIn(username, password))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
