import { createElement } from "react";
const React = { createElement };

import { AttributeProperty } from "mendix/AttributeProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { NanoflowObjectProperty } from "mendix/NanoflowObjectProperty";
import { NativeStyleProperty } from "mendix/NativeStyleProperty";

import { ShowMoreShowLess as bluealpaca_showmoreshowless_ShowMoreShowLess } from "../widgets/bluealpaca/showmoreshowless/ShowMoreShowLess";
import { Container } from "mendix/widgets/native/Container";
import { DataView } from "mendix/widgets/native/DataView";
import { ScrollContainer } from "mendix/widgets/native/ScrollContainer";
import { Text } from "mendix/widgets/native/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix/native";

import { mainContent, sidebar } from "C:/MxProjects/WidgetDevelopment/showMoreShowLess/test/deployment/native/layouts/Atlas_Core.NativePhone_Default.js";

import * as styles from "../styles.js";

const { $ScrollContainer, $Container, $Text, $DataView, $bluealpaca_showmoreshowless_ShowMoreShowLess } = asPluginWidgets({ ScrollContainer, Container, Text, DataView, bluealpaca_showmoreshowless_ShowMoreShowLess });

const placeholder$Main = () => [
    <$ScrollContainer key="p0.NativeMobile.Home_Native.scrollContainer1"
        $widgetId="p0.NativeMobile.Home_Native.scrollContainer1"
        style={NativeStyleProperty({
            "styles": [ styles.ScrollContainer ]
        })}
        content={[
            <$Container key="p0.NativeMobile.Home_Native.container5"
                $widgetId="p0.NativeMobile.Home_Native.container5"
                style={NativeStyleProperty({
                    "styles": [ styles.Container, styles.flexMain, styles.alignChildrenCenter, styles.justifyContentCenter, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium, styles.backgroundPrimary ]
                })}
                onClick={undefined}
                content={[
                    <$Container key="p0.NativeMobile.Home_Native.container6"
                        $widgetId="p0.NativeMobile.Home_Native.container6"
                        style={NativeStyleProperty({
                            "styles": [ styles.Container, styles.spacingOuterBottomSmaller ]
                        })}
                        onClick={undefined}
                        content={[
                            <$Text key="p0.NativeMobile.Home_Native.text7"
                                $widgetId="p0.NativeMobile.Home_Native.text7"
                                style={NativeStyleProperty({
                                    "styles": [ styles.Text, styles.TextHeading1, styles.h1 ]
                                })}
                                text={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Go make it!" }, "args": {} }
                                    })
                                ])}
                                accessible={false} />
                        ]}
                        accessible={false} />,
                    <$Container key="p0.NativeMobile.Home_Native.container7"
                        $widgetId="p0.NativeMobile.Home_Native.container7"
                        style={NativeStyleProperty({
                            "styles": [ styles.Container, styles.flexRow ]
                        })}
                        onClick={undefined}
                        content={[
                            <$Text key="p0.NativeMobile.Home_Native.text11"
                                $widgetId="p0.NativeMobile.Home_Native.text11"
                                style={NativeStyleProperty({
                                    "styles": [ styles.Text, styles.h1, styles.textLarge, styles.textCenter ]
                                })}
                                text={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Make changes, run locally, preview." }, "args": {} }
                                    })
                                ])}
                                accessible={false} />
                        ]}
                        accessible={false} />,
                    <$DataView key="p0.NativeMobile.Home_Native.dataView1"
                        $widgetId="p0.NativeMobile.Home_Native.dataView1"
                        style={NativeStyleProperty({
                            "styles": [ styles.DataView ]
                        })}
                        object={NanoflowObjectProperty({
                            "dataSourceId": "p0.14",
                            "editable": true,
                            "source": { "nanoflow": () => require("C:/MxProjects/WidgetDevelopment/showMoreShowLess/test/deployment/native/nanoflows/NativeMobile.DS_Text").DS_Text },
                            "argMap": {}
                        })}
                        content={[
                            <$bluealpaca_showmoreshowless_ShowMoreShowLess key="p0.NativeMobile.Home_Native.showMore_ShowLess1"
                                $widgetId="p0.NativeMobile.Home_Native.showMore_ShowLess1"
                                textAttribute={AttributeProperty({
                                    "scope": "p0.NativeMobile.Home_Native.dataView1",
                                    "path": "",
                                    "entity": "NativeMobile.Entity",
                                    "attribute": "Text",
                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                    "isList": false
                                })}
                                numberOfLines={6}
                                showMoreCaption={"Show more"}
                                showLessCaption={"Show less"}
                                containerClass={"textPrimary"}
                                linkClass={"textBlack"}
                                style={NativeStyleProperty({
                                    "styles": [ styles.bluealpaca_showmoreshowless_ShowMoreShowLess ]
                                })} />
                        ]} />
                ]}
                accessible={false} />
        ]}
        hideScrollbars={false} />
];

export const placeholder$Header = () => null;

export const $$title = t([
    "Home"
]);

export const $$style = [ styles.Layout, styles.Page ];

export const $$parameters = [];
export const $$page = () => mainContent(placeholder$Main);

export const $$sidebar = () => sidebar();

