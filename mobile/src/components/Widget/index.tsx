import React, {useState, useRef} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {ChatTeardropDots} from 'phosphor-react-native';

import BottomSheet from '@gorhom/bottom-sheet';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Copyright} from '../Copyright';
import {Option} from '../Option';
import {feedbackTypes} from '../../utils/feedbackTypes';
import {theme} from '../../theme';
import {styles} from './styles';
import {Form} from '../Form';
import {Success} from '../Success';

const Widget = () => {
  const [feedbackType, setFeedbackType] = useState(null);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const bottomSheetRef = useRef(BottomSheet);

  const Options = () => {
    return (
      <View style={styles.containerOptions}>
        <Text style={styles.title}>Deixe o seu feedback</Text>
        <View style={styles.options}>
          {Object.entries(feedbackTypes).map(([key, value]) => {
            console.log('KEY--->', key);
            return (
              <TouchableOpacity onPress={setFeedbackType(key)}>
                <Option key={key} title={value.title} image={value.image} />
              </TouchableOpacity>
            );
          })}
        </View>
        <Copyright />
      </View>
    );
  };

  function handleOpen() {
    bottomSheetRef.current?.expand();
  }

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
    console.log('APAGANDO FEED', feedbackType);
  }
  function handleFeedbackSent() {
    setFeedbackSent(true);
  }
  // const handleSheetChanges = useCallback(index => {
  //   console.log('handleSheetChanges', index);
  // }, []);

  console.log('tipo do feedback', feedbackType);
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        // index={1}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}>
        {feedbackSent ? (
          <Success onSendAnotherFeedback={handleRestartFeedback} />
        ) : (
          <>
            {feedbackType ? (
              <Form
                feedbackType={feedbackType}
                onFeedbackCanceled={handleRestartFeedback}
                onFeedbackSent={handleFeedbackSent}
              />
            ) : (
              <Options />
            )}
          </>
        )}
      </BottomSheet>
    </>
  );
};

export default gestureHandlerRootHOC(Widget);
