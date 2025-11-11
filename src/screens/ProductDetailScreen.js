import React from 'react';
import { View, Text, Image, Pressable, Linking, Alert } from 'react-native';
import { normalizeImageSource, isHttpUrl } from '../utils/images';
import { displayPrice } from '../utils/format';
import InterstitialAdPlaceholder from '../ads/components/InterstitialAdPlaceholder';
import { ADS_CONFIG } from '../ads/config';

export default function ProductDetailScreen({ route }){
  const product = route?.params?.product || {};
  const imageSource = normalizeImageSource(product?.image_url || product?.image);
  const price = displayPrice(product?.price);
  const url = product?.listing_url || product?.url;
  const onBuy = async () => {
    if(!isHttpUrl(url)) { Alert.alert('Link unavailable','This product does not have a valid link yet.'); return; }
    try{ await Linking.openURL(url); }catch(e){ Alert.alert('Could not open link'); }
  };
  return (
    
      
      {imageSource ?  : null}
      {product?.brand_name || product?.brand || 'Brand'} — {product?.product_name || product?.name || 'Product'}
      {price}
      
        Buy Now
      
    
  );
}
