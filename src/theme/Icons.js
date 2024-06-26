import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { SimpleLineIcons } from 'react-native-vector-icons/SimpleLineIcons';
import { View } from 'react-native';
import { Colors } from './color';
import { width } from './style';
import {
  Svg,
  Circle,
  Path,
  G,
  Defs,
  LinearGradient,
  Stop,
  Ellipse,
  Filter,
  FeFlood,
  FeColorMatrix,
  FeBlend,
  FeComposite,
  FeOffset,
  FeGaussianBlur,

} from 'react-native-svg';


export const HomeIcon = (props) => {
  // <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  //   <path d="M6.63478 18.7733V15.7156C6.63478 14.9351 7.27217 14.3023 8.05844 14.3023H10.9326C11.3102 14.3023 11.6723 14.4512 11.9393 14.7163C12.2063 14.9813 12.3563 15.3408 12.3563 15.7156V18.7733C12.3539 19.0978 12.4821 19.4099 12.7124 19.6402C12.9427 19.8705 13.2561 20 13.5829 20H15.5438C16.4596 20.0023 17.3388 19.6428 17.9872 19.0008C18.6356 18.3588 19 17.487 19 16.5778V7.86686C19 7.13246 18.6721 6.43584 18.1046 5.96467L11.434 0.675869C10.2737 -0.251438 8.61111 -0.221498 7.48539 0.746979L0.967012 5.96467C0.372741 6.42195 0.0175523 7.12064 0 7.86686V16.5689C0 18.4639 1.54738 20 3.45617 20H5.37229C6.05123 20 6.603 19.4562 6.60792 18.7822L6.63478 18.7733Z" fill="#D6DBDE" />
  // </svg>
  return (
    <Svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d="M6.63478 18.7733V15.7156C6.63478 14.9351 7.27217 14.3023 8.05844 14.3023H10.9326C11.3102 14.3023 11.6723 14.4512 11.9393 14.7163C12.2063 14.9813 12.3563 15.3408 12.3563 15.7156V18.7733C12.3539 19.0978 12.4821 19.4099 12.7124 19.6402C12.9427 19.8705 13.2561 20 13.5829 20H15.5438C16.4596 20.0023 17.3388 19.6428 17.9872 19.0008C18.6356 18.3588 19 17.487 19 16.5778V7.86686C19 7.13246 18.6721 6.43584 18.1046 5.96467L11.434 0.675869C10.2737 -0.251438 8.61111 -0.221498 7.48539 0.746979L0.967012 5.96467C0.372741 6.42195 0.0175523 7.12064 0 7.86686V16.5689C0 18.4639 1.54738 20 3.45617 20H5.37229C6.05123 20 6.603 19.4562 6.60792 18.7822L6.63478 18.7733Z" fill="#D6DBDE" />
    </Svg>
  )
}

