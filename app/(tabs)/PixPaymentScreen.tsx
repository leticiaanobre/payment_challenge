import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function PixPaymentScreen() {
  const paymentAmount = "R$ 15.300,00";

  return (
    <View style={styles.container}>
        <Image source={require('@/assets/images/Logo.png')} style={styles.logo} />
      <Text style={styles.title}>João, pague a entrada de {paymentAmount} pelo Pix</Text>
      <View style={styles.QRCode}>
        <QRCode
            value="https://example.com/payment-link" // Use actual payment link or payment details
            size={250}
        />
      </View>
      <Button title="Clique para copiar QR CODE" onPress={() => {/* Implement copy functionality */}} />
      <Text style={styles.paymentInfo}>Prazo de pagamento: 15/12/2021 - 08:17</Text>
      <Text style={styles.totalAmount}>Total: R$ 30.600,00</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    textAlign: 'center',
    marginBottom: 20,
  },
  QRCode: {
    padding: 12,
    borderWidth: 2,
    borderColor: '#03D69D',
    borderRadius: 12
  },
  paymentInfo: {
    marginTop: 20,
    fontSize: 16,
    color: '#4D4D4D',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#4D4D4D',
  },
});
