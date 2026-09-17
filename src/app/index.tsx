import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Khung chứa các ô màu */}
      <View style={styles.gridContainer}>
        
        {/* Hàng 1: Ô 1 và Ô 2 */}
        <View style={styles.row}>
          <View style={[styles.box, styles.box1]}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={[styles.box, styles.box2]}>
            <Text style={styles.text}>2</Text>
          </View>
        </View>

        {/* Hàng 2: Ô 3, 4, 5 */}
        <View style={styles.row}>
          <View style={[styles.box, styles.box3]}>
            <Text style={styles.text}>3</Text>
          </View>
          <View style={[styles.box, styles.box4]}>
            <Text style={styles.text}>4</Text>
          </View>
          <View style={[styles.box, styles.box5]}>
            <Text style={styles.text}>5</Text>
          </View>
        </View>

        {/* Hàng 3: Ô 6 */}
        <View style={styles.row}>
          <View style={[styles.box, styles.box6]}>
            <Text style={styles.text}>6</Text>
          </View>
        </View>

      </View>

      {/* Thông tin sinh viên */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Đỗ Hoàng Long - BIT242713</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'space-between',
  },
  gridContainer: {
    gap: 10, // Khoảng cách giữa các hàng
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    height: 120, // Chiều cao cố định cho mỗi hàng
    gap: 10, // Khoảng cách giữa các ô trong cùng 1 hàng
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  text: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  // Style riêng cho từng ô
  box1: {
    flex: 1,
    backgroundColor: '#1E88E5', // Xanh dương
  },
  box2: {
    flex: 1,
    backgroundColor: '#E53935', // Đỏ
  },
  box3: {
    flex: 1,
    backgroundColor: '#FDD835', // Vàng
  },
  box3Text: {
    color: '#000',
  },
  box4: {
    flex: 1,
    backgroundColor: '#43A047', // Xanh lá
  },
  box5: {
    flex: 2, // Ô 5 rộng gấp đôi ô 3 và ô 4
    backgroundColor: '#8E24AA', // Tím
  },
  box6: {
    flex: 1,
    backgroundColor: '#FB8C00', // Cam
  },
  footer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});