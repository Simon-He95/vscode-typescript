import * as vscode from 'vscode';
import { getFunctionNode } from './main';

export function activate(context: vscode.ExtensionContext) {
 vscode.commands.registerCommand('vscode-typescript.helloWorld', () => {
		// vscode.window.showInformationMessage('Hello World from vscode-typescript!');
		const editor = vscode.window.activeTextEditor;
		if (!editor) {return;} 
		const code = editor.document.getText();
		const index = editor.document.offsetAt(editor.selection.active);
		const {start,end} = getFunctionNode(code, index)!;
		editor.edit(editBuilder => {
			editBuilder.delete(new vscode.Range(new vscode.Position(start.line-1,start.column),new vscode.Position(end.line-1,end.column)));
		});
	});
}
