 import { NativeStackScreenProps } from '@react-navigation/native-stack';
 
 declare global {
   namespace ReactNavigation {
     interface RootParamList extends RootStackParamList {}
   }
 }
 
 export type RootStackParamList = {
   Home: undefined;
   Touchables: undefined;
   ImagesBackground: undefined;
   Animations: undefined;
 };
 
 export type IParams = {
   route: {
     params: {
       name: string;
     };
   }
 }
 
 export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
   RootStackParamList,
   Screen
 >;