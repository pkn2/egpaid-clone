import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Dimensions,
  Alert,
  Image,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import Islogin from "./Pin check";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OTPTextView from "react-native-otp-textinput";

const screenWidth = Dimensions.get("window").width;
const screenheight = Dimensions.get("window").height;

class Otp extends React.Component {
  _isMounted = false;
  constructor() {
    super();
    this.state = {
      // original password
      org_otp: "1122",

      otpInput: "",
      mpin: "",
      is_login: false,

      is_otp: true,
      is_set_password_screen: false,
      is_mpin_screen: false,
    };
  }

  clearText = () => {
    this.otpInput.clear();
  };

  setText = () => {
    this.otpInput.setValue("1234");
  };

  displayData = async () => {
    try {
      let value = AsyncStorage.getItem("@is_login");
      console.log(value);

      if (value !== null) {
        this.setState({ is_login: value });
      }
    } catch (error) {
      Alert(error);
    }
  };

  componentDidMount() {
    this.displayData;
  }

  handlechanging = (e, state) => {
    this.setState({ [state]: e });
  };

  proceed = () => {
    const { org_otp, otpInput } = this.state;
    console.log(otpInput);

    if (org_otp == otpInput) {
      console.log("=");
      this.setState({ is_otp: false, is_set_password_screen: true });
    }
  };

  changeText = (newText) => {
    const { mpin } = this.state;
    this.setState({ mpin: mpin + newText });
    console.log(newText);
  };

  setpin = () => {
    const { mpin, is_login } = this.state;

    this.setState({ is_login: true, is_set_password_screen: false });

    AsyncStorage.setItem("@setpin", mpin);
    AsyncStorage.setItem("@is_login", "true");
  };
  render() {
    const { is_otp, is_set_password_screen, is_mpin_screen, mpin, is_login } =
      this.state;
    return (
      <View style={styles.container}>
        {is_otp ? (
          <View style={styles.containercent}>
            <Image
              style={styles.stretch}
              source={require("../asset/egpaid.png")}
            />

            <View style={styles.containercent}>
              <OTPTextView
                ref={(e) => (this.input1 = e)}
                containerStyle={styles.textInputContainer}
                handleTextChange={(text) => this.setState({ otpInput: text })}
                inputCount={4}
                keyboardType="numeric"
                textInputStyle={styles.roundedTextInput}
              />
              <Button title="clear" onClick={this.clearText} />

              <TouchableOpacity>
                <Text style={{ textAlign: "center", padding: 15 }}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>

              <View style={styles.touchcont}>
                <TouchableOpacity style={styles.button} onPress={this.proceed}>
                  <Text>PROCEED</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={{ textAlign: "center", padding: 15 }}>
                    Resend OTP
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : null}

        {is_set_password_screen ? (
          <View>
            <View
              style={{
                height: screenheight / 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={styles.stretch}
                source={require("../asset/egpaid.png")}
              />

              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "700",
                  fontSize: 20,
                  color: "black",
                  letterSpacing: 18,
                }}
              >
                {mpin}
              </Text>
            </View>

            <View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",

                  height: 70,
                }}
              >
                <TouchableOpacity
                  onPress={() => this.changeText("1")}
                  style={{
                    borderRadius: 50,
                    backgroundColor: "lightgray",
                    width: 50,
                    height: 50,
                    alignSelf: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      fontWeight: "700",
                      fontSize: 20,
                      color: "black",
                    }}
                  >
                    1
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.changeText("2")}
                  style={{
                    borderRadius: 50,
                    backgroundColor: "lightgray",
                    width: 50,
                    height: 50,
                    alignSelf: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      fontWeight: "700",
                      fontSize: 20,
                      color: "black",
                    }}
                  >
                    2
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.changeText("3")}
                  style={{
                    borderRadius: 50,
                    backgroundColor: "lightgray",
                    width: 50,
                    height: 50,
                    alignSelf: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      fontWeight: "700",
                      fontSize: 20,
                      color: "black",
                    }}
                  >
                    3
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  height: 70,
                }}
              >
                <TouchableOpacity
                  onPress={() => this.changeText("4")}
                  style={{
                    borderRadius: 50,
                    backgroundColor: "lightgray",
                    width: 50,
                    height: 50,
                    alignSelf: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      fontWeight: "700",
                      fontSize: 20,
                      color: "black",
                    }}
                  >
                    4
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.changeText("5")}
                  style={{
                    borderRadius: 50,
                    backgroundColor: "lightgray",
                    width: 50,
                    height: 50,
                    alignSelf: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      fontWeight: "700",
                      fontSize: 20,
                      color: "black",
                    }}
                  >
                    5
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.changeText("6")}
                  style={{
                    borderRadius: 50,
                    backgroundColor: "lightgray",
                    width: 50,
                    height: 50,
                    alignSelf: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      fontWeight: "700",
                      fontSize: 20,
                      color: "black",
                    }}
                  >
                    6
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  height: 70,
                }}
              >
                <TouchableOpacity
                  onPress={() => this.changeText("7")}
                  style={{
                    borderRadius: 50,
                    backgroundColor: "lightgray",
                    width: 50,
                    height: 50,
                    alignSelf: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      fontWeight: "700",
                      fontSize: 20,
                      color: "black",
                    }}
                  >
                    7
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.changeText("8")}
                  style={{
                    borderRadius: 50,
                    backgroundColor: "lightgray",
                    width: 50,
                    height: 50,
                    alignSelf: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      fontWeight: "700",
                      fontSize: 20,
                      color: "black",
                    }}
                  >
                    8
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.changeText("9")}
                  style={{
                    borderRadius: 50,
                    backgroundColor: "lightgray",
                    width: 50,
                    height: 50,
                    alignSelf: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      fontWeight: "700",
                      fontSize: 20,
                      color: "black",
                    }}
                  >
                    9
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  height: 70,
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 50,
                    height: 50,
                  }}
                >
                  <Text></Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.changeText("0")}
                  style={{
                    borderRadius: 50,
                    backgroundColor: "lightgray",
                    width: 50,
                    height: 50,
                    alignSelf: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      fontWeight: "700",
                      fontSize: 20,
                      color: "black",
                    }}
                  >
                    0
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    borderRadius: 50,
                    width: 50,
                    height: 50,
                    alignSelf: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <Text style={{ alignSelf: "center" }}>Forgot?</Text>
                </TouchableOpacity>
              </View>

              <View style={{ alignItems: "center" }}>
                <TouchableOpacity style={styles.button} onPress={this.setpin}>
                  <Text>Set Pin</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : null}

        {is_login ? <Islogin /> : null}
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

  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 4,
  },

  container: {
    flex: 1,
  },
  textInputContainer: {
    marginBottom: 80,
  },
  containercent: {
    paddingTop: 25,
    alignItems: "center",
  },

  touchcont: { marginTop: 80 },
  button: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgrey",
    padding: 20,
    width: screenWidth - 50,
  },
});

export default Otp;
