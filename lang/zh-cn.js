CKEDITOR.plugins.setLang("xiumi", "zh-cn", {
  button:{
    label: "秀米模版"
  },
  contextMenu: {
    level0: {
      fontSize: {
        label: "字体大小"
      },
      bgColor: {
        label: "背景颜色"
      }
    },
    level1: {
      fontSize: {
        
      },
      bgColor: {
        red: "红色",
        yellow: "黄色",
        green: "绿色",
        blue: "蓝色",
        
      }
    }
  },
  dialog: {
    main: {
      title: "插入秀米模版",
      imgTitle:"点击查看原图",
      contents:[
        {
          label:"标题",
          title:"标题",
          radioLabel:["模版1", "模版2", "模版3"],
          inputLabel: {
            no:{
              label:"序号(仅对 模版1、模版3 有效)"
            },
            initial:{
              label:"前缀(仅对 模版2 有效)"
            },
            title:{
              label:"标题"
            },
            subTitle:{
              label:"副标题(仅对 模版1 有效)"
            }
          }
        },
        {
          label:"标题卡片",
          title:"标题卡片",
          radioLabel:["模版1", "模版2", "模版3", "模版4", "模版5"],
          inputLabel:{
            title:{
              label:"标题"
            },
            mp:{
              label:"公众号(仅对 模版1 有效)"
            },
            content:{
              label:"内容"
            }
          }
        }
      ]
    }
  }
});