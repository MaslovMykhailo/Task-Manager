import Colors from '../constants/Colors';

export default (color, value) => {
  return Colors[color].RGB.slice(0, -1) + ',' + value + ')';
}