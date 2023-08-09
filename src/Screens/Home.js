import React from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Button} from 'react-native-paper';
import ChatGptImg from '../assets/chatgpt.png';
import ImageGeneratorImg from '../assets/ImageGenerator.webp';
function Home({navigation}) {
  return (
    <ScrollView>
      <View className="flex justify-center mt-2  ">
          <TouchableOpacity
            onPress={() => navigation.navigate('GenerateImage')}>
            <Image className="h-60 w-full" source={ImageGeneratorImg} />
            <Text className="text-2xl text-center font-bold text-white  bg-violet-500 p-2  my-1">Generate Image</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ChatGpt')}>
            <Image className="h-60 w-full" source={ChatGptImg} />
            <Text className="text-2xl text-center font-bold text-white bg-emerald-700 p-2 my-1">ChatGPT</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default Home;
