import React from 'react';
import { View } from 'react-native';

import { Header } from '../../components/Header';
import { MessagesList } from '../../components/MessagesList';
import { SendMessageForm } from '../../components/SendMessageForm';
import { SignInBox } from '../../components/SignInBox';

import { styles } from './styles';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />

      <MessagesList />
      <SignInBox />

      {/* <SendMessageForm /> */}
    </View>
  );
};

export { Home };
