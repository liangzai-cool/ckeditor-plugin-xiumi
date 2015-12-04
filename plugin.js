(function(){
  var pluginName = "xiumi";
  CKEDITOR.plugins.add(pluginName, {
    lang:"zh-cn",
    onLoad: function(){
    },
    beforeInit: function(editor){
    },
    init: function(editor) {
            var lang = editor.lang.xiumi;
            editor.addCommand(pluginName, new CKEDITOR.dialogCommand(pluginName));
            editor.ui.addButton(pluginName, {
              label: lang.button.label,
              command: pluginName,
              icon: this.path + "images/icon.png"
            });
            if ( editor.contextMenu ) {
              
              // Add a context menu group with the Edit Abbreviation item.
              editor.addMenuGroup("xiumiFontSize");
              editor.addMenuGroup("xiumiBgColor");
              
              var fontSizeList = ["8", "9", "10", "11", "12", "14", "16", "18", "20", "22", "24", "26", "28", "36", "48", "72"];
              var bgColorList = [{text:lang.contextMenu.level1.bgColor.red, value:"red"}, {text:lang.contextMenu.level1.bgColor.yellow, value:"yellow"}, {text:lang.contextMenu.level1.bgColor.green, value:"green"}, {text:lang.contextMenu.level1.bgColor.blue, value:"blue"}];

              var fontSizeMenuItems = {
                fontSize: {
                  label: lang.contextMenu.level0.fontSize.label,
                  group: "xiumiFontSize"
                }
              };
              var bgColorMenuItems = {
                bgColor: {
                  label: lang.contextMenu.level0.bgColor.label,
                  group: "xiumiBgColor"
                }
              };
              
              var fontSizeItems = {};
              var bgColorItems = {};
              
              for(i in fontSizeList){
                var fontSize = fontSizeList[i];
                fontSizeItems["size" + fontSize] = CKEDITOR.TRISTATE_OFF;
                editor.addCommand("size" + fontSize, {
                  exec: function(editor){
                    var name = this.name;
                    var _size = name.replace("size", "");
                    var selection = editor.getSelection();
                    selection.getStartElement().getParent().setStyle("font-size", _size + "px");
                  }
                });
                fontSizeMenuItems["size" + fontSize] = {
                  label: fontSize,
                  command: "size" + fontSize,
                  group: "xiumiFontSize"
                };
              }
              for(i in bgColorList){
                var bgColor = bgColorList[i];
                bgColorItems["bgColor_" + bgColor.value] = CKEDITOR.TRISTATE_OFF;
                editor.addCommand("bgColor_" + bgColor.value, {
                  exec: function(editor){
                    var name = this.name;
                    var _bgColor = name.split("_")[1];
                    var selection = editor.getSelection();
                    selection.getStartElement().getParent().setStyle("background-color", _bgColor);
                  }
                });
                bgColorMenuItems["bgColor_" + bgColor.value] = {
                  label: "<span style='color:white; background-color:" + bgColor.value + ";'>" + bgColor.text + "</span>",
                  command: "bgColor_" + bgColor.value,
                  group: "xiumiBgColor"
                };
              }
              
              fontSizeMenuItems.fontSize.getItems = function(){ return fontSizeItems; }
              bgColorMenuItems.bgColor.getItems = function(){ return bgColorItems; }
              
//            editor.addMenuItems(fontSizeMenuItems);
//            editor.addMenuItems(bgColorMenuItems);
//              
//            editor.contextMenu.addListener( function(startElement, selection, path) {
//              if ((startElement.getAscendant( 'section', true ) || startElement.getAscendant( 'span', true )) && startElement.hasClass("tn-Powered-by-XIUMI")) {
//                return { fontSize: CKEDITOR.TRISTATE_OFF, bgColor: CKEDITOR.TRISTATE_OFF };
//              }
//            });

            }
            CKEDITOR.dialog.add(pluginName, this.path + "dialogs/xiumi.js");
    },
    afterInit: function(editor){
      
    }
  });
})();