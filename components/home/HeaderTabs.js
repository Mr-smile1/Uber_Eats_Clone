
// header of home screen

import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTabs(props) {
    return (
        <View style={{flexDirection: "row", alignSelf: "center"}}>
            <HeaderButton 
                text="Delivery" 
                btncolor="black" 
                textColor="white" 
                activeTab={props.activeTab} 
                setActiveTab={props.setActiveTab}
            />
            <HeaderButton 
                text="Pick-Up" 
                btncolor="white" 
                textColor="black"
                activeTab={props.activeTab} 
                setActiveTab={props.setActiveTab}
            />
        </View>
    )
}

const HeaderButton = (props) => (
    <TouchableOpacity style={{
        backgroundColor: props.activeTab === props.text ? "black" : "white",
        paddingVertical: 6, 
        paddingHorizontal: 16, 
        borderRadius: 30,
        }}
        onPress={() => props.setActiveTab(props.text)} 
    >
        <Text 
            style={{ 
                color: props.activeTab === props.text ? "white" : "black",
                fontize: 15,  
                fontWeight: "bold",
        }}
        > 
            {props.text} 
        </Text>
    </TouchableOpacity>
);