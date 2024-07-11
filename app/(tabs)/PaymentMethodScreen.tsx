import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Checkbox from '@/components/Checkbox';

export default function PaymentMethodScreen() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleCheckboxChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/Logo.png')} style={styles.logo} />
      <Text style={styles.title}>João, como você quer pagar?</Text>
      <View style={styles.optionsContainer}>
        <Checkbox
          title="Pix"
          text="1x R$ 30.500,00"
          subText="Ganhe 3% de Cashback"
          onValueChange={() => handleCheckboxChange('pix')}
          checked={selectedOption === 'pix'}
        />
        <Checkbox
          title="Pix Parcelado"
          text="2x R$ 15.300,00"
          subText=""
          onValueChange={() => handleCheckboxChange('pix-parcelado')}
          checked={selectedOption === 'pix-parcelado'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    marginTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  optionsContainer: {
    width: '100%',
  },
});

