import {
    Platform,
  } from "react-native";
  import * as SQLite from 'expo-sqlite';
  
  export class MusicDB {
      constructor(){
          this.musicDB = this.openDatabase();
      }
//------------------------------------------------------------------------------------------------- 
      openDatabase() {
        if (Platform.OS === "web") {
          return {
            transaction: () => {
              return {
                executeSql: () => {},
              };
            },
          };
        }
      
        const db = SQLite.openDatabase('db.Music');
        return db;
      }
//--------------------------------------------------------------------------------------------------    
      createMusicTable () {
        this.musicDB.transaction(tx => {
          //tx.executeSql('DROP TABLE MUSIC;');
          tx.executeSql(
            'CREATE TABLE IF NOT EXISTS MUSIC (id INTEGER PRIMARY KEY AUTOINCREMENT, songTitle TEXT, artist TEXT);'
          );
        });
      };
//--------------------------------------------------------------------------------------------------  
      addSong (songTitle, artist) {
        this.musicDB.transaction((tx) => {
          tx.executeSql("INSERT INTO MUSIC (songTitle, artist) values (?, ?)", [songTitle, artist]);
          tx.executeSql('SELECT * FROM MUSIC', [],
           (_txOBJ, { rows: {_array} }) => 
            console.log(_array)
          );
        },
        null,
        null
        );
      };

      deleteSong (id) {
        this.musicDB.transaction((tx) => {
            tx.executeSql("DELETE FROM MUSIC WHERE id = ? ", [id]);
            tx.executeSql("SELECT * FROM MUSIC", [],
                (_txOBJ, { rows: {_array} }) =>
                console.log(_array)
                );
        },
        null,
        null
        );
        };
    }
    