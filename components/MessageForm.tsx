import { Button, Text, TextInput, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

const MessageForm: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [lastMessage, setLastMessage] = useState<{ id: number; message: string; date: Date } | null>(null);
  const nextId = useRef<number>(1);
  const inputRef = useRef<TextInput>(null);

  const onPress = () => {
    setLastMessage({ id: nextId.current, message: text, date: new Date() });
    setText('');
    nextId.current += 1;
  };

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.focus();
  }, []);

  return (
    <View>
      <TextInput value={text} onChangeText={setText} />
      <Button title="PRESS ME" onPress={onPress} />
      {lastMessage && (
        <View>
          <Text>마지막 메시지: {lastMessage.message}</Text>
          <Text>{lastMessage.date.toLocaleString()}</Text>
        </View>
      )}
    </View>
  );
};

export default MessageForm;
