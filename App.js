import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, Pressable } from 'react-native';
import HistoryScreen from './src/screens/HistoryScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import AnalysisResultsScreen from './src/screens/AnalysisResultsScreen';
import BannerAdPlaceholder from './src/ads/components/BannerAdPlaceholder';
import { ADS_CONFIG } from './src/ads/config';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
  const sample = { brand_name:'NARS', product_name:'Radiant Creamy Concealer', price:'$32', listing_url:'https://www.sephora.com/product/radiant-creamy-concealer-P377873?skuId=2172310', image_url:'https://www.sephora.com/productimages/sku/s2172310-main-zoom.jpg?imwidth=600' };
  return (
    
      Maatchi
      navigation.navigate('ProductDetail',{ product: sample })} style={{backgroundColor:'#8A7356',paddingVertical:12,paddingHorizontal:16,borderRadius:10}}>
        Open Sample Product
      
      
    
  );
}
function ProUpgrade(){ return (Pro Upgrade (stub)); }
function StoreLocator(){ return (Store Locator (stub)); }
function HistoryDetail(){ return (History Detail (stub)); }

function Tabs(){
  return (
    
      
      
      
      
    
  );
}

const theme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, primary: '#8A7356', background: '#FFFFFF' },
};

export default function App(){
  return (
    
      
        
        
        
        
      
    
  );
}
Fi
