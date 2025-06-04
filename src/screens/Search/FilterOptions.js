// import { View, Text, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { useNavigation } from '@react-navigation/native';
// import Villa from './Villa'; 
// import Apartment from './Apartment';
// import { styles } from '../Search/FilterStyles'

// const Filter = () => {
//   const navigation = useNavigation();
//   return (
//     <View style={styles.container}>
//       <View style={styles.headerContainer}>
//         {/* <Text style={styles.headerText}>Select Home Type</Text>  */}
//         <TouchableOpacity
//           onPress={() => navigation.navigate('Villa')}

//         >
//           <Text style={styles.homeTypeButton}>
//             Villa
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => navigation.navigate('Apartment')}

//         >
//           <Text style={styles.homeTypeButton}>
//             Apartment
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View >
//   )
// }

// export default Filter;

import { View, Text } from 'react-native'
import React from 'react'

const FilterOptions = () => {
  return (
    <View>
      <Text>FilterOptions</Text>
    </View>
  )
}

export default FilterOptions