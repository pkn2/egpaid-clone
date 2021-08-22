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
  PermissionsAndroid,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUniqueId, getManufacturer } from "react-native-device-info";
import DeviceInfo from "react-native-device-info";

const screenWidth = Dimensions.get("window").width;
const screenheight = Dimensions.get("window").height;

export async function request_READ_PHONE_STATE() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
      {
        title: "ReactNativeCode wants to READ_PHONE_STATE",
        message: "ReactNativeCode App needs access to your personal data. ",
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Alert.alert("Permission Granted.");
    } else {
      Alert.alert("Permission Not Granted");
    }
  } catch (err) {
    console.warn(err);
  }
}

class Mpin extends React.Component {
  _isMounted = false;
  constructor() {
    super();
    this.state = {
      org_mpin: "",
      enter_mpin: "",

      is_dashbord_screen: false,
      mpin_screen: true,

      apiLevel: "",
      androidId: "",
      appName: "",
      baseOs: "",
      bl: "",
      brand: "",
      buildNumber: "",
      btlo: "",
      carrier: "",
      device: "",
      deviceId: "",
      ip: "",
      mac: "",
      hasNotch: "",
      phoneNumber: "",
      isEmulator: "",
      isCharging: "",
      airplaneModeOn: "",
      uniqueId: "",
      imeiList: "",
    };
  }

  get_IMEI_Number = () => {
    const IMEI = require("react-native-imei");

    if (this.state.apiLevel <= 28) {
      IMEI.getImei().then((imeiList) => {
        console.log(imeiList);
        this.setState({ imeiList: imeiList });
      });
    }
  };

