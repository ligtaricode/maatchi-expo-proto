import React, { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';

export default function BannerAdPlaceholder({ placementId = 'home_bottom', refreshIntervalS = 45 }){
  const [tick, setTick] = useState(0);
  const timerRef = useRef(null);
  useEffect(()=>{
    timerRef.current = setInterval(()=>setTick(t=>t+1), Math.max(10, refreshIntervalS) * 1000);
    return ()=>{ if(timerRef.current) clearInterval(timerRef.current); };
  }, [refreshIntervalS]);
  return (
    
      Ad (Placeholder)
      Placement: {placementId} · refresh ~{refreshIntervalS}s
    
  );
}
