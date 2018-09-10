import { ImagePathRecognizer } from './recognizer';
import { TextDocument } from 'vscode';

export const urlRecognizer: ImagePathRecognizer = {
    recognize: (document: TextDocument, line: string) => {
        let imageUrls: RegExp = /url\('?"?([^'"]*)'?"?\)/gim;
        let match = imageUrls.exec(line);
        let imagePath: string;

        if (match && match.length > 1) {
            imagePath = match[1];
        }
        return imagePath;
    }
};