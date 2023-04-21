import {
    Text,
    Pressable,
    StyleSheet,
    SafeAreaView,
    FlatList,
    View,
    RefreshControl,
 } from "react-native";
export default function Home({navigation}) {
    const songs = [
        { id: 1, songTitle: 'One Kiss', artist: 'Calvin Harris feat Dua Lipa' },
        { id: 2, songTitle: 'One Kiss', artist: 'Calvin Harris feat Dua Lipa' },
        { id: 3, songTitle: 'One Kiss', artist: 'Calvin Harris feat Dua Lipa' },
        { id: 4, songTitle: 'One Kiss', artist: 'Calvin Harris feat Dua Lipa' },
        { id: 5, songTitle: 'One Kiss', artist: 'Calvin Harris feat Dua Lipa' },
        { id: 6, songTitle: 'One Kiss', artist: 'Calvin Harris feat Dua Lipa' },
        { id: 7, songTitle: 'One Kiss', artist: 'Calvin Harris feat Dua Lipa' },
        { id: 8, songTitle: 'One Kiss', artist: 'Calvin Harris feat Dua Lipa' },
        { id: 9, songTitle: 'One Kiss', artist: 'Calvin Harris feat Dua Lipa' },
        { id: 10, songTitle: 'One Kiss', artist: 'Calvin Harris feat Dua Lipa' },
        { id: 11, songTitle: 'One Kiss', artist: 'Calvin Harris feat Dua Lipa' },
        { id: 12, songTitle: 'One Kiss', artist: 'Calvin Harris feat Dua Lipa' },
        { id: 13, songTitle: 'One Kiss', artist: 'Calvin Harris feat Dua Lipa' },
        { id: 14, songTitle: 'One Kiss', artist: 'Calvin Harris feat Dua Lipa' },
        { id: 15, songTitle: 'One Kiss', artist: 'Calvin Harris feat Dua Lipa' },
        { id: 16, songTitle: 'One Kiss', artist: 'Calvin Harris feat Dua Lipa' },
        { id: 17, songTitle: 'One Kiss', artist: 'Calvin Harris feat Dua Lipa' },
        { id: 18, songTitle: 'One Kiss', artist: 'Calvin Harris feat Dua Lipa' },
        { id: 19, songTitle: 'One Kiss', artist: 'Calvin Harris feat Dua Lipa' },
        { id: 20, songTitle: 'One Kiss', artist: 'Calvin Harris feat Dua Lipa' },
        
    ]
    // flatlist item
    //-----------------------------------------------------------------------------
    const Item = ({item}) => {
        var songTitle = item.songTitle;
        var artist = item.artist
        
        return(
            <View style={styles.row}>
                <Text style={styles.itemText}> {songTitle} - {artist}</Text>
                <Pressable style={styles.deleteButton}>
                    <Text style={styles.deleteButtonText}>Delete</Text>
                </Pressable>
                
            </View>
          )
    }

    const renderItem = ({item}) => {
        return (
          <Item item={item}/>
        )
    }

    return(
        <SafeAreaView style={styles.safeAreaView}>
            <Pressable style={styles.button} onPress={() => navigation.navigate("Add Song")}>
                <Text style={styles.buttonText}>Add Song</Text>
            </Pressable>
            <FlatList
            style={styles.flatList}
            data={songs}
            keyExtractor={item => item.id}
            ListFooterComponent={() => {
            return(
                <View style={styles.flatListBottom}/>
            )
            }}
            renderItem={renderItem}
            />
        </SafeAreaView>
    )
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