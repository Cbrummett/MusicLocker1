import {View, Text, Pressable, StyleSheet, Image } from "react-native";
import React, {useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { MusicDB } from "../data/MusicDB";
import * as Linking from 'expo-linking';

export default function AddSong({navigation}) {
    const [song, setSong] = useState("");
    const [artist, setArtist] = useState("");
    const [message, setMessage] = useState("");

    return (
        <View>
            <Image style={styles.image} source={require("../assets/images/MusicNotes.png")}/>
            <Text style={styles.heading}>Add Song</Text>
            <Text style={styles.message}>{message}</Text>
            <TextInput
               placeholder="Song"
               onChangeText={setSong}
               value={song}
               style={styles.textBox} />
            <TextInput
               placeholder="Artist"
               onChangeText={setArtist}
               value={artist}
               style={styles.textBox} />
            <Pressable style={styles.button} onPress={() => AddSong(song, artist)}>
                <Text style={styles.buttonText}>Add Song</Text>
            </Pressable>
            {/* This is a website URL that open the spotify app (if you put this into safari it will open the app) */}
            <Pressable style={styles.button} onPress={() => Linking.openURL('https://open.spotify.com')}> 
                <Text style={styles.buttonText}>Spotify</Text>
            </Pressable>
        </View>
        
    )

    function AddSong(song, artist) {
        if (song == "" || artist == ""){
            setMessage("Song and Artist are required");
        } else {
            setMessage("");
            const musicDB = new MusicDB();
            musicDB.addSong(song, artist);
            navigation.replace("Home");
        }
    }
}
const styles = StyleSheet.create({
    image: {
        height: 250,
        width: '100%',
    },
    heading: {
        fontSize: 50,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 10,
        textAlign: "center",

    },
    textBox: {
        alignSelf: "center",
        textAlign: "center",
        fontSize: 30,
        borderColor: '#2A4242',
        borderRadius: 30,
        borderWidth: 3,
        width: '80%',
        height: 60,
        marginBottom: 30,
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
        fontSize: 35,
        fontWeight: "bold",
        color: 'black',
        textAlign: "center",
      },
})