  async componentDidMount() {
    await request_READ_PHONE_STATE();

    this.get_IMEI_Number();

    AsyncStorage.getItem("@setpin").then((value) => {
      this.setState({ org_mpin: value });
      console.log(value);
    });

    DeviceInfo.getApiLevel().then((apiLevel) => {
      this.setState({ apiLevel: apiLevel });
    });

    DeviceInfo.getAndroidId().then((androidId) => {
      this.setState({ androidId: androidId });
    });

    DeviceInfo.getBaseOs().then((baseOs) => {
      this.setState({ baseOs: baseOs });
    });

    DeviceInfo.getBatteryLevel().then((batteryLevel) => {
      this.setState({ bl: batteryLevel });
    });

    DeviceInfo.getBootloader().then((bootloader) => {
      this.setState({ btlo: bootloader });
    });

    DeviceInfo.getCarrier().then((carrier) => {
      this.setState({ carrier: carrier });
    });

    DeviceInfo.getDevice().then((device) => {
      this.setState({ device: device });
    });

    DeviceInfo.getIpAddress().then((ip) => {
      this.setState({ ip: ip });
    });

    DeviceInfo.getMacAddress().then((mac) => {
      this.setState({ mac: mac });
    });

    DeviceInfo.getPhoneNumber().then((phoneNumber) => {
      this.setState({ phoneNumber: phoneNumber });
    });

    if (this.state.apiLevel <= 28) {
      DeviceInfo.getSerialNumber().then((serialNumber) => {
        this.setState({ serialNumber: serialNumber });
      });
    }

    DeviceInfo.isEmulator().then((isEmulator) => {
      this.setState({ isEmulator: isEmulator });
    });

    DeviceInfo.isBatteryCharging().then((isCharging) => {
      this.setState({ isCharging: isCharging });
    });

    DeviceInfo.isAirplaneMode().then((airplaneModeOn) => {
      this.setState({ airplaneModeOn: airplaneModeOn });
    });

    DeviceInfo.syncUniqueId().then((uniqueId) => {
      this.setState({ uniqueId: uniqueId });
    });

    let appName = DeviceInfo.getApplicationName();
    let brand = DeviceInfo.getBrand();
    let buildNumber = DeviceInfo.getBuildNumber();
    let deviceId = DeviceInfo.getDeviceId();
    let hasNotch = DeviceInfo.hasNotch();

    this.setState({
      appName: appName,
      brand: brand,
      buildNumber: buildNumber,
      deviceId: deviceId,
      hasNotch: hasNotch,
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
    const {
      is_dashbord_screen,
      mpin_screen,
      org_mpin,
      appName,
      btlo,
      androidId,
      mac,
      baseOs,
      deviceId,
      hasNotch,
      isCharging,
      phoneNumber,
      uniqueId,
      device,
      ip,
      buildNumber,
      imeiList,
      airplaneModeOn,
      isEmulator,
      carrier,
      brand,
      apiLevel,
      serialNumber,
      bl,
      enter_mpin,
    } = this.state;
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
            <Text
              style={{
                justifyContent: "center",
                textAlign: "center",
                fontSize: 18,
                color: "blue",
              }}
            >
              Api Level : {apiLevel}
            </Text>

            <Text
              style={{
                justifyContent: "center",
                textAlign: "center",
                fontSize: 18,
                color: "blue",
              }}
            >
              Android Id : {androidId}
            </Text>

            <Text
              style={{
                justifyContent: "center",
                textAlign: "center",
                fontSize: 18,
                color: "blue",
              }}
            >
              App Name : {appName}
            </Text>

            <Text
              style={{
                justifyContent: "center",
                textAlign: "center",
                fontSize: 18,
                color: "blue",
              }}
            >
              Base OS : {baseOs}
            </Text>

            <Text
              style={{
                justifyContent: "center",
                textAlign: "center",
                fontSize: 18,
                color: "blue",
              }}
            >
              Battery Level : {bl}
            </Text>

            <Text
              style={{
                justifyContent: "center",
                textAlign: "center",
                fontSize: 18,
                color: "blue",
              }}
            >
              Brand : {brand}
            </Text>
            <Text
              style={{
                justifyContent: "center",
                textAlign: "center",
                fontSize: 18,
                color: "blue",
              }}
            >
              Build Number : {buildNumber}
            </Text>

            <Text
              style={{
                justifyContent: "center",
                textAlign: "center",
                fontSize: 18,
                color: "blue",
              }}
            >
              Boot Loader : {btlo}
            </Text>

            <Text
              style={{
                justifyContent: "center",
                textAlign: "center",
                fontSize: 18,
                color: "blue",
              }}
            >
              Carrier : {carrier}
            </Text>

            <Text
              style={{
                justifyContent: "center",
                textAlign: "center",
                fontSize: 18,
                color: "blue",
              }}
            >
              Device : {device}
            </Text>

            <Text
              style={{
                justifyContent: "center",
                textAlign: "center",
                fontSize: 18,
                color: "blue",
              }}
            >
              Device ID : {deviceId}
            </Text>

            <Text
              style={{
                justifyContent: "center",
                textAlign: "center",
                fontSize: 18,
                color: "blue",
              }}
            >
              IP : {ip}
            </Text>

            <Text
              style={{
                justifyContent: "center",
                textAlign: "center",
                fontSize: 18,
                color: "blue",
              }}
            >
              Mac : {mac}
            </Text>

            <Text
              style={{
                justifyContent: "center",
                textAlign: "center",
                fontSize: 18,
                color: "blue",
              }}
            >
              Phone Number : {phoneNumber}
            </Text>

            <Text
              style={{
                justifyContent: "center",
                textAlign: "center",
                fontSize: 18,
                color: "blue",
              }}
            >
              Serial Number : {serialNumber}
            </Text>

            <Text
              style={{
                justifyContent: "center",
                textAlign: "center",
                fontSize: 18,
                color: "blue",
              }}
            >
              Has Notch : {hasNotch}
            </Text>

            <Text
              style={{
                justifyContent: "center",
                textAlign: "center",
                fontSize: 18,
                color: "blue",
              }}
            >
              Is Emulator : {isEmulator}
            </Text>
            <Text
              style={{
                justifyContent: "center",
                textAlign: "center",
                fontSize: 18,
                color: "blue",
              }}
            >
              Is Charging : {isCharging}
            </Text>

            <Text
              style={{
                justifyContent: "center",
                textAlign: "center",
                fontSize: 18,
                color: "blue",
              }}
            >
              Airplane ModeOn : {airplaneModeOn}
            </Text>

            <Text
              style={{
                justifyContent: "center",
                textAlign: "center",
                fontSize: 18,
                color: "blue",
              }}
            >
              Unique Id : {uniqueId}
            </Text>

            <Text
              style={{
                justifyContent: "center",
                textAlign: "center",
                fontSize: 18,
                color: "blue",
              }}
            >
              IMEI : {imeiList}
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
