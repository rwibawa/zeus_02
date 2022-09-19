import './shared/device-polyfill'
import { MessageBuilder } from './shared/message'
import { getPackageInfo } from '@zos/app'
import * as ble from '@zos/ble'

App({
  globalData: {
    MessageBuilder: null
  },
  onCreate(options) {
    console.log('app on create invoke');
    const { appId } = getPackageInfo();
    const messageBuilder = new MessageBuilder({ appId, appDevicePort: 0, ble });
    this.globalData.messageBuilder = messageBuilder;
    messageBuilder.connect(); 
  },

  onDestroy(options) {
    console.log('app on destroy invoke');
    this.globalData.messageBuilder && this.globalData.messageBuilder.disConnect();
  }
})
