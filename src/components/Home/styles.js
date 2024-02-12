import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    flexWrap: "wrap",
    // gap:2,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    // alignItems: 'center',
    overflow: "scroll",
  },
  shadow: {
    shadowColor: "#ddd",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },

  box: {
    width: "45%",
    height: "100px",
    // textAlign: "center",
    borderRadius: 10,
    marginLeft: 4,
    marginBottom: 4,
    margintop: 0,
   
    padding: 10,
    
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  bgDark: {
    backgroundColor: "#01497c",
  },
  bgGray: {
    backgroundColor: "#5c677d",
  },
  white: {
    color: "white",
  },
  gray: {
    color: "#979dac",
  },
  active:{
    borderWidth: 1,
    borderColor: 'skyblue',
 
  },
  header: {
    width: "100%",
    height: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#2a6f97",
    // paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 12,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  logo: {
    width: 50,
    height: 50,
  },

  customerDetails: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#f5f5f5",
  },
  textInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    // marginBottom: 10,
    // paddingHorizontal: 10,
    // paddingVertical: 8,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  shipToCheckbox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  shipToText: {
    marginLeft: 10,
  },
  discountInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    backgroundColor: "#f5f5f5",
  },
  discountSymbol: {
    marginLeft: 10,
  },
  addTileButton: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  goToCartButton: {
  
    // padding: 10,
    borderRadius: 5,
    width: "100%",
    height:"10%",
    justifyContent: "center",

    alignItems: "center",
    textAlign:"center",
  },
  navigation: {
    // Navigation styles here
  },
});
