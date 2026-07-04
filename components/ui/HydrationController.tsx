"use client";

import { useEffect } from 'react';
import { useWaaSStoreBase } from '../../store/waasStore';

export function HydrationController() {
  useEffect(() => {
    useWaaSStoreBase.persist.rehydrate();
  }, []);
  return null;
}
