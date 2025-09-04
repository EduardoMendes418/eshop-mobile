import React from "react";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 bg-white"
      >
        <ScrollView
          className="flex-1 px-6 bg-white"
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View className="mt-16 mb-8" >
            <Text  className="text-3xl font-poppins-bold text-gray-900 mb-2">
              Bem-vindo de volta
            </Text>
            <Text className="text-gray-500 font-poppins mb-2">
              Entre na sua conta
            </Text>
          </View>

          <View className="gap-6 mt-8">
            <View className="mt-6">
              <Text className="text-gray-800 text-base font-bold">Email</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
