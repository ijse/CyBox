Ext.define('CyBox.view.LoginPanel', {
	extend: 'Ext.form.Panel',
	xtype: 'loginpanel',
	requires: ['Ext.form.*', 'Ext.field.*', 'Ext.Button','Ext.TitleBar'],
	config: {
		fullscreen: true,
		items: [{
			xtype: "toolbar",
			docked: "top",
			title: "注册"
		},{
			xtype: 'textfield',
			name: 'name',
			label: 'Name'
		}, {
			xtype: 'emailfield',
			name: 'email',
			label: 'Email'
		}, {
			xtype: 'passwordfield',
			name: 'password',
			label: 'Password'
		}, {
			xtype: "toolbar",
			docked: "bottom",
			items: [
				{
					xtype: "button",
					text: "返回",
					docked: "left"
				}, {
					xtype: "button",
					text: "登陆",
					docked: "right"
				}
			]
		}]
	}
});