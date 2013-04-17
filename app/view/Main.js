Ext.define('CyBox.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: '首页',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'CyBox'
                },

                html: [
                    "Welcome to CyBox!"
                ].join("")
            },
            {
                title: '发号中心',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: '发号中心'
                    },
                    {
                        xtype: 'panel',
                        html: [
                            "<img src='",
                            "http://image.123youxi.net/buckyball/cardAds/1366098452115.jpg",
                            "' />"
                        ].join("")
                    }
                ]
            }
        ]
    }
});
