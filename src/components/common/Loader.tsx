import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import Modal from "react-native-modal";

export default function ({ loading }: { loading: boolean }) {
  return (
    <Modal
      isVisible={loading}
      animationIn="fadeIn"
      animationOut="fadeOut"
      backdropOpacity={0.2}
      useNativeDriver={true}
      style={styles.modal}
    >
      <View style={styles.box}>
        <ActivityIndicator animating={loading} size="large" color="#00244E" />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "#fff",
    width: 90,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
