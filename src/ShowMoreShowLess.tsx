// ... existing imports ...
import { createElement, useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  NativeSyntheticEvent,
  TextLayoutEventData,
  ViewStyle,
  TextStyle
} from "react-native";
import { DynamicValue } from "mendix";

// ... helper function ...
function flattenStyles(style: any): ViewStyle | TextStyle {
  if (!style) return {};
  if (Array.isArray(style)) {
    return Object.assign({}, ...style);
  }
  return typeof style === "object" ? style : {};
}

interface ShowMoreShowLessProps {
  textAttribute: DynamicValue<string>;
  numberOfLines?: number;
  showMoreCaption?: string;
  showLessCaption?: string;
  containerClass?: string;
  linkClass?: string;
}

export function ShowMoreShowLess(props: ShowMoreShowLessProps): JSX.Element {
  const {
    textAttribute,
    numberOfLines = 3,
    showMoreCaption = "Show more",
    showLessCaption = "Show less",
    containerClass,
    linkClass
  } = props;

  const text = textAttribute?.value ?? "";
  const [expanded, setExpanded] = useState(false);
  const [needsMoreButton, setNeedsMoreButton] = useState(false);

  // iOS-specific refresh hack
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (Platform.OS === "ios") {
      // Forces update after mount to reliably fire onTextLayout on iOS
      const timer = setTimeout(() => setRefresh(r => !r), 100);
      return () => clearTimeout(timer);
    }
  }, [text]);

  const onTextLayout = useCallback((e: NativeSyntheticEvent<TextLayoutEventData>) => {
    const hasEnoughLines = e.nativeEvent.lines.length > numberOfLines;
    setNeedsMoreButton(hasEnoughLines);
  }, [numberOfLines]);

  const toggleExpanded = useCallback(() => {
    setExpanded(prev => !prev);
  }, []);

  const containerStyle = flattenStyles(containerClass);
  const linkStyle = flattenStyles(linkClass);

  // Debug logs
  useEffect(() => {
    console.log('ShowMoreShowLess - Render state:', {
      needsMoreButton,
      expanded,
      textLength: text.length,
      platform: Platform.OS
    });
  }, [needsMoreButton, expanded, text]);

  return (
    <View style={[{ marginVertical: 4, width: '100%' }, containerStyle]}>
      <Text
        numberOfLines={expanded ? undefined : numberOfLines}
        ellipsizeMode="tail"
        onTextLayout={onTextLayout}
        style={{
          flexShrink: 1,
          flexWrap: 'wrap',
          width: '100%'
        }}
        key={Platform.OS === "ios" ? (refresh ? "refresh1" : "refresh0") : undefined}
      >
        {text}
      </Text>

      {needsMoreButton && (
        <TouchableOpacity
          onPress={toggleExpanded}
          style={{ alignSelf: 'flex-start' }}
        >
          <Text style={[
            {
              marginTop: 4,
              color: 'blue',
              textDecorationLine: 'underline'
            },
            linkStyle
          ]}>
            {expanded ? showLessCaption : showMoreCaption}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}