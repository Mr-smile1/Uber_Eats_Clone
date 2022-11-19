import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from 'react-native-elements'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch, useSelector } from 'react-redux'

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "600",
  },
});

const foods = [
    {
      title: "lasania",
      description: "italian food, very good, very very good, excelent",
      price: "$11.99",
      image: "https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000"
    },
    {
      title: "lasania",
      description: "italian food, very good, very very good, excelent",
      price: "$11.99",
      image: "https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000"
    },
    {
      title: "lasania",
      description: "italian food, very good, very very good, excelent",
      price: "$11.99",
      image: "https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000"
    },
    {
      title: "lasania",
      description: "italian food, very good, very very good, excelent",
      price: "$11.99",
      image: "https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000"
    },
];

export default function MenuItems({ restaurantName }) {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) => 
    dispatch({
      type: "ADD_TO_CART",
      payload: { 
        ... item, 
        restaurantName: restaurantName, 
        checkboxValue: checkboxValue 
      },
    });

const cartItems = useSelector(                                       // gives current items in cart
  state => state.cartReducer.selectedItems.items
);    

const isFoodInCart = (food, cartItems) => (                          // checks if food is in cart and look selected food
  Boolean(cartItems.find(item => item.title === food.title))
)

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index} style={{marginHorizontal: 10, marginVertical: 5}}>
          <View>
            <View style={styles.menuItemStyle}>
              <BouncyCheckbox 
                  iconStyle={{ 
                    borderColor: "green", 
                  }}
                  fillColor="green"
                  onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                  isChecked={isFoodInCart(food, cartItems)}
              />
              <FoodInfo food={food}/>
              <FoodImage food={food}/>
            </View>
          </View>
          <Divider width={.5} orientation="vertical" style={{marginHorizontal: 20}}/>
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: "space-evenly"}}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>   
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        // marginLeft: marginLeft,
      }}
    />
  </View>
);

