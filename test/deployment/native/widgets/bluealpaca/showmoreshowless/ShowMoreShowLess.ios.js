import { useState, useCallback, useEffect, createElement } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function flattenStyles(style) {
    if (!style)
        return {};
    if (Array.isArray(style)) {
        return Object.assign({}, ...style);
    }
    return typeof style === "object" ? style : {};
}
function ShowMoreShowLess(props) {
    var _a;
    const { textAttribute, numberOfLines = 3, showMoreCaption = "Show more", showLessCaption = "Show less", containerClass, linkClass } = props;
    const text = (_a = textAttribute === null || textAttribute === void 0 ? void 0 : textAttribute.value) !== null && _a !== void 0 ? _a : "";
    const [expanded, setExpanded] = useState(false);
    const [needsMoreButton, setNeedsMoreButton] = useState(false);
    const onTextLayout = useCallback((e) => {
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
            platform: "ios"
        });
    }, [needsMoreButton, expanded, text]);
    return (createElement(View, { style: [{ marginVertical: 4, width: '100%' }, containerStyle] },
        createElement(Text, { numberOfLines: expanded ? undefined : numberOfLines, ellipsizeMode: "tail", onTextLayout: onTextLayout, style: {
                flexShrink: 1,
                flexWrap: 'wrap',
                width: '100%'
            } }, text),
        needsMoreButton && (createElement(TouchableOpacity, { onPress: toggleExpanded, style: { alignSelf: 'flex-start' } },
            createElement(Text, { style: [{
                        marginTop: 4,
                        color: 'blue',
                        textDecorationLine: 'underline'
                    }, linkStyle] }, expanded ? showLessCaption : showMoreCaption)))));
}

export { ShowMoreShowLess };
