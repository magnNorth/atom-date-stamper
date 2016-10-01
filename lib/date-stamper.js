'use babel';

import { CompositeDisposable } from 'atom';

export default {

  dateStamperView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();
    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'date-stamper:toggle': () => this.toggle(),
      'date-stamper:addDate': () => this.addDate(),
      'date-stamper:addDateTime': () => this.addDateTime(),
      'date-stamper:addTime': () => this.addTime(),
      'date-stamper:addUnix': () => this.addUnix()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.dateStamperView.destroy();
  },

  toggle() {
    console.log('DateStamper toggled');
  },

addDate(){
    if(editor = atom.workspace.getActiveTextEditor()){
      var dateInsert = new Date();
        editor.insertText('[ ' + dateInsert.toDateString() + ' ]');
        return dateInsert.toDateString();
    }
},

addDateTime(){
  if(editor = atom.workspace.getActiveTextEditor()){
    var dateInsert = new Date();
    editor.insertText('[ ' + dateInsert.toLocaleDateString()  + ' ' + dateInsert.toLocaleTimeString() + ' ]');
  }
},

addTime(){
    if(editor = atom.workspace.getActiveTextEditor()){
      var dateInsert = new Date();
        editor.insertText('[ ' + dateInsert.getHours() + '-' +  dateInsert.getMinutes()   + ' ]');
    }
},

addUnix(){
  if(editor = atom.workspace.getActiveTextEditor()){
    var dateInsert = new Date();
    editor.insertText('[ ' + dateInsert.getTime() + ' ]');
  }
}
};
