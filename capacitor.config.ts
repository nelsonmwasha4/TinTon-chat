import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tinton.app',
  appName: 'TinTon',
  webDir: 'dist',
  plugins: {
    AdMob: {
      appId: 'ca-app-pub-9121222334567889~1234567890',
    },
  },
};

export default config;
