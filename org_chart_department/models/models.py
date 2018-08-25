# -*- coding: utf-8 -*-
from odoo import models, fields, api

class OrgChartDepartment(models.Model):
	_name = 'org.chart.department'

	name = fields.Char("Org Chart Department")

	@api.model
	def get_department_data(self):
		departments = self.env['hr.department'].search([])
		data = [{
			'id': -1,
			'text': self.env.user.company_id.name,
		}]
		for department in departments:
			department_data = {'id': department.id, 'text': department.name, 'parent': department.parent_id.id}
			if not department.parent_id.id:
				department_data['parent'] = -1
			data.append(department_data)

		return {'values': data}
