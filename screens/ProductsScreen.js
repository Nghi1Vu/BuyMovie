import React from 'react';
import { View,Text, StyleSheet, TouchableOpacity, Image, FlatList} from 'react-native';

import { useSelector } from 'react-redux';

const ProductsScreen = (props) => {
    const{categoryId}=props.route.params;
    const avaiProducts= useSelector((state)=>state.filterProducts)
    const products=avaiProducts.filter(item=>item.categoryId===categoryId)
    return(
        <FlatList
        data={products}
        renderItem={({ item }) =>
        <TouchableOpacity 
          onPress={() => props.navigation.navigate('DetailScreen', {productId: item.id})}>
          <View>
            <Image style={{width: 175, height: 300, marginLeft: 20, marginTop: 20,}} source={{uri: item.image}}/>
          </View>
         
            <View>
              <Text style={styles.text}>{item.name}</Text>
            </View> 
            <View>
              <Text style={styles.text1}>Đạo Diễn: {item.daoDien}</Text>
            </View>
            <View>
              <Text style={styles.text2}>Quốc Gia: {item.quocGia}</Text>
            </View>
            <View>
              <Text style={styles.text3}>Năm Sản xuất: {item.nam}</Text>
            </View>
            <View>
             <Text style={styles.text4}>Ngôn Ngữ: {item.ngonNgu}</Text>
           </View>
            <View>
              <Text style={styles.text5}>Thể loại: {item.theLoai}</Text>
            </View>
            <View style={styles.boder}>
              
            </View>
        </TouchableOpacity>
        
        }
        keyExtractor={item => item.id}
        />  
      )
  };
  
const styles = StyleSheet.create({  boder:{
    marginTop: -300,
    marginLeft: 200,
    marginRight: 1,
   
    height: 300,
    borderRadius: 5,
    borderColor:'#000000',
    borderWidth: 2,
   
  },
  text:{
    fontSize: 16,
    marginLeft: 203,
    marginTop: -295,
    color: '	#1E90FF'
  },
  text1:{
    fontSize: 11,
    marginLeft: 205,
    marginTop: -245
  },
  text2:{
    fontSize: 11,
    marginLeft: 205,
    marginTop: -220
  },
  text3:{
    fontSize: 11,
    marginLeft: 205,
    marginTop: -195
  },
  text4:{
    fontSize: 11,
    marginLeft: 205,
    marginTop: -170
  },
  text5:{
    fontSize: 11,
    marginLeft: 205,
    marginTop: -145
  },


});
  export default ProductsScreen;
