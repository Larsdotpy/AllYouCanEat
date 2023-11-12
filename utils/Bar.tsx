// Bar.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface BarProps {
  tableNumber: string;
  currentRound: number;
  timer: number;
}

const Bar: React.FC<BarProps> = ({ tableNumber, currentRound, timer }) => {
  return (
    <View style={styles.bar}>
      <Text style={styles.barText}>{`Table ${tableNumber}`}</Text>
      <Text style={styles.barText}>{`Round ${currentRound}/5`}</Text>
      <Text style={styles.barText}>{`12/20 `}</Text>
      <Text style={styles.barText}>{formatTime(timer)}</Text>
    </View>
  );
};

const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${hours}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  barText: {
    flex: 1,
    textAlign: 'center',
  },
});

export default Bar;
