/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import UserItem from '../components/userItem';
import Saperator from '../components/Saperator';
import {useDispatch, useSelector} from 'react-redux';
import {selectUsers} from '../redux/users/selector';
import {addFavoriteUser, fetchUsersThunkAction} from '../redux/users/action';
import {AppDispatch} from '../redux/store';
import SearchModal from '../components/SearchModal';

export default function Users() {
  const [search, setSearch] = useState('');
  const [visible, setVisible] = useState(false);
  const [page, setPage] = useState(1);
  const [gender, setGender] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<Array<string>>([]);

  const {users: data, loading, error} = useSelector(selectUsers);
  const dispatch: AppDispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchUsersThunkAction(page));
  }, [page]);

  const addToFavoriteHandler = (email: string) => {
    const newData = [
      ...data.map((user: any) => {
        if (user.email === email) {
          return {
            ...user,
            isFavorite: !user.isFavorite,
          };
        }
        return user;
      }),
    ];

    dispatch(addFavoriteUser(newData));
  };

  const searchFilter = () => {
    setVisible(false);
    const params = {
      gender,
      countries: selectedCountry.join(','),
    };
    dispatch(fetchUsersThunkAction(page));
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.search}
            placeholder="search here"
            value={search}
            onChangeText={setSearch}
          />
          {search ? (
            <Pressable
              style={{position: 'absolute', right: 5, top: 15}}
              onPress={() => setSearch('')}>
              <AntDesign name="close" size={24} color={'#959090'} />
            </Pressable>
          ) : null}
        </View>
        <View style={styles.filterBox}>
          <Pressable onPress={() => setVisible(true)} style={{}}>
            <AntDesign color={'#959090'} name="bars" size={30} />
          </Pressable>
        </View>
      </View>

      <SearchModal
        visible={visible}
        setVisible={setVisible}
        setGender={setGender}
        setSelectedCountry={setSelectedCountry}
        gender={gender}
        searchFilter={searchFilter}
        selectedCountry={selectedCountry}
      />

      {loading && data.length === 0 ? (
        <View style={styles.userListContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <>
          {error ? (
            <View style={styles.userListContainer}>
              <Text>{error}</Text>
            </View>
          ) : (
            <View style={styles.userListContainer}>
              <View>
                <FlatList
                  data={[...data]}
                  renderItem={({item}) => (
                    <UserItem
                      user={item}
                      addToFavoriteHandler={addToFavoriteHandler}
                    />
                  )}
                  keyExtractor={item => {
                    return `${item.email}`;
                  }}
                  onEndReached={() => {
                    setPage(page + 1);
                  }}
                  ItemSeparatorComponent={() => <Saperator />}
                  showsVerticalScrollIndicator={false}
                />
                {loading ? (
                  <View style={{flex: 1, marginTop: 10}}>
                    <ActivityIndicator size="large" color="#959090" />
                  </View>
                ) : null}
              </View>
            </View>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: '#fdfafa',
  },
  userListContainer: {
    marginTop: 32,
    flex: 5,
    paddingHorizontal: 16,
  },
  searchBox: {
    flex: 0.3,
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchBar: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#959090',
    flex: 1,
    borderRadius: 6,
    height: 50,
    marginTop: 8,
    marginRight: 16,
    paddingHorizontal: 16,
    fontSize: 18,
  },
  search: {
    flex: 1,
    borderRadius: 6,
    height: 50,
    fontSize: 18,
  },
  filterBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
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
});
