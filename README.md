# Maatchi Expo Proto

Minimal Expo (SDK 49 / RN 0.72) app with ads placeholders and CI that publishes an Android debug APK to a GitHub Release, plus a raw mirror for a guaranteed public link.

## Quick start
- Node 18, Java 17, Android Studio/SDK
- npm ci
- npx expo prebuild -p android --non-interactive
- cd android && ./gradlew --no-daemon assembleDebug

## Sanity-test checklist
- Launch app → Home shows 'Maatchi' title and taupe button.
- Tap 'Open Sample Product' → Product Detail shows image, brand + product, and price.
- Interstitial ad placeholder may appear on product open. If not, open the product multiple times (shows every 4th open with a short cooldown). Close button works.
- Go back to Home → Banner ad placeholder visible at the bottom with '~45s' refresh note.
- Navigate to History tab → Shows 'No history yet.' on a fresh install.
- Tap 'Buy Now' on Product → Opens the product URL in the device browser. If the link is invalid, a friendly alert appears.
- Optional: In services/rapidApi.js set RAPID_API_KEY, then test fetches using the provided hosts. Keep keys local.
- Android: After CI runs, download the 'app-debug.apk' from the Release asset or use the raw mirror link.
