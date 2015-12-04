(function() {
  var pluginName = "xiumi";
  function XiumiDialog(editor) {
    //CKEDITOR.getUrl(CKEDITOR.plugins.get("image").path+"images/noimage.png");
    var dialog = null;
    var lang = editor.lang.xiumi;
    var path = CKEDITOR.plugins.get("xiumi").path;
    var styles = " style=\"border-collapse:separate; border:1px dotted #CCCCCC;\"";
    var previewTemplateHtml = "<a href=\"" + path + "/images/{:imageName}\" target=\"_blank\">" 
                            + "<img style=\"width:100%;height:80px;cursor:pointer;\" title=\"" + lang.dialog.main.imgTitle + "\" src='" + path + "/images/{:imageName}'>";
    
    var tabList = [
      {
        "$tabId": "tab0",
        "imageCount": 3,
        "template":[]
      },
      {
        "$tabId": "tab1",
        "imageCount": 5,
        "template":[]
      }
    ];
    
    tabList[0].template = [
      "<p>&nbsp;</p><section class=\"tn-Powered-by-XIUMI\" style=\"border: 0px; margin: 0.8em 0px 0.5em; box-sizing: border-box; padding: 0px;\"> <section class=\"tn-Powered-by-XIUMI\" style=\"display: inline-block; width: 1.3em; height: 1.3em; border-radius: 50%; text-align: center; font-weight: inherit; line-height: 1.3; font-size: 2.8em; font-family: inherit; font-style: normal; text-decoration: inherit; color: rgb(255, 255, 255); border-color: rgb(249, 110, 87); box-sizing: border-box; background-color: rgb(249, 110, 87);\"> <section class=\"tn-Powered-by-XIUMI\" style=\"box-sizing: border-box;\">{:no}</section> </section> <section class=\"tn-Powered-by-XIUMI\" style=\"display: inline-block; margin-left: 0.7em; padding-top: 0.3em; box-sizing: border-box;\"> <section class=\"tn-Powered-by-XIUMI\" style=\"line-height: 1.4; font-size: 1.5em; font-family: inherit; font-style: normal; font-weight: inherit; text-align: inherit; text-decoration: inherit; color: rgb(42, 52, 58); box-sizing: border-box;\"> <section class=\"tn-Powered-by-XIUMI\" style=\"box-sizing: border-box;\">{:title}</section> </section> <section class=\"tn-Powered-by-XIUMI\" style=\"line-height: 1.4; margin-left: 0.2em; font-size: 1em; font-family: inherit; font-style: normal; font-weight: inherit; text-align: inherit; text-decoration: inherit; color: rgb(135, 139, 140); box-sizing: border-box;\"> <section class=\"tn-Powered-by-XIUMI\" style=\"box-sizing: border-box;\">{:subTitle}</section> </section> </section> </section><p>&nbsp;</p>",
      "<p>&nbsp;</p><section class=\"tn-Powered-by-XIUMI\" style=\"border: 0px; display: inline-block; margin: 0.8em 0px 0.5em; line-height: 1; white-space: nowrap; overflow: hidden; box-sizing: border-box; padding: 0px;\"><section class=\"tn-Powered-by-XIUMI\" style=\"border-bottom-style: solid; border-bottom-width: 1px; border-color: rgb(249, 110, 87); font-size: 1.4em; font-family: inherit; font-style: normal; font-weight: inherit; text-align: inherit; text-decoration: inherit; color: rgb(255, 255, 255); box-sizing: border-box; background-color: transparent;\"><section class=\"tn-Powered-by-XIUMI\" style=\"display: inline-block; height: 1.2em; padding: 0.1em; line-height: 1em; font-size: 1.4em; font-family: inherit; font-style: normal; color: rgb(255, 255, 255); box-sizing: border-box; background-color: rgb(249, 110, 87);\"><section class=\"tn-Powered-by-XIUMI\" style=\"box-sizing: border-box;\">{:initial}<br type=\"_moz\"></section></section><section class=\"tn-Powered-by-XIUMI\" style=\"display: inline-block; padding: 0.2em; line-height: 1; font-size: 1em; font-family: inherit; font-style: normal; font-weight: inherit; text-align: inherit; text-decoration: inherit; color: rgb(42, 52, 58); box-sizing: border-box;\"><section class=\"tn-Powered-by-XIUMI\" style=\"box-sizing: border-box;\">{:title}</section></section></section></section><p>&nbsp;</p>",
      "<p>&nbsp;</p><section class=\"tn-Powered-by-XIUMI\" style=\"border: 0px; margin: 0.8em 0px 0.5em; box-sizing: border-box; padding: 0px;\"><section class=\"tn-Powered-by-XIUMI\" style=\"display: inline-block; float: left; width: 1.3em; height: 1.3em; border-radius: 100%; margin-right: 0.3em; vertical-align: top; text-align: center; box-sizing: border-box; border: 1px solid rgb(249, 110, 87); line-height: 1.2; font-size: 2em; font-family: inherit; font-style: normal; font-weight: bolder; text-decoration: inherit; color: rgb(249, 110, 87); background-color: transparent;\"><section class=\"tn-Powered-by-XIUMI\" style=\"box-sizing: border-box;\">{:no}<br type=\"_moz\"></section></section><section class=\"tn-Powered-by-XIUMI\" style=\"margin-left: 0.3em; vertical-align: bottom; box-sizing: border-box;\"><section class=\"tn-Powered-by-XIUMI\" style=\"line-height: 1.2; font-size: 2em; font-family: inherit; font-style: normal; font-weight: inherit; text-align: inherit; text-decoration: inherit; color: rgb(42, 52, 58); box-sizing: border-box;\"><section class=\"tn-Powered-by-XIUMI\" style=\"box-sizing: border-box;\">{:title}</section></section></section><section style=\"display: block; width: 0; height: 0; clear: both;\"><br></section></section><p>&nbsp;</p>"
    ];
    
    tabList[1].template[0] = "<p>&nbsp;</p><section style=\"border: 0px none; margin: 1em; padding: 0px; box-sizing: border-box;\" class=\"tn-Powered-by-XIUMI\"> <section class=\"tn-Powered-by-XIUMI\" style=\"margin-left: 1em; line-height: 1.4; box-sizing: border-box;\"> <section class=\"tn-Powered-by-XIUMI\" style=\"box-sizing: border-box;\"><span class=\"tn-Powered-by-XIUMI\" style=\"background-color:rgb(249, 110, 87); border-color:rgb(249, 110, 87); border-radius:4px; box-sizing:border-box; color:rgb(255, 255, 255); display:inline-block; font-family:inherit; font-size:1em; font-style:normal; font-weight:inherit; padding:3px 8px; text-align:inherit; text-decoration:inherit\">{:title}</span><span class=\"tn-Powered-by-XIUMI\" style=\"background-color:rgb(204, 204, 204); border-color:rgb(249, 110, 87); border-radius:1.2em; box-sizing:border-box; color:rgb(255, 255, 255); display:inline-block; font-family:inherit; font-size:1em; font-style:normal; font-weight:inherit; line-height:1.2; margin-left:4px; padding:3px 8px; text-align:inherit; text-decoration:inherit\">{:mp}</span></section> </section> <section style=\"margin-top: -11px; padding: 22px 16px 16px; border: 1px solid rgb(192, 200, 209); color: rgb(51, 51, 51); font-size: 1em; font-family: inherit; font-style: normal; font-weight: inherit; text-align: inherit; text-decoration: inherit; background-color: rgb(239, 239, 239); box-sizing: border-box;\" class=\"tn-Powered-by-XIUMI\"> <section style=\"box-sizing: border-box;\" class=\"tn-Powered-by-XIUMI\">{:content}</section> </section></section><p>&nbsp;</p>";
    tabList[1].template[1] = "<p>&nbsp;</p><section class=\"tn-Powered-by-XIUMI\" style=\"margin: 1em; padding: 0px; white-space: normal; text-align: inherit; border: 1px solid rgb(192, 200, 209); display: block; font-size: 1em; font-family: inherit; font-style: normal; font-weight: inherit; text-decoration: inherit; color: rgb(51, 51, 51); background-color: rgb(239, 239, 239); box-sizing: border-box;\"> <section class=\"tn-Powered-by-XIUMI\" style=\"margin: -1em 16px 0px; padding: 0px; border: medium none; line-height: 1.4; box-sizing: border-box;\"> <section class=\"tn-Powered-by-XIUMI\" style=\"box-sizing: border-box;\"><span class=\"tn-Powered-by-XIUMI\" style=\"background-color:rgb(249, 110, 87); border-color:rgb(249, 110, 87); border-radius:4px; box-sizing:border-box; color:rgb(255, 255, 255); display:inline-block; font-family:inherit; font-size:1em; font-style:normal; font-weight:inherit; padding:3px 8px; text-align:center; text-decoration:inherit; white-space:normal\">{:title}</span></section> </section> <section class=\"tn-Powered-by-XIUMI\" style=\"padding: 16px; color: rgb(51, 51, 51); font-size: 1em; line-height: 1.4; font-family: inherit; font-style: normal; box-sizing: border-box;\"> <section class=\"tn-Powered-by-XIUMI\" style=\"box-sizing: border-box;\">{:content}</section> </section>  </section><p>&nbsp;</p>";
    tabList[1].template[2] = "<p>&nbsp;</p><section class=\"tn-Powered-by-XIUMI\" style=\"margin: 1.5em 1em 1em; padding: 0.5em 1em; white-space: normal; text-align: center; border: 1px solid rgb(204, 204, 204); display: block; font-size: 1em; font-family: inherit; font-style: normal; font-weight: inherit; text-decoration: inherit; color: rgb(166, 166, 166); background-color: rgb(255, 255, 255); box-sizing: border-box;\"> <section class=\"tn-Powered-by-XIUMI\" style=\"margin-top: -1em; padding: 0px; border: medium none; line-height: 1.4; box-sizing: border-box;\"> <section class=\"tn-Powered-by-XIUMI\" style=\"box-sizing: border-box;\"><span class=\"tn-Powered-by-XIUMI\" style=\"background-color:rgb(249, 110, 87); border-color:rgb(249, 110, 87); border-radius:4px; box-sizing:border-box; color:rgb(255, 255, 255); display:inline-block; font-family:inherit; font-size:1em; font-style:normal; font-weight:inherit; padding:3px 8px; text-align:center; text-decoration:inherit; white-space:normal\">{:title}</span></section> </section> <section class=\"tn-Powered-by-XIUMI\" style=\"padding: 16px; color: rgb(166, 166, 166); font-size: 1em; line-height: 1.4; font-family: inherit; font-style: normal; text-align: center; box-sizing: border-box;\"> <section class=\"tn-Powered-by-XIUMI\" style=\"box-sizing: border-box;\"> {:content}</section> </section></section><p>&nbsp;</p>";
    tabList[1].template[3] = "<p>&nbsp;</p><section class=\"tn-Powered-by-XIUMI\" style=\"margin: 27px 16px 16px; padding: 8px 16px; text-align: center; border: 1px solid rgb(204, 204, 204); display: block; box-shadow: 5px 5px 2px rgb(165, 165, 165); font-size: 1em; font-family: inherit; font-style: normal; font-weight: inherit; text-decoration: inherit; color: rgb(51, 51, 51); background-color: rgb(255, 255, 240); box-sizing: border-box;\"> <section class=\"tn-Powered-by-XIUMI\" style=\"margin-top: -1.2em; padding: 0px; border: medium none; box-sizing: border-box;\"> <section class=\"tn-Powered-by-XIUMI\" style=\"box-sizing: border-box;\"><span class=\"tn-Powered-by-XIUMI\" style=\"background-color:rgb(249, 110, 87); border-color:rgb(249, 110, 87); border-radius:32px 16px 64px / 8px 48px; box-shadow:4px 4px 2px rgb(165, 165, 165); box-sizing:border-box; color:rgb(255, 255, 255); display:inline-block; font-family:inherit; font-size:1em; font-style:normal; font-weight:inherit; line-height:1.4; padding:4px 8px; text-align:center; text-decoration:inherit; white-space:normal\">{:title}</span></section> </section> <section class=\"tn-Powered-by-XIUMI\" style=\"padding: 16px; color: rgb(51, 51, 51); font-size: 1em; line-height: 1.4; font-family: inherit; font-style: normal; text-align: center; box-sizing: border-box;\"> <section class=\"tn-Powered-by-XIUMI\" style=\"box-sizing: border-box;\">{:content}</section> </section> </section><p>&nbsp;</p>";
    tabList[1].template[4] = "<p>&nbsp;</p><section class=\"tn-Powered-by-XIUMI\" style=\"border: 0px none; margin: 2em 1em 1em; padding: 0px; box-sizing: border-box;\"> <section class=\"tn-Powered-by-XIUMI\" style=\"margin-left: -0.5em; line-height: 1.4; box-sizing: border-box;\"> <section class=\"tn-Powered-by-XIUMI\" style=\"display: inline-block; padding: 3px 8px; border-radius: 4px; color: rgb(255, 255, 255); text-align: inherit; font-size: 1em; font-family: inherit; font-style: normal; font-weight: inherit; text-decoration: inherit; background-color: rgb(249, 110, 87); border-color: rgb(249, 110, 87); box-sizing: border-box;\"> <section class=\"tn-Powered-by-XIUMI\" style=\"box-sizing: border-box;\">{:title}</section> </section> </section> <section class=\"tn-Powered-by-XIUMI\" style=\"margin-top: -24px; padding: 22px 16px 16px; border: 1px solid rgb(249, 110, 87); font-size: 1em; font-family: inherit; font-style: normal; font-weight: inherit; text-align: inherit; text-decoration: inherit; color: rgb(51, 51, 51); background-color: rgb(255, 255, 255); box-sizing: border-box;\"> <section class=\"tn-Powered-by-XIUMI\" style=\"box-sizing: border-box;\">{:content}</section> </section></section><br/>";
    
    return {
            title: lang.dialog.main.title,
            minWidth: 1100,
            minHeight: 400,
            buttons: [
              CKEDITOR.dialog.okButton,
              CKEDITOR.dialog.cancelButton
            ],
            contents: [
              {
                "id": "tab0",
                "label": lang.dialog.main.contents[0].label,
                "title": lang.dialog.main.contents[0].title,
                "elements": [
                  {
                    "type": "vbox",
                    "heights": ["50%", "50%"],
                    "children": [
                      {
                        "type": "vbox",
                        "heights": ["20%", "80%"],
                        "children": [
                          {
                            "id": "tab0TmplIndex",
                            "type": "radio",
                            "default": "0",
                            "items": [
                              [lang.dialog.main.contents[0].radioLabel[0], "0"], 
                              [lang.dialog.main.contents[0].radioLabel[1], "1"], 
                              [lang.dialog.main.contents[0].radioLabel[2], "2"]
                            ]
                          },
                          {
                            "type": "hbox",
                            "widths": ["30%", "30%", "30%"],
                            "children": [
                              {
                                "type": "html",
                                "html": previewTemplateHtml.replace(/{:imageName}/gi, "title0.png")
                              },
                              {
                                "type": "html",
                                "html": previewTemplateHtml.replace(/{:imageName}/gi, "title1.png")
                              },
                              {
                                "type": "html",
                                "html": previewTemplateHtml.replace(/{:imageName}/gi, "title2.png")
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "vbox",
                        "heights": ["50%", "50%"],
                        "children": [
                          {
                            "type": "hbox",
                            "widths": ["15%", "15%", "70%"],
                            "children": [
                              {
                                "id": "no",
                                "type": "text",
                                "label": lang.dialog.main.contents[0].inputLabel.no.label
                              },
                              {
                                "id": "initial",
                                "type": "text",
                                "label": lang.dialog.main.contents[0].inputLabel.initial.label
                              },
                              {
                                "id": "title",
                                "type": "text",
                                "label": lang.dialog.main.contents[0].inputLabel.title.label
                              }
                            ]
                          },
                          {
                            "id": "subTitle",
                            "type": "text",
                            "label": lang.dialog.main.contents[0].inputLabel.subTitle.label
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "tab1",
                "label": lang.dialog.main.contents[1].label,
                "title": lang.dialog.main.contents[1].title,
                "elements": [
                  {
                    "type": "vbox",
                    "heights": ["50%", "50%"],
                    "children": [
                      {
                        "type": "vbox",
                        "heights": ["20%", "80%"],
                        "children": [
                          {
                            "id": "tab1TmplIndex",
                            "type": "radio",
                            "default": "0",
                            "items": [
                              [lang.dialog.main.contents[1].radioLabel[0], "0"], 
                              [lang.dialog.main.contents[1].radioLabel[1], "1"], 
                              [lang.dialog.main.contents[1].radioLabel[2], "2"], 
                              [lang.dialog.main.contents[1].radioLabel[3], "3"], 
                              [lang.dialog.main.contents[1].radioLabel[4], "4"]
                            ]
                          },
                          {
                            "type": "hbox",
                            "widths": ["20%", "20%", "20%", "20%", "20%"],
                            "children": [
                              {
                                "type": "html",
                                "html": previewTemplateHtml.replace(/{:imageName}/gi, "title_card0.png")
                              },
                              {
                                "type": "html",
                                "html": previewTemplateHtml.replace(/{:imageName}/gi, "title_card1.png")
                              },
                              {
                                "type": "html",
                                "html": previewTemplateHtml.replace(/{:imageName}/gi, "title_card2.png")
                              },
                              {
                                "type": "html",
                                "html": previewTemplateHtml.replace(/{:imageName}/gi, "title_card3.png")
                              },
                              {
                                "type": "html",
                                "html": previewTemplateHtml.replace(/{:imageName}/gi, "title_card4.png")
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "vbox",
                        "heights": ["50%", "50%"],
                        "children": [
                          {
                            "type": "hbox",
                            "widths": ["80%", "20%"],
                            "children": [
                              {
                                "id": "title",
                                "type": "text",
                                "label": lang.dialog.main.contents[1].inputLabel.title.label
                              },
                              {
                                "id": "mp",
                                "type": "text",
                                "label": lang.dialog.main.contents[1].inputLabel.mp.label
                              }
                            ]
                          },
                          {
                            "id": "content",
                            "type": "textarea",
                            "label": lang.dialog.main.contents[1].inputLabel.content.label
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ],
            onLoad: function() {
              // Act on tab switching
              this.on('selectPage', function (event) {
                this.foreach(function(element){ 
                });
              })
            },
            onShow: function() {
              dialog = CKEDITOR.dialog.getCurrent();
            },
            onHide: function() {
            },
            onOk: function() {
              var selectedTabId = CKEDITOR.dialog.getCurrent().definition.dialog._.currentTabId;
              var templateIndex = dialog.getContentElement(selectedTabId, selectedTabId + "TmplIndex").getValue();
              var html = "";
              for (i in tabList){
                if (selectedTabId == tabList[i].$tabId) {
                  html = tabList[i].template[templateIndex];
                  break;
                }
              }
              
              var fieldList = ["title", "mp", "content", "initial", "subTitle", "no"];
              for (i in fieldList){
                var field = fieldList[i];
                var element = dialog.getContentElement(selectedTabId, fieldList[i]);
                if(element) {
                  var fieldValue = element.getValue();
                  html = html.replace(new RegExp("{:" + field + "}", "gi"), fieldValue);
                }
              }
              editor.insertHtml(html);
            },
            onCancel: function() {
            },
            resizable: CKEDITOR.DIALOG_RESIZE_BOTH
    };
  }

  CKEDITOR.dialog.add(pluginName, function(editor) {
    return XiumiDialog(editor);
  });
})();