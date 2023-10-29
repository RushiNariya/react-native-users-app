import {View, Pressable, Modal, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FilterModal = ({
  visible,
  setVisible,
  modalStyle,
  animationType,
  children,
  isCloseButton = true,
}: any) => {
  return (
    <Modal visible={visible} animationType={animationType} transparent={true}>
      <View style={styles.backdropContainer}>
        <Pressable
          style={styles.backdropView}
          onPress={() => {
            setVisible(false);
          }}>
          <View />
        </Pressable>

        <View style={[styles.mainContainer, modalStyle]}>
          {isCloseButton ? (
            <Pressable
              style={styles.closeButton}
              onPress={() => setVisible(false)}>
              <AntDesign name="close" size={24} color={'#959090'} />
            </Pressable>
          ) : null}

          {children}
        </View>
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
    minWidth: 300,
    minHeight: 300,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  closeButton: {
    // position: 'absolute',
    alignItems: 'flex-end',
    right: 10,
    top: 10,
    width: '100%',
    // backgroundColor: 'red',
  },
});

export default FilterModal;
