// import React, { useState, useRef } from "react";
// import { TouchableOpacity, View, Text } from "react-native";
// import { ChatTeardropDots } from "phosphor-react-native";

// import BottomSheet from "@gorhom/bottom-sheet";
// import { gestureHandlerRootHOC } from "react-native-gesture-handler";
// import { Copyright } from "../Copyright";
// import { Options } from "../Options";
// import { Option } from "../Option";
// import { feedbackTypes } from "../../utils/feedbackTypes";
// import { theme } from "../../theme";
// import { styles } from "./styles";
// import { Form } from "../Form";
// import { Success } from "../Success";

// export type FeedbackType = keyof typeof feedbackTypes;

// function Widget() {
//   const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
//   const [feedbackSent, setFeedbackSent] = useState(false);
//   const bottomSheetRef = useRef<BottomSheet>(null);

//   function handleOpen() {
//     bottomSheetRef.current?.expand();
//   }

//   function handleRestartFeedback() {
//     setFeedbackType(null);
//     setFeedbackSent(false);
//     console.log("APAGANDO FEED", feedbackType);
//   }
//   function handleFeedbackSent() {
//     setFeedbackSent(true);
//   }
//   // const handleSheetChanges = useCallback(index => {
//   //   console.log('handleSheetChanges', index);
//   // }, []);

//   console.log("tipo do feedback", feedbackType);
//   return (
//     <>
//       <TouchableOpacity style={styles.button} onPress={handleOpen}>
//         <ChatTeardropDots
//           size={24}
//           weight="bold"
//           color={theme.colors.text_on_brand_color}
//         />
//       </TouchableOpacity>

//       <BottomSheet
//         ref={bottomSheetRef}
//         snapPoints={[1, 280]}
//         // index={1}
//         backgroundStyle={styles.modal}
//         handleIndicatorStyle={styles.indicator}
//       >
//         {feedbackSent ? (
//           <Success onSendAnotherFeedback={handleRestartFeedback} />
//         ) : (
//           <>
//             {feedbackType ? (
//               <Form
//                 feedbackType={feedbackType}
//                 onFeedbackCanceled={handleRestartFeedback}
//                 onFeedbackSent={handleFeedbackSent}
//               />
//             ) : (
//               <Options onFeedbackTypeChanged={setFeedbackType} />
//             )}
//           </>
//         )}
//       </BottomSheet>
//     </>
//   );
// }

// export default gestureHandlerRootHOC(Widget);

//-----------------------------------------------

import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import React, { useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import { ChatTeardropDots } from "phosphor-react-native";
import BottomSheet from "@gorhom/bottom-sheet";

import { Options } from "../Options";
import { Success } from "../Success";
import { Form } from "../Form";

import { styles } from "./styles";
import { theme } from "../../theme";
import { feedbackTypes } from "../../utils/feedbackTypes";

export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOpen() {
    bottomSheetRef.current?.expand();
  }

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  function handleFeedbackSent() {
    setFeedbackSent(true);
  }

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
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
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
              <Options onFeedbackTypeChanged={setFeedbackType} />
            )}
          </>
        )}
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);
