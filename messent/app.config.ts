import { ExpoConfig, ConfigContext } from 'expo/config';
import { config } from 'dotenv';

// Load .env file
config();

export default ({ config: defaultConfig }: ConfigContext): ExpoConfig => ({
  ...defaultConfig,
  name: 'Messent',
  slug: 'messent',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff'
    }
  },
  web: {
    favicon: './assets/icon.png'
  },
  plugins: ['expo-router'],
  scheme: 'messent',
  extra: {
    supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL,
    supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
  }
}); 