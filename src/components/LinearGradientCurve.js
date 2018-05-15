import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

export default class LinearGradientCurve extends Component {
  render() {
    const {
      gradientFirstColor, gradientSecondColor, weatherStatusStyle, height, iconName, shadowStyle
    } = this.props;

    return (
      <LinearGradient
        colors={[gradientFirstColor, gradientSecondColor]}
        start={{ x: -0.25, y: 0.5 }}
        end={{ x: 0.4, y: 1.0 }}
        style={[weatherStatusStyle || null, { height }]}
      >
        {(iconName && shadowStyle) ? (
          <Icon
            name={iconName}
            size={65}
            color='#fff'
            style={shadowStyle}
          />
        ) : null}
      </LinearGradient>
    );
  }
}
