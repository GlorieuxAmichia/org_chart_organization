# -*- coding: utf-8 -*-
{
	'name': "Org Chart Organization",
	'sequence': 0,
	'summary': """Dinamic display of your Departement Organization""",
	'description': """Dinamic display of your Departement Organization""",
	'author': "SLife Organization, Odoo Community Association (OCA)",
	'category': 'Human Resources',
	'version': '1.0',
	'license': 'AGPL-3',
	'depends': ['hr'],
	'data': ['views/org_chart_views.xml'],
	'images': [
		'static/src/img/main_screenshot.png'
	],
	'qweb': [
        "static/src/xml/org_chart_department.xml",
    ],
	'installable': True,
	'auto_install': False,
}
