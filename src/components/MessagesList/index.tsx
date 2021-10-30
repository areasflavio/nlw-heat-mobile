import React from 'react';
import { ScrollView } from 'react-native';

import { Message } from '../Message';

import { styles } from './styles';

const MessagesList: React.FC = () => {
  const testMessageData = {
    id: 'id',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem magni officia tenetur iure sint exercitationem atque deleniti beatae impedit sunt et sit, dolor consectetur odit quibusdam provident libero! Voluptate, culpa?',
    user: {
      name: 'Flávio Arêas',
      avatar_url: 'https://github.com/areasflavio.png',
    },
  };

  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps="never"
      contentContainerStyle={styles.content}
    >
      <Message data={testMessageData} />
      <Message data={testMessageData} />
      <Message data={testMessageData} />
    </ScrollView>
  );
};

export { MessagesList };
