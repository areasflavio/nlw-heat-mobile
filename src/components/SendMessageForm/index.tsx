import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

const SendMessageForm: React.FC = () => {
  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        keyboardAppearance="dark"
        placeholder="Qual sua expectativa para o evento?"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        editable={!sendingMessage}
        style={styles.input}
      />

      <Button
        title="ENVIAR MENSAGEM"
        color={COLORS.WHITE}
        backgroundColor={COLORS.PINK}
      />
    </View>
  );
};

export { SendMessageForm };
