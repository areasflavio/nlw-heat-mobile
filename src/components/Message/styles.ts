import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 36,
  },
  message: {
    fontSize: 15,
    lineHeight: 20,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    marginBottom: 12,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  userName: {
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    marginLeft: 16,
  },
});

export { styles };
