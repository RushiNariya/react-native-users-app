import {
  View,
  Text,
  Pressable,
  Modal,
  Dimensions,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FilterModalSafeAreaView = ({visible, setVisible}: any) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.backdropContainer}>
        <Pressable
          style={styles.backdropView}
          onPress={() => {
            setVisible(false);
          }}>
          <View />
        </Pressable>
        <SafeAreaView
          style={{
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}>
          <View style={styles.mainContainer}>
            <Pressable
              style={styles.closeButton}
              onPress={() => setVisible(false)}>
              <AntDesign name="close" size={24} color={'#959090'} />
            </Pressable>
            <Text>Modal</Text>
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdropContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdropView: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {position: 'absolute', right: 10, top: 10},
});

export default FilterModalSafeAreaView;
