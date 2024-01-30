import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Path, G, Circle, Defs, ClipPath } from 'react-native-svg';

type IconProps = {
  iconName: string;
  color?: string;
  props?: any;
};
const RenderIcon = ({ iconName, color = '#37C0BE', ...props }: IconProps) => {
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
            fill={color}
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
            fill={color}
          />
        </Svg>
      );
    case 'person':
      return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={12}
          height={14}
          viewBox="0 0 12 14"
          fill="none">
          <Path
            d="M3.857 3.5c0-.58.226-1.137.628-1.547A2.12 2.12 0 016 1.313c.568 0 1.113.23 1.515.64.402.41.628.967.628 1.547a2.21 2.21 0 01-.628 1.547A2.12 2.12 0 016 5.687a2.12 2.12 0 01-1.515-.64A2.21 2.21 0 013.857 3.5zm5.572 0c0-.928-.362-1.819-1.005-2.475A3.393 3.393 0 006 0c-.91 0-1.781.369-2.424 1.025A3.537 3.537 0 002.57 3.5c0 .928.362 1.819 1.005 2.475A3.393 3.393 0 006 7c.91 0 1.781-.369 2.424-1.025A3.537 3.537 0 009.43 3.5zm1.25 9.188H1.322c.238-1.731 1.695-3.063 3.455-3.063h2.448c1.76 0 3.217 1.332 3.456 3.063zm1.321.5c0-2.694-2.137-4.876-4.776-4.876H4.776C2.138 8.313 0 10.495 0 13.189c0 .448.356.812.796.812h10.409c.439 0 .795-.364.795-.812z"
            fill={color}
          />
        </Svg>
      );
    case 'notifications':
      return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={15}
          height={18}
          viewBox="0 0 15 18"
          fill="none">
          <Path
            d="M7.5 0c-.593 0-1.072.503-1.072 1.125v.63c-2.427.404-4.286 2.611-4.286 5.276v1.174a7.261 7.261 0 01-1.466 4.392l-.5.657a.876.876 0 00-.096.893.802.802 0 00.723.478h13.394c.308 0 .59-.186.723-.478a.876.876 0 00-.097-.893l-.499-.654a7.28 7.28 0 01-1.466-4.395V7.031c0-2.665-1.859-4.872-4.286-5.277v-.629C8.572.503 8.092 0 7.5 0zm0 3.375h.268c1.922 0 3.482 1.638 3.482 3.656v1.174a9.05 9.05 0 001.33 4.732H2.42a9.05 9.05 0 001.33-4.732V7.031c0-2.018 1.56-3.656 3.482-3.656H7.5zM9.643 15.75H5.357c0 .598.224 1.17.626 1.593.402.422.948.657 1.517.657.57 0 1.115-.235 1.517-.657a2.31 2.31 0 00.626-1.593z"
            fill="#fff"
          />
        </Svg>
      );
    case 'email':
      return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={12}
          height={9}
          viewBox="0 0 12 9"
          fill="none">
          <Path
            d="M1.5 1.125a.376.376 0 00-.375.375v.518l4.043 3.319a1.311 1.311 0 001.666 0l4.041-3.319V1.5a.376.376 0 00-.375-.375h-9zm-.375 2.348V7.5c0 .206.169.375.375.375h9a.376.376 0 00.375-.375V3.473L7.547 6.206c-.9.739-2.196.739-3.094 0L1.125 3.473zM0 1.5C0 .673.673 0 1.5 0h9c.827 0 1.5.673 1.5 1.5v6c0 .827-.673 1.5-1.5 1.5h-9C.673 9 0 8.327 0 7.5v-6z"
            fill="#1D1D1D"
          />
        </Svg>
      );
    case 'lock':
      return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={11}
          height={14}
          viewBox="0 0 11 14"
          fill="none">
          <G
            clipPath="url(#clip0_160_3323)"
            fill="#000"
            stroke="#000"
            strokeWidth={0.25}
            strokeMiterlimit={10}>
            <Path d="M8.923 5.336H8.85V3.242C8.85 1.463 7.346.015 5.5.015S2.15 1.462 2.15 3.242v2.094h-.073c-1.137 0-2.061.89-2.061 1.986v4.677c0 1.095.924 1.986 2.061 1.986h6.846c1.137 0 2.061-.89 2.061-1.986V7.322c0-1.096-.924-1.986-2.061-1.986zM2.665 3.243c0-1.506 1.272-2.73 2.835-2.73s2.835 1.224 2.835 2.73v2.094h-5.67V3.243zM10.468 12c0 .82-.694 1.489-1.545 1.489H2.077c-.851 0-1.545-.669-1.545-1.489V7.322c0-.82.694-1.489 1.545-1.489h6.846c.851 0 1.545.668 1.545 1.489v4.677z" />
            <Path d="M5.5 8.314c-.77 0-1.398.604-1.398 1.346 0 .743.627 1.347 1.398 1.347.77 0 1.398-.604 1.398-1.347 0-.742-.627-1.346-1.398-1.346zm0 2.196c-.486 0-.881-.381-.881-.85 0-.47.395-.85.881-.85s.881.38.881.85c0 .468-.395.85-.881.85z" />
          </G>
          <Defs>
            <ClipPath id="clip0_160_3323">
              <Path fill="#fff" d="M0 0H11V14H0z" />
            </ClipPath>
          </Defs>
        </Svg>
      );
    case 'google':
      return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none">
          <G clipPath="url(#clip0_160_3340)">
            <Path
              d="M23.828 12.41c0-.955-.08-1.652-.25-2.374H12.423v4.308h6.547c-.132 1.07-.845 2.683-2.43 3.767l-.021.144 3.526 2.67.245.023c2.244-2.025 3.537-5.004 3.537-8.539z"
              fill="#4285F4"
            />
            <Path
              d="M12.424 23.76c3.207 0 5.9-1.032 7.867-2.812l-3.749-2.838c-1.003.684-2.35 1.161-4.118 1.161a7.137 7.137 0 01-6.759-4.824l-.139.012-3.667 2.773-.048.13c1.954 3.793 5.966 6.398 10.613 6.398z"
              fill="#34A853"
            />
            <Path
              d="M5.665 14.447a7 7 0 01-.396-2.296c0-.8.145-1.573.383-2.296l-.007-.153-3.713-2.818-.121.056a11.405 11.405 0 00-1.267 5.211c0 1.87.462 3.638 1.267 5.212l3.854-2.916z"
              fill="#FBBC05"
            />
            <Path
              d="M12.424 5.031c2.23 0 3.735.942 4.593 1.729l3.353-3.2C18.31 1.69 15.63.543 12.424.543 7.777.542 3.764 3.148 1.81 6.94l3.841 2.915a7.166 7.166 0 016.772-4.824z"
              fill="#EB4335"
            />
          </G>
          <Defs>
            <ClipPath id="clip0_160_3340">
              <Path
                fill="#fff"
                transform="translate(.543 .542)"
                d="M0 0H23.2979V23.2979H0z"
              />
            </ClipPath>
          </Defs>
        </Svg>
      );
    case 'facebook':
      return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none">
          <Path
            d="M12 23.84c6.433 0 11.649-5.215 11.649-11.649C23.649 5.758 18.433.542 12 .542 5.566.542.351 5.758.351 12.192.351 18.624 5.566 23.84 12 23.84z"
            fill="#1977F3"
          />
          <Path
            d="M16.535 15.56l.515-3.368h-3.23v-2.186c0-.92.45-1.82 1.899-1.82h1.47V5.32s-1.334-.227-2.609-.227c-2.66 0-4.4 1.612-4.4 4.533v2.567H7.222v3.368h2.958v8.14a11.902 11.902 0 003.64 0v-8.14h2.715z"
            fill="#fff"
          />
        </Svg>
      );
    case 'apple':
      return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={21}
          height={24}
          viewBox="0 0 21 24"
          fill="none">
          <Path
            d="M19.926 18.698c-.353.814-.77 1.564-1.253 2.253-.658.939-1.198 1.589-1.613 1.95-.645.592-1.335.896-2.074.913-.53 0-1.17-.151-1.916-.457-.747-.305-1.434-.456-2.062-.456-.659 0-1.365.15-2.12.456-.757.306-1.367.466-1.833.481-.709.03-1.415-.282-2.12-.937-.45-.393-1.014-1.066-1.688-2.02-.724-1.018-1.319-2.198-1.785-3.544-.499-1.454-.75-2.862-.75-4.225 0-1.562.338-2.908 1.014-4.037A5.943 5.943 0 013.848 6.93a5.708 5.708 0 012.869-.81c.563 0 1.3.175 2.218.517.915.343 1.503.518 1.76.518.193 0 .845-.204 1.952-.61 1.046-.377 1.929-.532 2.652-.471 1.96.158 3.433.93 4.412 2.323-1.753 1.062-2.62 2.55-2.602 4.458.015 1.487.555 2.724 1.614 3.706.48.456 1.017.808 1.614 1.059-.13.375-.266.734-.411 1.08zM15.43 1.008c0 1.166-.425 2.254-1.274 3.26-1.024 1.198-2.262 1.89-3.605 1.78a3.63 3.63 0 01-.027-.441c0-1.119.487-2.316 1.351-3.295.432-.495.981-.907 1.647-1.236.664-.324 1.293-.503 1.884-.534.017.156.024.312.024.467z"
            fill="#000"
          />
        </Svg>
      );
    case 'rightArrow2':
      return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={28}
          height={33}
          viewBox="0 0 28 33"
          fill="none">
          <Path
            d="M27.413 17.957a2.112 2.112 0 000-2.92l-10-10.313a1.96 1.96 0 00-2.832 0 2.112 2.112 0 000 2.92l6.594 6.793H2c-1.106 0-2 .922-2 2.063 0 1.14.894 2.063 2 2.063h19.169l-6.582 6.793a2.111 2.111 0 000 2.92 1.96 1.96 0 002.832 0l10-10.313-.006-.006z"
            fill="#fff"
          />
        </Svg>
      );
    case 'search':
      return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          height={17}
          viewBox="0 0 18 17"
          fill="none"
          {...props}>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.311 14.946a.59.59 0 01-.768 0l-4.377-4.056c-.038-.034-.052-.058-.054-.058 0-.01.016-.115.326-.402.308-.286.42-.3.424-.302a.257.257 0 01.072.051l4.376 4.056a.477.477 0 01.001.71zM1.085 6.156c0-2.84 2.493-5.151 5.559-5.151 3.065 0 5.559 2.31 5.559 5.151 0 2.84-2.495 5.151-5.56 5.151-3.065 0-5.558-2.31-5.558-5.151zm15.993 7.37L12.7 9.468a1.39 1.39 0 00-.318-.22 5.788 5.788 0 00.904-3.093C13.287 2.761 10.306 0 6.643 0 2.98 0 0 2.76 0 6.156c0 3.394 2.98 6.156 6.643 6.156 1.304 0 2.52-.351 3.548-.956.056.085.125.168.208.245l4.378 4.056c.304.284.718.443 1.15.442.433 0 .847-.159 1.15-.442.307-.282.479-.665.477-1.066.002-.4-.17-.783-.476-1.066z"
            fill={color}
          />
        </Svg>
      );
    default:
      return null;
  }
};

export default RenderIcon;
