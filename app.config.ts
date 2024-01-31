import { ExpoConfig } from 'expo/config';

export default (): ExpoConfig => {

    return {

        "name": "YvonnesStoreManager",
        "slug": "YvonnesStoreManager",
        "version": "1.0.0",
        "orientation": "portrait",
        "icon": "./assets/icon.png",
        "userInterfaceStyle": "light",
        "splash": {
            "image": "./assets/splash.png",
            "resizeMode": "contain",
            "backgroundColor": "#ffffff"
        },
        "assetBundlePatterns": [
            "**/*"
        ],
        "ios": {
            "supportsTablet": true,
            "bundleIdentifier": "com.mansamorpheus.YvonnesStoreManager"
        },
        "android": {
            "adaptiveIcon": {
                "foregroundImage": "./assets/adaptive-icon.png",
                "backgroundColor": "#ffffff"
            },
            "package": "com.mansa_morpheus.YvonnesStoreManager",
            "googleServicesFile": process.env.GOOGLE_SERVICES_JSON
            // "googleServicesFile": "./google-services.json"

        },
        "web": {
            "favicon": "./assets/favicon.png"
        },
        "plugins": [
            "@react-native-firebase/app",
            "@react-native-firebase/perf",
            "@react-native-firebase/crashlytics",
            "@react-native-google-signin/google-signin"
        ],
        "extra": {
            "eas": {
                "projectId": "969ecfac-a6a5-4bb5-9d80-0c6c8cd85048"
            }
        }
    }
}