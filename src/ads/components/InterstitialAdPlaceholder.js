import React, { useEffect, useState } from 'react';
import { Modal, View, Text, Pressable } from 'react-native';
import { shouldShow, notifyShown } from '../AdsManager';

export default function InterstitialAdPlaceholder({ placementId = 'open_product', every = 4, minIntervalS = 30 }){
  const [visible, setVisible] = useState(false);
  useEffect(()=>{
    if(shouldShow(placementId, { every, minIntervalS })){
      setVisible(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const close = () => { setVisible(false); notifyShown(placementId); };
  return (
    
      
        
          Ad (Placeholder)
          Placement: {placementId} · every {every} opens
          
            Close
          
        
      
    
  );
}
