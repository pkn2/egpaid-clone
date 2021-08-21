import React from "react";
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import Otp_screen_view from "./Otp";
import Splashscreen_component from "./Splash screen";
import Islogin from "./Pin check";
import AsyncStorage from "@react-native-async-storage/async-storage";

const screenWidth = Dimensions.get("window").width;
const screenheight = Dimensions.get("window").height;

class Home extends React.Component {
  _isMounted = false;
  constructor() {
    super();
    this.state = {
      //splash screen
      splash_screen: true,

      //phone number
      ph_no: "",

      // original password
      org_password: "1234",

      enter_password: "", //enter password

      mobile_no_input: true,
      password_input: false,
      Otp_screen: false,

      is_login: false,
    };
  }

  Hide_Splash_Screen = () => {
    this.setState({
      splash_screen: false,
    });
  };

  componentDidMount() {
    setTimeout(() => this.Hide_Splash_Screen(), 3000);

    AsyncStorage.getItem("@is_login").then((value) => {
      let is_log_bool = JSON.parse(value);
      console.log(is_log_bool);

      this.setState({ is_login: is_log_bool });
    });
  }

  handlechanging = (e, state) => {
    this.setState({ [state]: e });
  };

  proceed = () => {
    this.setState({ mobile_no_input: false, password_input: true });
    console.log(this.state.ph_no);
  };

  proceed_after_password = () => {
    const { org_password, enter_password } = this.state;

    if (org_password == enter_password) {
      this.setState({ password_input: false, Otp_screen: true });
    }
  };

  render() {
    const {
      splash_screen,
      ph_no,
      mobile_no_input,
      password_input,
      Otp_screen,
      is_login,
      enter_password,
    } = this.state;
    return (
      <View>
        {splash_screen == true ? (
          <Splashscreen_component />
        ) : (
          <View style={styles.container}>
            {is_login ? (
              <Islogin />
            ) : (
              <View>
                {mobile_no_input ? (
                  <View style={styles.container}>
                    <View style={styles.containercent}>
                      <Image
                        style={styles.stretch}
                        source={require("../asset/egpaid.png")}
                      />

                      <View style={styles.containercent}>
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: "700",
                            paddingBottom: 25,
                          }}
                        >
                          Enter Mobile Number
                        </Text>
                        <TextInput
                          placeholder="Enter a nobile no.."
                          keyboardType="number-pad"
                          value={ph_no}
                          onChangeText={(e) => this.handlechanging(e, "ph_no")}
                          maxLength={10}
                          style={{
                            borderColor: "black",
                            borderWidth: 2,
                            width: screenWidth - 60,
                            borderRadius: 8,
                            height: 50,
                            paddingLeft: 15,
                          }}
                        />

                        <Text style={{ textAlign: "center", padding: 15 }}>
                          Enter your mobile number registered with EgPaid wallet
                          for login
                        </Text>
                      </View>
                    </View>
                    <View style={styles.touchcont}>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={this.proceed}
                      >
                        <Text>PROCEED</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ) : null}
                {password_input ? (
                  <View style={styles.container}>
                    <View style={styles.containercent}>
                      <Image
                        style={styles.stretch}
                        source={require("../asset/egpaid.png")}
                      />

                      <View style={styles.containercent}>
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: "700",
                            paddingBottom: 25,
                          }}
                        >
                          Enter Password
                        </Text>
                        <TextInput
                          placeholder="Enter password"
                          keyboardType="number-pad"
                          value={enter_password}
                          onChangeText={(e) =>
                            this.handlechanging(e, "enter_password")
                          }
                          maxLength={4}
                          style={{
                            borderColor: "black",
                            borderWidth: 2,
                            width: screenWidth - 60,
                            borderRadius: 8,
                            height: 50,
                            paddingLeft: 15,
                          }}
                        />

                        <TouchableOpacity>
                          <Text style={{ textAlign: "center", padding: 15 }}>
                            Forgot Password?
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={styles.touchcont}>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={this.proceed_after_password}
                      >
                        <Text>PROCEED</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ) : null}
                {Otp_screen ? <Otp_screen_view /> : null}
              </View>
            )}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stretch: {
    width: 250,
    height: 200,
    resizeMode: "contain",
  },

  container: {
    flex: 1,
  },
  containercent: {
    paddingTop: 25,
    alignItems: "center",
  },

  touchcont: {
    position: "absolute",
    top: screenheight - 50,
  },
  button: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
    padding: 20,
    width: screenWidth,
  },
});

export default Home;
