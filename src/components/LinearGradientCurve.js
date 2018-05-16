import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import Styles from '../utils/Styles';

export default class LinearGradientCurve extends React.PureComponent {
  render() {
    const {
      gradientFirstColor,
      gradientSecondColor,
      weatherStatusStyle,
      height,
      iconName,
      shadowStyle,
    } = this.props;

    return (
      <LinearGradient
        colors={[gradientFirstColor, gradientSecondColor]}
        start={{ x: -0.25, y: 0.5 }}
        end={{ x: 0.4, y: 1.0 }}
        style={[weatherStatusStyle ? Styles.weatherStatus : null, { height }]}
      >
        {iconName && shadowStyle ? (
          <Icon name={iconName} size={65} color="#fff" style={Styles.shadowStyle} />
        ) : null}
      </LinearGradient>
    );
  }
}

LinearGradientCurve.propTypes = {
  gradientFirstColor: PropTypes.string.isRequired,
  gradientSecondColor: PropTypes.string.isRequired,
  weatherStatusStyle: PropTypes.bool.isRequired,
  height: PropTypes.number.isRequired,
  iconName: PropTypes.string.isRequired,
  shadowStyle: PropTypes.bool.isRequired,
};
