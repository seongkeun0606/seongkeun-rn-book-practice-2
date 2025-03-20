import { Image, StyleSheet, Text, View } from 'react-native';

import React from 'react';

interface Props {
  name: string;
  children: React.ReactNode;
  image?: string;
  isActive?: boolean;
}

const Profile: React.FC<Props> = ({ name, children, isActive, image }) => {
  return (
    <View style={isActive && styles.activeStyle}>
      <Image source={{ uri: image || 'https://picsum.photos/200' }} />
      <Text>{name}</Text>
      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  activeStyle: {
    backgroundColor: 'yellow',
  },
});

export default Profile;
