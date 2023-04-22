import React, { useEffect, useState, useCallback } from "react";
import {
    Text,
    Pressable,
    StyleSheet,
    SafeAreaView,
    FlatList,
    View,
    RefreshControl,
 } from "react-native";
 import * as SQLite from 'expo-sqlite';
import { MusicDB } from "../data/MusicDB";
export default function Home({navigation}) {
    const [songs, setSongs] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
        
    
// grabs data
//-----------------------------------------------------------------------------
    useEffect(() => {
        const db = SQLite.openDatabase('db.Music');
        db.transaction((tx) => {
        tx.executeSql(
            'SELECT * FROM MUSIC',
            [],
            (_txOBJ, results) => {
            var temp = [];
            for (let i = 0; i < results.rows.length; ++i){
                temp.push(results.rows.item(i));
              }
            setSongs(temp);
            }
        );
        });
    }, []);

// Refreshes the flatlist on pull down
//-----------------------------------------------------------------------------
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        const db = SQLite.openDatabase('db.Music');
        db.transaction((tx) => {
        tx.executeSql(
            'SELECT * FROM MUSIC;',
            [],
            (_txOBJ, results) => {
            var temp = [];
            for (let i = 0; i < results.rows.length; ++i){
                temp.push(results.rows.item(i));
            }
            setSongs(temp);
            setRefreshing(false);
            }
        );
        });
    }, [refreshing]);

// flatlist item
//-----------------------------------------------------------------------------
    const Item = ({item}) => {
        var songTitle = item.songTitle;
        var artist = item.artist
        
        return(
            <View style={styles.row}>
                <Text style={styles.itemText}> {songTitle} - {artist}</Text>
                <Pressable style={styles.deleteButton} onPress={() => DeleteSong(item.id)}>
                    <Text style={styles.deleteButtonText}>Delete</Text>
                </Pressable> 
            </View>
          )
    }
//-----------------------------------------------------------------------------
    const renderItem = ({item}) => {
        return (
          <Item item={item}/>
        )
    }
//-----------------------------------------------------------------------------
    return(
        <SafeAreaView style={styles.safeAreaView}>
            <Pressable style={styles.button} onPress={() => navigation.navigate("Add Song")}>
                <Text style={styles.buttonText}>Add Song</Text>
            </Pressable>
            <FlatList
            style={styles.flatList}
            data={songs}
            keyExtractor={item => item.id}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            ListFooterComponent={() => {
            return(
                <View style={styles.flatListBottom}/>
            )
            }}
            renderItem={renderItem}
            />
        </SafeAreaView>
    )

    function DeleteSong(id){
        const musicDB = new MusicDB();
        musicDB.deleteSong(id);
        navigation.replace("Home");
    }

}
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#FFF5EE',
    borderColor: 'black',
    borderWidth: 1,
    
  },
  itemText: {
    fontWeight: "bold",
    color: 'black',
    fontSize: 18,
    marginTop: 20,
    marginRight: 'auto'
  },
  button: {
    alignSelf: "center",
    backgroundColor: 'orange',
    borderRadius: 20,
    height: 50,
    width: '90%',
    marginBottom: 20,
    marginTop: 20,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 40,
    fontWeight: "bold",
    color: 'black',
    textAlign: "center",
  },
  deleteButton: {
    backgroundColor: 'orange',
    borderRadius: 20,
    width: '20%',
    marginLeft: 60,
    marginTop: 10,
    height: 40,
    justifyContent: "center",


  },
  deleteButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: 'black',
    textAlign: "center",
    alignSelf: 'center',
  },
  flatListBottom: {
    marginBottom: 150,
  },
})