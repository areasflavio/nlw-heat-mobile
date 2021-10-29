import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { UserPhoto } from '../UserPhoto';

import LogoSVG from '../../assets/logo.svg';
import { styles } from './styles';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <LogoSVG />

      <View style={styles.logoutView}>
        <TouchableOpacity>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>

        <UserPhoto imageUri="https://github.com/areasflavio.png" />
      </View>
    </View>
  );
};

export { Header };