export const DynamicSunIcon = (props) => {
  // <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
  //   <path d="M18.2921 9.8629C18.0674 9.16266 17.8939 6.73327 17.8457 6.10224C17.8032 5.53049 17.9843 5.32478 18.7121 5.22615C19.3555 5.13997 19.6315 5.35567 19.7085 5.91197C19.7967 6.55761 19.6782 9.14244 19.6469 9.64222C19.6171 10.125 19.4588 10.1742 19.0258 10.2398C18.5928 10.3054 18.4045 10.213 18.2921 9.8629Z" fill="#D6DBDE" />
  //   <path d="M25.6985 24.4608C26.2881 24.9001 27.8403 26.7768 28.2461 27.2623C28.6127 27.703 28.5847 27.9757 28.0497 28.4789C27.576 28.9229 27.2261 28.9077 26.8403 28.4996C26.3936 28.0254 24.9887 25.8526 24.724 25.4276C24.4678 25.0173 24.5681 24.8853 24.8824 24.5803C25.1967 24.2753 25.4037 24.2411 25.6985 24.4608Z" fill="#D6DBDE" />
  //   <path d="M13.0266 25.8087C12.6815 26.4581 11.0616 28.2765 10.6431 28.7511C10.2631 29.1803 9.98931 29.1939 9.41115 28.7409C8.90072 28.3397 8.86284 27.9914 9.20778 27.5483C9.60894 27.0349 11.5438 25.3173 11.9238 24.9913C12.2905 24.6759 12.4361 24.7552 12.785 25.0198C13.134 25.2845 13.1992 25.484 13.0266 25.8087Z" fill="#D6DBDE" />
  //   <path d="M19.6113 27.9077C19.8047 28.6172 19.8701 31.0519 19.8903 31.6845C19.9073 32.2575 19.7172 32.455 18.9858 32.5212C18.3392 32.5787 18.073 32.3509 18.0208 31.7918C17.9614 31.1428 18.1945 28.5658 18.2481 28.0679C18.2992 27.5869 18.4596 27.5449 18.895 27.4985C19.3305 27.4522 19.5146 27.5529 19.6113 27.9077Z" fill="#D6DBDE" />
  //   <path d="M27.8729 18.2885C28.5736 18.0657 31.0029 17.8992 31.6339 17.8527C32.2057 17.8118 32.4108 17.9936 32.5073 18.7218C32.5916 19.3657 32.3752 19.6411 31.8188 19.7165C31.1731 19.8029 28.5892 19.677 28.0897 19.6442C27.6071 19.6131 27.5584 19.4546 27.494 19.0213C27.4296 18.5881 27.5226 18.3999 27.8729 18.2885Z" fill="#D6DBDE" />
  //   <path d="M9.83942 19.5865C9.1326 19.7889 6.69951 19.8854 6.06742 19.9137C5.49475 19.9381 5.29492 19.7505 5.21942 19.0198C5.15367 18.3738 5.37795 18.1047 5.93627 18.0453C6.58423 17.9776 9.16338 18.1779 9.6618 18.225C10.1433 18.2701 10.1874 18.4299 10.2393 18.8649C10.2911 19.2998 10.1928 19.4852 9.83942 19.5865Z" fill="#D6DBDE" />
  //   <path d="M12.2005 13.3984C11.5574 13.042 9.76787 11.3902 9.30072 10.9634C8.87834 10.5758 8.86956 10.3018 9.33244 9.73151C9.74235 9.22803 10.0912 9.19621 10.5281 9.54891C11.0343 9.95906 12.7175 11.924 13.0368 12.3097C13.3456 12.682 13.2639 12.8262 12.9932 13.1706C12.7226 13.5149 12.522 13.5766 12.2005 13.3984Z" fill="#D6DBDE" />
  //   <path d="M25.2794 12.3415C25.7419 11.7698 27.6786 10.2935 28.1799 9.90741C28.6347 9.55856 28.906 9.59743 29.3873 10.1523C29.8119 10.6435 29.7827 10.9926 29.3597 11.3618C28.8681 11.7894 26.6414 13.1066 26.2063 13.3542C25.7862 13.5938 25.6583 13.4883 25.3662 13.162C25.0741 12.8357 25.0481 12.6274 25.2794 12.3415Z" fill="#D6DBDE" />
  //   <ellipse cx="18.9245" cy="18.9291" rx="6.9392" ry="6.94087" fill="#D6DBDE" />
  // </svg>
  return (
    <Svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d="M18.2921 9.8629C18.0674 9.16266 17.8939 6.73327 17.8457 6.10224C17.8032 5.53049 17.9843 5.32478 18.7121 5.22615C19.3555 5.13997 19.6315 5.35567 19.7085 5.91197C19.7967 6.55761 19.6782 9.14244 19.6469 9.64222C19.6171 10.125 19.4588 10.1742 19.0258 10.2398C18.5928 10.3054 18.4045 10.213 18.2921 9.8629Z" fill="#D6DBDE" />
      <Path d="M25.6985 24.4608C26.2881 24.9001 27.8403 26.7768 28.2461 27.2623C28.6127 27.703 28.5847 27.9757 28.0497 28.4789C27.576 28.9229 27.2261 28.9077 26.8403 28.4996C26.3936 28.0254 24.9887 25.8526 24.724 25.4276C24.4678 25.0173 24.5681 24.8853 24.8824 24.5803C25.1967 24.2753 25.4037 24.2411 25.6985 24.4608Z" fill="#D6DBDE" />
      <Path d="M13.0266 25.8087C12.6815 26.4581 11.0616 28.2765 10.6431 28.7511C10.2631 29.1803 9.98931 29.1939 9.41115 28.7409C8.90072 28.3397 8.86284 27.9914 9.20778 27.5483C9.60894 27.0349 11.5438 25.3173 11.9238 24.9913C12.2905 24.6759 12.4361 24.7552 12.785 25.0198C13.134 25.2845 13.1992 25.484 13.0266 25.8087Z" fill="#D6DBDE" />
      <Path d="M19.6113 27.9077C19.8047 28.6172 19.8701 31.0519 19.8903 31.6845C19.9073 32.2575 19.7172 32.455 18.9858 32.5212C18.3392 32.5787 18.073 32.3509 18.0208 31.7918C17.9614 31.1428 18.1945 28.5658 18.2481 28.0679C18.2992 27.5869 18.4596 27.5449 18.895 27.4985C19.3305 27.4522 19.5146 27.5529 19.6113 27.9077Z" fill="#D6DBDE" />
      <Path d="M27.8729 18.2885C28.5736 18.0657 31.0029 17.8992 31.6339 17.8527C32.2057 17.8118 32.4108 17.9936 32.5073 18.7218C32.5916 19.3657 32.3752 19.6411 31.8188 19.7165C31.1731 19.8029 28.5892 19.677 28.0897 19.6442C27.6071 19.6131 27.5584 19.4546 27.494 19.0213C27.4296 18.5881 27.5226 18.3999 27.8729 18.2885Z" fill="#D6DBDE" />
      <Path d="M9.83942 19.5865C9.1326 19.7889 6.69951 19.8854 6.06742 19.9137C5.49475 19.9381 5.29492 19.7505 5.21942 19.0198C5.15367 18.3738 5.37795 18.1047 5.93627 18.0453C6.58423 17.9776 9.16338 18.1779 9.6618 18.225C10.1433 18.2701 10.1874 18.4299 10.2393 18.8649C10.2911 19.2998 10.1928 19.4852 9.83942 19.5865Z" fill="#D6DBDE" />
      <Path d="M12.2005 13.3984C11.5574 13.042 9.76787 11.3902 9.30072 10.9634C8.87834 10.5758 8.86956 10.3018 9.33244 9.73151C9.74235 9.22803 10.0912 9.19621 10.5281 9.54891C11.0343 9.95906 12.7175 11.924 13.0368 12.3097C13.3456 12.682 13.2639 12.8262 12.9932 13.1706C12.7226 13.5149 12.522 13.5766 12.2005 13.3984Z" fill="#D6DBDE" />
      <Path d="M25.2794 12.3415C25.7419 11.7698 27.6786 10.2935 28.1799 9.90741C28.6347 9.55856 28.906 9.59743 29.3873 10.1523C29.8119 10.6435 29.7827 10.9926 29.3597 11.3618C28.8681 11.7894 26.6414 13.1066 26.2063 13.3542C25.7862 13.5938 25.6583 13.4883 25.3662 13.162C25.0741 12.8357 25.0481 12.6274 25.2794 12.3415Z" fill="#D6DBDE" />
      <Ellipse cx="18.9245" cy="18.9291" rx="6.9392" ry="6.94087" fill="#D6DBDE" />
    </Svg>
  )
}

