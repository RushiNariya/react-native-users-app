/* eslint-disable react-native/no-inline-styles */
import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import FilterModal from './FilterModal';
import FilterModalSafeAreaView from './FilterModalSafeAreaView';

const SearchModal = ({
  visible,
  setVisible,
  setGender,
  gender,
  setSelectedCountry,
  selectedCountry,
  searchFilter,
}: any) => {
  const countries = [
    'IND',
    'US',
    'PAK',
    'NZ',
    'ENG',
    'UK',
    'SFA',
    'CAD',
    'AUS',
    'NHD',
  ];
  return (
    <FilterModal
      animationType="fade"
      modalStyle={{width: 300, minHeight: 300, maxHeight: '100%'}}
      visible={visible}
      setVisible={setVisible}>
      <View style={{padding: 16}}>
        <View>
          <Text style={styles.filterLabel}>Gender</Text>
          <View style={{flexDirection: 'row', columnGap: 16, marginTop: 5}}>
            {['Male', 'Female'].map(sex => {
              return (
                <Pressable
                  key={sex}
                  style={[
                    styles.filterOptions,
                    {
                      backgroundColor: sex === gender ? '#d7d7d7' : '#fff',
                    },
                  ]}
                  onPress={() => setGender(sex)}>
                  <Text>{sex}</Text>
                </Pressable>
              );
            })}
          </View>
        </View>
        <View style={{marginTop: 16}}>
          <Text style={styles.filterLabel}>Country</Text>
          <View style={styles.countryContainer}>
            {countries.map(country => {
              return (
                <Pressable
                  key={country}
                  onPress={() => {
                    if (selectedCountry.find((item: any) => item === country)) {
                      setSelectedCountry(
                        selectedCountry.filter((item: any) => item !== country),
                      );
                    } else {
                      setSelectedCountry((preData: any) => [
                        ...preData,
                        country,
                      ]);
                    }
                  }}
                  style={[
                    styles.filterOptions,
                    {
                      backgroundColor: selectedCountry.find(
                        (item: any) => item === country,
                      )
                        ? '#d7d7d7'
                        : '#fff',
                    },
                  ]}>
                  <Text>{country}</Text>
                </Pressable>
              );
            })}
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable
            onPress={searchFilter}
            style={({pressed}) => [
              styles.buttonContainer,
              {
                backgroundColor: '#4d85ea',
              },
              pressed && {opacity: 0.5},
            ]}>
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setGender('');
              setSelectedCountry([]);
            }}
            style={({pressed}) => [
              styles.buttonContainer,
              {
                backgroundColor: '#edbc64',
              },
              pressed && {opacity: 0.5},
            ]}>
            <Text style={styles.buttonText}>Clear</Text>
          </Pressable>
        </View>
      </View>
    </FilterModal>
  );
};

const styles = StyleSheet.create({
  filterLabel: {fontSize: 16, fontWeight: '600'},
  filterOptions: {
    padding: 7,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: '#929292',
    backgroundColor: '#fff',
  },
  countryContainer: {
    flexDirection: 'row',
    columnGap: 10,
    rowGap: 16,
    marginTop: 5,
    flexWrap: 'wrap',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
    color: 'white',
  },
  buttonContainer: {
    padding: 7,
    paddingHorizontal: 10,
    backgroundColor: '#4d85ea',
    borderRadius: 5,
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    columnGap: 16,
    marginTop: 16,
  },
});

export default SearchModal;
