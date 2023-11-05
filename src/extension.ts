// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { activateTreeView } from './treeview';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "auto-uml-generator" is now active!');

	const logo = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    logo.text = 'Your Logo Text';
    logo.tooltip = 'Your UML Generator Logo';
    logo.command = 'umlGenerator.showMenu';
    logo.show();

	registerCommands(context);

	
	activateTreeView(context);
}

function registerCommands(context: vscode.ExtensionContext) { 
	context.subscriptions.push(vscode.commands.registerCommand('auto-uml-generator.uml-from-scratch', () => {
        vscode.window.showInformationMessage('uml from scratch!');
	}));
	context.subscriptions.push(vscode.commands.registerCommand('auto-uml-generator.uml-from-files', () => {
        vscode.window.showInformationMessage('uml from files!');
	}));
	context.subscriptions.push(vscode.commands.registerCommand('auto-uml-generator.update-uml', () => {
        vscode.window.showInformationMessage('update uml!');
	}));
	context.subscriptions.push(vscode.commands.registerCommand('auto-uml-generator.generate-code', () => {
        vscode.window.showInformationMessage('generate code!');
	}));
}

function showMainMenu(context: vscode.ExtensionContext) {
    // const scanFilesCommand = {
    //     command: 'umlGenerator.scanFiles',
    //     title: 'Scan Files',
    // };

    // // Define other menu items similarly

    // const menuItems = [scanFilesCommand, /* ... */];

    // vscode.window.showQuickPick(menuItems).then((selected) => {
    //     if (selected) {
    //         vscode.commands.executeCommand(selected.command);
    //     }
    // });
}

// This method is called when your extension is deactivated
export function deactivate() {}


