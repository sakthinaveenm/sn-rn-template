import {useEffect, useState} from 'react';
import DeviceInfo from 'react-native-device-info';

function useDeviceInfo() {
  const [deviceInfo, setDeviceInfo] = useState({});

  useEffect(() => {
    async function fetchDeviceInfo() {
      const brand = await DeviceInfo.getBrand();
      const model = await DeviceInfo.getModel();
      const deviceName = await DeviceInfo.getDeviceName();
      const systemName = await DeviceInfo.getSystemName();
      const systemVersion = await DeviceInfo.getSystemVersion();
      const isTablet = await DeviceInfo.isTablet();
      const deviceType = await DeviceInfo.getDeviceType();

      setDeviceInfo({
        brand,
        model,
        deviceName,
        systemName,
        systemVersion,
        isTablet,
        deviceType
      });
    }
    fetchDeviceInfo();
  }, []);

  return deviceInfo;
}

export default useDeviceInfo;