export const AddIcon = (props) => {
  // <svg width="179" height="75" viewBox="0 0 179 75" fill="none" xmlns="http://www.w3.org/2000/svg">
  //   <g filter="url(#filter0_dd_317_65421)">
  //     <circle cx="89.5" cy="35.5" r="24.5" fill="url(#paint0_linear_317_65421)" />
  //   </g>
  //   <defs>
  //     <filter id="filter0_dd_317_65421" x="0" y="-63" width="179" height="218" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  //       <feFlood flood-opacity="0" result="BackgroundImageFix" />
  //       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
  //       <feOffset dy="30" />
  //       <feGaussianBlur stdDeviation="32.5" />
  //       <feComposite in2="hardAlpha" operator="out" />
  //       <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
  //       <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_317_65421" />
  //       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
  //       <feOffset dy="-9" />
  //       <feGaussianBlur stdDeviation="32.5" />
  //       <feComposite in2="hardAlpha" operator="out" />
  //       <feColorMatrix type="matrix" values="0 0 0 0 0.486275 0 0 0 0 0.415686 0 0 0 0 0.952941 0 0 0 0.5 0" />
  //       <feBlend mode="normal" in2="effect1_dropShadow_317_65421" result="effect2_dropShadow_317_65421" />
  //       <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_317_65421" result="shape" />
  //     </filter>
  //     <linearGradient id="paint0_linear_317_65421" x1="61.4601" y1="11" x2="118.081" y2="13.4718" gradientUnits="userSpaceOnUse">
  //       <stop stop-color="#FF9901" />
  //     </linearGradient>
  //   </defs>
  // </svg>
  return (
    <Svg width="179" height="75" viewBox="0 0 179 75" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <G filter="url(#filter0_dd_317_65421)">
        <Circle cx="89.5" cy="35.5" r="24.5" fill="url(#paint0_linear_317_65421)" />
      </G>
      <Defs>
        <Filter id="filter0_dd_317_65421" x="0" y="-63" width="179" height="218" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <FeFlood flood-opacity="0" result="BackgroundImageFix" />
          <FeColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha" />
          <FeOffset dy="30" />
          <FeGaussianBlur stdDeviation="32.5" />
          <FeComposite in2="hardAlpha" operator="out" />
          <FeColorMatrix type="matrix" values="0 0 0 0 0.486275 0 0 0 0 0.415686 0 0 0 0 0.952941 0 0 0 0.5 0" />
          <FeBlend mode="normal" in2="SourceGraphic" result="shape" />
        </Filter>
        <LinearGradient id="paint0_linear_317_65421" x1="61.4601" y1="11" x2="118.081" y2="13.4718" gradientUnits="userSpaceOnUse">
          <Stop stop-color="#FF9901" />
        </LinearGradient>
      </Defs>
    </Svg>
  )

}

