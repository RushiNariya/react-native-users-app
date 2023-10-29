import {View, Text, Pressable} from 'react-native';
import React from 'react';

export default function Orders() {
  return (
    <View style={{flex: 1}}>
      <Pressable
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>orders page</Text>
      </Pressable>
    </View>
  );
}
