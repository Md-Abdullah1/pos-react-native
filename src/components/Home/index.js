import React from "react";
import {
  Text,

  // Button,
  // List,
  // ListItem,
  // Left,
  // Right,
  // Body,
  View,
} from "native-base";
import { TouchableOpacity } from "react-native";
import styles from "./styles";
import {
  FontAwesome5,
  AntDesign,
  Fontisto,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  // const navigation = useNavigation();

  // const handleGoToCart = () => {
  //   navigation.goBack();
  // };
  return (
    <View style={[styles.container]}>
      <View style={[styles.header, styles.shadow]}>
        <Text style={styles.headerText}>Promode Agro Farms</Text>
        {/* <Image source={require('./your_logo.png')} style={styles.logo} /> */}
        {/* <Fontisto name="search" size={20} color="#fff" /> */}

      </View>

      <View style={[styles.box, styles.bgDark]}>
        <FontAwesome5 name="user-alt" size={18} color="skyblue" />
        <TouchableOpacity
          style={[]}
          // onPress={handleAddTile}
        >
          <Text style={[styles.white]}>Add Customer</Text>
        </TouchableOpacity>
      </View>
      {/* <Ionicons name="person-add" size={24} color="black" /> */}

      <View style={[styles.box, styles.bgDark]}>
        <AntDesign name="plus" size={18} color="skyblue" />
        <Text style={[{ textAling: "center" }, styles.white]}>
          Add custom sale
        </Text>
      </View>

      <View style={[styles.box, styles.bgGray]}>
        <FontAwesome5 name="percent" size={18} color="#979dac" />
        <Text style={[{ textAling: "center" }, styles.gray]}>
          Apply discount
        </Text>
      </View>

      <View style={[styles.box, styles.bgGray, ,]}>
      <Fontisto name="shopping-basket" size={18} color="#979dac" />
        <Text style={[styles.addButtonText, styles.gray]}>
          Ship tooo customer
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.box, styles.active, { alignSelf: "flex-start" }]}
        // onPress={handleAddTile}
      >

      <AntDesign name="plus" size={20} color="skyblue" />
        <Text style={[, { color: "skyblue" }]}>Add tile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.goToCartButton, styles.bgGray]}
        // onPress={handleGoToCart}
      >

        <Text style={{ fontWieght: "bold",fontSize:20 ,color: "skyblue" }}>Go to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
