import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CheckboxProps {
  title: string;
  text: string;
  subText: string;
  onValueChange: (checked: boolean) => void;
  checked: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ title, text, subText, onValueChange, checked }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.subText}>{subText}</Text>
        </View>
        <TouchableOpacity
          style={[styles.checkbox, checked && styles.checked]}
          onPress={() => onValueChange(!checked)}
        >
          {checked && <View style={styles.innerCheckbox} />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    width: '100%',
    borderColor: '#E5E5E5',
    position: 'relative'
  },
  title: {
    position: 'absolute',
    top: -12,
    left: 20,
    backgroundColor: '#E5E5E5',
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 2,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4D4D4D'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
    color: '#4D4D4D',
  },
  subText: {
    fontSize: 14,
    color: '#03D69D',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: '#03D69D',
  },
  innerCheckbox: {
    width: 12,
    height: 12,
    backgroundColor: '#03D69D',
  },
});

export default Checkbox;
