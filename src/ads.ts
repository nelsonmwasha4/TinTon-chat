import { AdMob, BannerAdSize, BannerAdPosition } from '@capacitor-community/admob';

const AD_UNIT_ID = 'ca-app-pub-9121222334567889/1234567890';

export async function showRealAd() {
  try {
    await AdMob.initialize();
    await AdMob.showBanner({
      adId: AD_UNIT_ID,
      adSize: BannerAdSize.BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 0,
      isTesting: false,
    });
  } catch (e) {
    console.log('AdMob:', e);
  }
}
