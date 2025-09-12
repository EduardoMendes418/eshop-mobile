import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as Google from "expo-auth-session/providers/google";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
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
  const navigation = useNavigation();

  const loginForm = useForm<LoginFormData>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [requestGoogle, responseGoogle, promptGoogle] = Google.useAuthRequest({
    iosClientId: "<SUA_CLIENT_ID>.apps.googleusercontent.com",
    androidClientId: "<SUA_CLIENT_ID>.apps.googleusercontent.com",
    webClientId: "<SUA_CLIENT_ID>.apps.googleusercontent.com",
  });

  const [requestFb, responseFb, promptFb] = Facebook.useAuthRequest({
    clientId: "<SEU_FACEBOOK_APP_ID>",
  });

  useEffect(() => {
    if (responseGoogle?.type === "success") {
      const { authentication } = responseGoogle;
      console.log("Google token:", authentication?.accessToken);
    }

    if (responseFb?.type === "success") {
      const { authentication } = responseFb;
      console.log("Facebook token:", authentication?.accessToken);
    }
  }, [responseGoogle, responseFb]);

  const handlerSignUpNavigation = () => {
    router.push("/signup" as any);
  };
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 bg-gray-100"
      >
        <ScrollView
          className="flex-1 px-6 bg-gray-100"
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View className="mt-16 mb-2">
            <Text  className="text-3xl font-bold text-gray-900 mb-2">
              Bem-vindo de volta
            </Text>
            <Text className="text-gray-500 font-poppins mb-2">
              Entre na sua conta
            </Text>
          </View>

          <View className="gap-6 mt-8">
            <View >
              <Text className="text-gray-600 text-base font-bold">Email</Text>
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

            <View >
              <Text className="text-gray-600 text-base font-poppins-medium font-bold mb-3">
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
              <TouchableOpacity
                className="self-end mt-2"
                onPress={() => router.push("/forgot-password")}
                //disabled={loginMutation.isPending}
              >
                <Text className="text-blue-600 font-bold">
                  Esqueceu sua senha?
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              className={`rounded-xl py-4 mt-8 ${
                loginForm.formState.isValid ? "bg-blue-600" : "bg-gray-300"
              }`}
              //disabled={!loginForm.formState.isValid}
              //onPress={loginForm.handleSubmit(handleSubmit)} // agora chama a função
            >
              <Text className="text-white font-bold text-center text-base">
                {"Entrar"}
              </Text>
            </TouchableOpacity>

            <View className="flex-row items-center my-8">
              <View className="flex-1 h-px bg-gray-300" />
              <Text className="mx-4 text-gray-500 font-bold">ou entre com</Text>
              <View className="flex-1 h-px bg-gray-300" />
            </View>

            <View className="flex-row justify-center space-x-6 mt-6">
              <TouchableOpacity
                disabled={!requestGoogle}
                onPress={() => promptGoogle()}
                className="w-14 h-14 rounded-full bg-red-500 items-center justify-center"
              >
                <AntDesign
                  name="google"
                  size={28}
                  color="white"
                  testID="google-icon"
                />
              </TouchableOpacity>

              <TouchableOpacity
                disabled={!requestFb}
                onPress={() => promptFb()}
                className="w-14 h-14 rounded-full bg-blue-600 items-center justify-center"
              >
                <FontAwesome
                  name="facebook"
                  size={28}
                  color="white"
                  testID="facebook-icon"
                />
              </TouchableOpacity>
            </View>

            <View className="flex-row justify-center mt-5">
              <Text className="text-base text-gray-700 mr-1">
                Não tem uma conta?
              </Text>
              <TouchableOpacity
                onPress={handlerSignUpNavigation}
                //  disabled={false}
              >
                <Text className="text-base font-bold text-blue-600">
                  Cadastre-se
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
