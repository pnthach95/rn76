import React from 'react';
import {useWindowDimensions} from 'react-native';
import {LinearGradient, Rect, Stop, Svg} from 'react-native-svg';

type Props = React.PropsWithChildren<{width?: number}>;

const CONTENT_HEIGHT = 36;

const PillInforBox = ({children, width}: Props) => {
  const {width: defaultWidth} = useWindowDimensions();
  const width3 = width || (2 * defaultWidth) / 5;

  return (
    <Svg fill="none" height={CONTENT_HEIGHT} width={width3}>
      <Rect
        fill="url(#paint0)"
        height={CONTENT_HEIGHT - 0.3305}
        rx={(CONTENT_HEIGHT - 0.3305) / 2}
        width={width3 - 1.476}
        x="0.737305"
      />
      <Rect
        fill="url(#paint1)"
        height={CONTENT_HEIGHT - 2.5983}
        rx={(CONTENT_HEIGHT - 2.5983) / 2}
        width={width3 - 3.744}
        x="1.87109"
        y="1.13379"
      />
      <Rect
        height={CONTENT_HEIGHT - 2.5983}
        rx={(CONTENT_HEIGHT - 2.5983) / 2}
        stroke="url(#paint2)"
        strokeWidth="0.566952"
        width={width3 - 3.744}
        x="1.87109"
        y="1.13379"
      />
      <Rect
        height={CONTENT_HEIGHT - 2.5983}
        rx={(CONTENT_HEIGHT - 2.5983) / 2}
        stroke="black"
        strokeOpacity="0.2"
        strokeWidth="0.566952"
        width={width3 - 3.744}
        x="1.87109"
        y="1.13379"
      />
      {children}
      <LinearGradient
        gradientUnits="userSpaceOnUse"
        id="paint0"
        x1="62.3211"
        x2="62.3211"
        y1="31.2311"
        y2="-2.34233">
        <Stop stopColor="#0e71b9" />
        <Stop offset="1" stopColor="#71c6e6" />
      </LinearGradient>
      <LinearGradient
        gradientUnits="userSpaceOnUse"
        id="paint1"
        x1="62.2354"
        x2="62.2354"
        y1="29.9777"
        y2="-1.02951">
        <Stop stopColor="#0e71b9" />
        <Stop offset="1" stopColor="#71c6e6" />
      </LinearGradient>
      <LinearGradient
        gradientUnits="userSpaceOnUse"
        id="paint2"
        x1="60.1173"
        x2="60.1173"
        y1="29.2566"
        y2="1.13379">
        <Stop stopColor="#D28574" />
        <Stop offset="1" stopColor="#D9AF3C" />
      </LinearGradient>
    </Svg>
  );
};

export default PillInforBox;
