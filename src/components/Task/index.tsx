import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
type TaskPorps = {
  text: string;
};

export default function Task(props: TaskPorps) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity activeOpacity={0.6} style={styles.square}>
            
        </TouchableOpacity>
        <Text style={styles.itemTextTask}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
    padding:15,
    borderRadius:10,
    backgroundColor:"#FFF",
    marginBottom:10
  },
  itemLeft: {
    alignItems :"center",
    flexDirection:"row",
    gap:10
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor:"#55bcf6",
    opacity:0.8,
    borderRadius:5
  },
  circular: {
    width:12,
    height:12,
    borderRadius:100,
    borderWidth:2,
    borderColor:"#55bcf6"
    
  },
  itemTextTask: {
    maxWidth:"80%"
  },
});