export const PlusIcon = (props) => {

  return (
    <Entypo name="plus"  {...props} />
  )
}
export const PlusProfile = (props) => {

  return (
    <Feather name="plus-circle"  {...props} />
  )
}

export const CameraIcon = (props) => {

  return (
    <Svg
      width={props.size ? props.size : 24}
      height={props.size ? props.size : 24}
      {...props}
      viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"  >
      <Path d="M16.8434 6.28479C18.9878 4.58479 21.8656 2.94034 22.41 3.52923C23.31 4.4959 23.2323 13.6959 22.41 14.5737C21.91 15.1181 19.01 13.4737 16.8434 11.7848" stroke={props.color || "#000"}
        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M0.933472 9.04298C0.933472 2.9852 2.94569 0.966309 8.98458 0.966309C15.0224 0.966309 17.0346 2.9852 17.0346 9.04298C17.0346 15.0996 15.0224 17.1196 8.98458 17.1196C2.94569 17.1196 0.933472 15.0996 0.933472 9.04298Z" stroke={props.color || "#000"}
        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  )
}
export const NavBack = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{
      width: 30, height: 30, borderRadius: 900, backgroundColor: '#F8F9FA', marginLeft: 20, marginTop: 20, justifyContent: 'center', alignItems: 'center'
    }}>
      <BackIcon size={20} onPress={() => { navigation.goBack() }} color={Colors.textdark}

      />
    </View>
  )
}
export const EyeIcon = (props) => {
  return (
    <Ionicons name="eye" {...props} />
  )
}
export const Tick1 = (props) => {
  return (
    <Ionicons name="checkmark-circle" {...props} />
  )
}
export const Like = (props) => {
  return (
    <AntDesign name="like1" {...props} />
  )
}
export const Pause = (props) => {
  return (
    <AntDesign name="pausecircle" {...props} />
  )
}
export const Play = (props) => {
  return (
    <AntDesign name="play" {...props} />
  )
}
export const Search = (props) => {
  return (
    <Feather name="search" {...props} />
  )
}
export const Pin = (props) => {
  return (
    <MaterialCommunityIcons name="pin-outline" {...props} />
  )
}
export const Like1 = (props) => {
  return (
    <AntDesign name="like1" {...props} />
  )
}
export const Dislike1 = (props) => {
  return (
    <AntDesign name="dislike1" {...props} />
  )
}
export const Ban = (props) => {
  return (
    <FontAwesome name="ban" {...props} />
  )
}
export const Chatbubble = (props) => {
  return (
    <Ionicons name="chatbubble-outline" {...props} />
  )
}
export const Heart = (props) => {
  return (
    <AntDesign name="heart" {...props} />
  )
}
export const Hearto = (props) => {
  return (
    <AntDesign name="hearto" {...props} />
  )
}
export const Home1 = (props) => {
  return (
    <Ionicons name="home" {...props} />
  )
}
export const Plus = (props) => {
  return (
    <Entypo name="plus" {...props} />
  )
}
export const Cross1 = (props) => {
  return (
    <AntDesign name="closesquareo" {...props} />
  )
}
export const Down = (props) => {
  return (
    <AntDesign name="caretdown" {...props} />
  )
}
export const Right = (props) => {
  return (
    <AntDesign name="right" {...props} />
  )
}
export const Send = (props) => {
  return (
    <MaterialIcons name="send" {...props} />
  )
}
export const Link = (props) => {
  return (
    <AntDesign name="link" {...props} />
  )
}
export const WhatsApp = (props) => {
  return (
    <FontAwesome name="whatsapp" {...props} />
  )
}
export const Game = (props) => {
  return (
    <Entypo name="game-controller" {...props} />
  )
}
export const Facebook = (props) => {
  return (
    <Entypo name="facebook" {...props} />
  )
}
export const Threads = (props) => {
  return (
    <Feather name="at-sign" {...props} />
  )
}
export const Shared = (props) => {
  return (
    <Entypo name="share-alternative" {...props} />
  )
}
export const ArrowUp1 = (props) => {
  return (
    <Entypo name="arrow-long-up" {...props} />
  )
}
export const ArrowDown = (props) => {
  return (
    <Entypo name="arrow-long-down" {...props} />
  )
}
export const Circle1 = (props) => {
  return (
    <Entypo name="circle" {...props} />
  )
}
export const Down1 = (props) => {

  return (
    <Feather name="chevron-down" {...props} />
  )
}
export const Unfollow = (props) => {

  return (
    <SimpleLineIcons name="user-unfollow" {...props} />
  )
}
export const Time = (props) => {

  return (
    <MaterialIcons name="access-time" {...props} />
  )
}
export const Bold = (props) => {
  return (
    <FontAwesome name="bold" {...props} />
  )
}
export const Font = (props) => {
  return (
    <FontAwesome name="font" {...props} />
  )
}
export const Paleta = (props) => {
  return (
    <Ionicons name="color-palette-outline" {...props} />
  )
}
export const ArrowRight = (props) => {
  return (
    <AntDesign name="arrowright" {...props} />
  )
}
export const Gif = (props) => {
  return (
    <MaterialCommunityIcons name="file-gif-box" {...props} />
  )
}
export const ImageSimple = (props) => {
  return (
    <Entypo name="image" {...props} />
  )
}
export const Underline = (props) => {
  return (
    <FontAwesome name="underline" {...props} />
  )
}
export const ImageC = (props) => {
  return (
    <Ionicons name="images-outline" {...props} />
  )
}
export const Camera1 = (props) => {
  return (
    <Feather name="camera" {...props} />
  )
}
export const Delete = (props) => {
  return (
    <AntDesign name="delete" {...props} />
  )
}
export const Person1 = (props) => {
  return (
    <Ionicons name="person" {...props} />
  )
}
export const Lock = (props) => {
  return (
    <Ionicons name="lock-closed-outline" {...props} />
  )
}
export const ReportIcon = (props) => {
  return (
    <MaterialIcons name="report-gmailerrorred" {...props} />
  )
}
export const Unlock = (props) => {
  return (
    <Ionicons name="lock-open-outline" {...props} />
  )
}
export const EyeSlashIcon = (props) => {
  return (
    <Ionicons name="eye-off" {...props} />
  )
}
export const Tick = (props) => {
  return (
    <Ionicons name="checkmark-outline" {...props} />
  )
}
export const ArrowUp = (props) => {
  return (
    <AntDesign name="arrowup" {...props} />
  )
}
export const Staro = (props) => {
  return (
    <AntDesign name="staro" {...props} />
  )
}
export const Star = (props) => {
  return (
    <AntDesign name="star" {...props} />
  )
}
export const Bookmark = (props) => {
  return (
    <FontAwesome name="bookmark-o" {...props} />
  )
}
export const Bookmark2 = (props) => {
  return (
    <FontAwesome name="bookmark" {...props} />
  )
}
export const BackIcon = (props) => {
  return (
    <Ionicons name="arrow-back" {...props} />
  )
}
export const Cross = (props) => {
  return (
    <Entypo name="cross" {...props} />
  )
}
export const CrossCircle = (props) => {
  return (
    <Entypo name="circle-with-cross" {...props} />
  )
}
export const Pencil = (props) => {
  return (
    <Entypo name="pencil" {...props} />
  )
}
export const Person = (props) => {
  return (
    <Feather name="user"   {...props} />
  )
}

