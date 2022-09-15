
import React, {useState} from 'react';
 
// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const CustomRatingBar = () => {
    const [defaultRating, setDefaultRating] = useState(2);
    // To set the max number of Stars
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

    // Filled Star. You can also give the path from local
    const starImageFilled =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
    // Empty Star. You can also give the path from local
    const starImageCorner =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

    return (
    <View>
        <Text>Feedback</Text>
        <View style={styles.customRatingBarStyle}>
            {maxRating.map((item, key) => {
                return (
                    <TouchableOpacity
                        activeOpacity={0.7}
                        key={item}
                        onPress={() => setDefaultRating(item)}>
                        <Image
                            style={styles.starImageStyle}
                            source={
                                item <= defaultRating
                                    ? { uri: starImageFilled }
                                    : { uri: starImageCorner }
                            }
                        />
                    </TouchableOpacity>
                );
            })}
        </View>
        </View>
    );
};

export default CustomRatingBar;

const styles = StyleSheet.create({
    customRatingBarStyle: {
      flexDirection: 'row',
      marginTop:5
    },
    starImageStyle: {
      width: 20,
      height: 20,
      resizeMode: 'cover',
    },
  });