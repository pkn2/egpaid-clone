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
import AsyncStorage from "@react-native-async-storage/async-storage";

const screenWidth = Dimensions.get("window").width;
const screenheight = Dimensions.get("window").height;

class Mpin extends React.Component {
  _isMounted = false;
  constructor() {
    super();
    this.state = {
      org_mpin: "",
      enter_mpin: "",

      is_dashbord_screen: false,
      mpin_screen: true,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem("@setpin").then((value) => {
      this.setState({ org_mpin: value });
      console.log(value);
    });
  }

  changeText = (newText) => {
    const { enter_mpin } = this.state;
    this.setState({ enter_mpin: enter_mpin + newText });
    console.log(newText);
  };

  check_pin = () => {
    const { org_mpin, enter_mpin } = this.state;

    console.log(org_mpin, enter_mpin);
    if (org_mpin == enter_mpin) {
      this.setState({ is_dashbord_screen: true, mpin_screen: false });
    }
  };

  render() {
    const { is_dashbord_screen, mpin_screen, org_mpin, enter_mpin } =
      this.state;
    return (
      <View style={styles.container}>
        {mpin_screen ? (
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
                {enter_mpin}
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
                <TouchableOpacity
                  style={styles.button}
                  onPress={this.check_pin}
                >
                  <Text>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : null}

        {is_dashbord_screen ? (
          <View>
            <Text style={{ justifyContent: "center", textAlign: "center" }}>
              Dashbord
            </Text>
          </View>
        ) : null}
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

export default Mpin;
