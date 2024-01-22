import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';

type IconProps = {
  iconName: string;
  color?: string;
};
const RenderIcon = ({ iconName }: IconProps) => {
  switch (iconName) {
    case 'share':
      return <Ionicons name="share-social" size={24} color="#37C0BE" />;
    case 'save':
      return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={15}
          height={19}
          viewBox="0 0 15 19"
          fill="none">
          <Path
            d="M12.857 0H2.143C.964 0 0 .95 0 2.111V19l7.5-3.167L15 19V2.111C15 .95 14.036 0 12.857 0zm0 15.833l-5.357-2.3-5.357 2.3V3.167c0-.58.482-1.056 1.071-1.056h8.572c.589 0 1.071.475 1.071 1.056v12.666z"
            fill="#37C0BE"
          />
        </Svg>
      );
    case 'rightArrow':
      return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={10}
          height={16}
          viewBox="0 0 10 16"
          fill="none">
          <Path
            d="M.415 13.405L5.91 7.91.415 2.412a1.41 1.41 0 010-1.998 1.41 1.41 0 011.997 0l6.503 6.503a1.41 1.41 0 010 1.997l-6.503 6.503a1.41 1.41 0 01-1.997 0c-.539-.553-.553-1.46 0-2.012z"
            fill="#fff"
          />
        </Svg>
      );
    default:
      return null;
  }
};

export default RenderIcon;