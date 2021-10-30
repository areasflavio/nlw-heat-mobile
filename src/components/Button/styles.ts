import { StyleSheet } from 'react-native';
import { FONTS } from '../../theme';

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 48,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  title: {
    fontSize: 14,
    fontFamily: FONTS.BOLD,
  },
  icon: {
    marginRight: 12,
  },
});

export { styles };