export const EmailIcon = (props) => {
  return (
    <MaterialIcons name="email" {...props} />
  )

}

export const Retweet = (props) => {
  return (
    <Entypo name="retweet" {...props} />
  )

}


export const PrivacyIcon = (props) => {
  return (
    // <MaterialIcons name="privacy-tip" {...props} />
    <MaterialIcons name="private-connectivity"  {...props} />
  )
}

export const RightIcon = (props) => {
  return (
    <AntDesign name="right"   {...props} />
  )
}

export const ShieldIcon = (props) => {
  return (
    <Ionicons name="shield-checkmark-outline" {...props} />
  )
}

export const QrCodeIcon = (props) => {
  return (
    <MaterialIcons name="qr-code-scanner"   {...props} />
  )
}

export const BellImportantIcon = (props) => {
  return (
    <MaterialIcons name="notification-important"  {...props} />
  )
}

export const LanguageIcon = (props) => {
  return (
    <FontAwesome name="language" {...props} />
  )
}

export const PaperIcon = (props) => {
  return (
    <Ionicons name="newspaper-outline"   {...props} />
  )
}

export const HelpIcon = (props) => {
  return (
    <Feather name="help-circle" {...props} />
  )
}
export const Noti = (props) => {
  return (
    <Ionicons name="notifications-outline"   {...props} />
  )
}

export const SupportAgentIcon = (props) => {
  return (
    <MaterialIcons name="support-agent" {...props} />
  )
}


export const FileTextIcon = (props) => {
  return (
    <AntDesign name="filetext1" {...props} />
  )
}

export const MoonIcon = (props) => {
  return (
    <MaterialIcons name="dark-mode" {...props} />
  )
}
export const Vol = (props) => {
  return (
    <MaterialIcons name="volume-mute" {...props} />
  )
}
export const Mute = (props) => {
  return (
    <MaterialCommunityIcons name="volume-mute" {...props} />
  )
}


export const LogoutIcon = (props) => {
  return (
    <MaterialIcons name="logout"   {...props} />
  )
}

export const DotsThreeVertical = (props) => {
  return (
    <Entypo name="dots-three-vertical"   {...props} />
  )
}