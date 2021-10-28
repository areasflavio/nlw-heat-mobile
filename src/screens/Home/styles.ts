import { StyleSheet } from 'react-native';

import { COLORS } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: COLORS.BLACK_SECONDARY,
  },
  text: {
    color: COLORS.WHITE,
  },
});

export { styles };
