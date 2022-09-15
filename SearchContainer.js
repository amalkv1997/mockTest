import { Component } from "react";
import { TextInput,StyleSheet } from "react-native";
import { ScreenWidth } from "../helper/screenHelper";


class SearchContainer extends Component {

    render() {
        return (

            <TextInput
                style={styles.input}
                onChangeText={this.props.SearchChange}
                value={this.props.filter}
                placeholder="Search"
            />
        )
    }

}

const styles = StyleSheet.create({
    input: {
      height: 40,
      marginTop: 15,
      marginBottom:10,
      alignSelf: 'center',
      borderWidth: 1,
      width:(ScreenWidth)-40
    },
  });
  
  export default SearchContainer;