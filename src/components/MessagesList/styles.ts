import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  content: {
    paddingTop: 135,
    paddingBottom: 184,
  },
  emptyList: {
    flex: 1,
    alignItems: 'center',
    marginTop: 80,
  },
  emptyListMessage: {
    fontSize: 20,
    color: COLORS.WHITE,
  },
});

export { styles };
