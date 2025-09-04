import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  //login form
  const loginForm = useForm<LoginFormData>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

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
          <View className="mt-16 mb-8">
            <Text className="text-3xl font-poppins-bold text-gray-900 mb-2">
              Bem-vindo de volta
            </Text>
            <Text className="text-gray-500 font-poppins mb-2">
              Entre na sua conta
            </Text>
          </View>

          <View className="gap-6 mt-8">
            {/*Email*/}
            <View className="mt-6">
              <Text className="text-gray-800 text-base font-bold">Email</Text>
              <Controller
                control={loginForm.control}
                name="email"
                rules={{
                  required: "E-mail é obrigatório",
                  pattern: {
                    value: /^[^\s@]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                    message: "Por favor, insira um e-mail válido",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <View
                      className={`flex-row items-center bg-gray-50 rounded-xl px-4 border ${
                        loginForm.formState.errors.email
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    >
                      <MaterialCommunityIcons
                        name="email-outline"
                        size={20}
                        color={"#9CA3AF"}
                      />
                      <TextInput
                        className="flex-1 ml-3 text-gray-800 font-poppins"
                        placeholder="Digite seu e-mail"
                        placeholderTextColor="#9CA3AF"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        //editable={!loginMutation.isLoading}
                      />
                    </View>
                    {loginForm.formState.errors.email && (
                      <Text className="text-red-500 text-sm font-poppins mt-1 ml-1">
                        {loginForm.formState.errors.email.message}
                      </Text>
                    )}
                  </>
                )}
              />
            </View>

            {/*Password Filed*/}
            <View className="mt-6">
              <Text className="text-gray-800 text-base font-poppins-medium mb-3">
                Senha
              </Text>

              <Controller
                control={loginForm.control}
                name="password"
                rules={{
                  required: "Senha é obrigatória",
                  minLength: {
                    value: 6,
                    message: "A senha deve ter pelo menos 6 caracteres",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => {
                  return (
                    <>
                      <View
                        className={`flex-row items-center bg-gray-50 rounded-xl px-4 border ${
                          loginForm.formState.errors.password
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      >
                        <MaterialCommunityIcons
                          name="lock-outline"
                          size={20}
                          color="#9CA3AF"
                        />
                        <TextInput
                          className="flex-1 ml-3 text-gray-800 font-poppins"
                          placeholder="Digite sua senha"
                          placeholderTextColor="#9CA3AF"
                          secureTextEntry={!showPassword}
                          value={value}
                          onChangeText={onChange}
                          onBlur={onBlur}
                          // editable={!loginMutation.isLoading}
                        />

                        <TouchableOpacity
                          onPress={() => setShowPassword(!showPassword)}
                        >
                          <MaterialCommunityIcons
                            name={
                              showPassword ? "eye-outline" : "eye-off-outline"
                            }
                            size={20}
                            color="#9CA3AF"
                          />
                        </TouchableOpacity>
                      </View>

                      {loginForm.formState.errors.password && (
                        <Text className="text-red-500 text-sm font-poppins mt-1 ml-1">
                          {loginForm.formState.errors.password.message}
                        </Text>
                      )}
                    </>
                  );
                }}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
