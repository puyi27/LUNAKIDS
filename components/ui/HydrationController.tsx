"use client";

import { useSyncExternalStore } from 'react';
import { useWaaSStoreBase } from '../../store/waasStore';

export function HydrationController() {
  useSyncExternalStore(
    () => () => {},
    () => {
      useWaaSStoreBase.persist.rehydrate();
      return true;
    },
    () => false
  );
  return null;
}
