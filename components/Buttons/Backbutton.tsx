// components/BackButton.tsx

import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

/**
 * Type for the props of the BackButton component.
 */
type Props = {
  /**
   * The name of the icon to be displayed.
   */
  iconName: string;
};

/**
 * Component for a back button.
 * @param {Props} props - The props for the component.
 * @returns {JSX.Element} - The rendered component.
 */
const BackButton = ({iconName}: Props): JSX.Element => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.goBack()}>
      <Icon name={iconName} size={25} color="#fff" />
    </TouchableOpacity>
  );
};

/**
 * Styles for the BackButton component.
 */
const styles = StyleSheet.create({
  backButton: {
    padding: 5,
    position: 'absolute',
    top: 10,
    left: 10,
  },
});

export default BackButton;