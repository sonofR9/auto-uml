/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),
/* 2 */,
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.activateTreeView = void 0;
const vscode = __webpack_require__(1);
function activateTreeView(context) {
    const treeDataProvider = new YourTreeDataProvider();
    const treeView = vscode.window.createTreeView('umlGenerator.treeView', {
        treeDataProvider,
    });
    context.subscriptions.push(treeView);
}
exports.activateTreeView = activateTreeView;
class YourTreeDataProvider {
    getTreeItem(element) {
        return element;
    }
    getChildren(element) {
        return null;
        // Implement logic to fetch and display file/folder structure
    }
}
class TreeNode extends vscode.TreeItem {
    constructor(label, collapsibleState, resourceUri) {
        super(label, collapsibleState);
        this.label = label;
        this.collapsibleState = collapsibleState;
        this.resourceUri = resourceUri;
    }
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __webpack_require__(1);
const treeview_1 = __webpack_require__(3);
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "auto-uml-generator" is now active!');
    const logo = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    logo.text = 'Your Logo Text';
    logo.tooltip = 'Your UML Generator Logo';
    logo.command = 'umlGenerator.showMenu';
    logo.show();
    registerCommands(context);
    (0, treeview_1.activateTreeView)(context);
}
exports.activate = activate;
function registerCommands(context) {
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
function showMainMenu(context) {
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
function deactivate() { }
exports.deactivate = deactivate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map