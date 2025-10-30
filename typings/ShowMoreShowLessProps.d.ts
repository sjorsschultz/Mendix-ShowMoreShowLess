/**
 * This file was generated from ShowMoreShowLess.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export interface ShowMoreShowLessProps<Style> {
    name: string;
    style: Style[];
    textAttribute: EditableValue<string>;
    numberOfLines: number;
    showMoreCaption: string;
    showLessCaption: string;
    containerClass: string;
    linkClass: string;
}

export interface ShowMoreShowLessPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode?: "design" | "xray" | "structure";
    textAttribute: string;
    numberOfLines: number | null;
    showMoreCaption: string;
    showLessCaption: string;
    containerClass: string;
    linkClass: string;
}
