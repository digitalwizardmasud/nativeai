import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Button,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {createCompletion} from '../utils/openai';

function ChatGpt() {
  const [prompt, setPrompt] = useState('how to be a web developer');
  const [output, setOutput] = useState('');
  const [isWorking, setIsWorking] = useState(false);
  const handleSubmit = () => {
    setIsWorking(true)
    createCompletion(prompt)
      .then(res => res.json())
      .then(res => {
        setIsWorking(false)
        setOutput(res.choices[0].text);
      });
  };
  return (
    <ScrollView className=" bg-slate-50">
      <View className="mx-3 mt-3 ">
        <Text className="font-bold text-lg ">Make a Prompt:</Text>
        <TextInput
          onChangeText={text => setPrompt(text)}
          mode="outlined"
          placeholder="how to be a web developer.."
        />
        <Button onPress={handleSubmit} className="mt-2" title="Submit">
          Submit
        </Button>
      </View>
      {isWorking ? (
        <View className="mx-2 my-3">
          <ActivityIndicator size="large" color="#0090dd"/>
        </View>
      ) : (
        <View className="mx-3 my-3">
          {
            output && <Text className="font-semibold">Output:</Text>
          }
          <Text className="text-md">{output.replace("\n\n", "")}</Text>
        </View>
      )}
    </ScrollView>
  );
}

export default ChatGpt;
