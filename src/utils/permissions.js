import { Platform } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const getPermissions = () => {
  if (Platform.OS === 'android') {
    return [
      PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      PERMISSIONS.ANDROID.READ_CONTACTS,
    ];
  }

  return [
    PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    PERMISSIONS.IOS.CONTACTS,
    PERMISSIONS.IOS.PHOTO_LIBRARY,
  ];
};

export const checkPermissions = async () => {
  const permissions = getPermissions();

  let allGranted = true;

  for (let perm of permissions) {
    const status = await check(perm);

    console.log('Permission:', perm, 'Status:', status);

    if (
      status !== RESULTS.GRANTED &&
      status !== RESULTS.LIMITED   // ✅ IMPORTANT (iOS fix)
    ) {
      allGranted = false;
    }
  }

  return allGranted;
};

export const requestPermissions = async () => {
  const permissions = getPermissions();

  let allGranted = true;

  for (let perm of permissions) {
    const status = await request(perm);

    console.log('Requested:', perm, 'Status:', status);

    if (
      status !== RESULTS.GRANTED &&
      status !== RESULTS.LIMITED
    ) {
      allGranted = false;
    }
  }

  return allGranted;
};