var department_data = [];

odoo.define("org_chart_organization.org_chart", function (require) {
  "use strict";

  var core = require('web.core');
  var session = require('web.session');
  var ajax = require('web.ajax');
  var Widget = require('web.Widget');
  var ControlPanelMixin = require('web.ControlPanelMixin');
  var QWeb = core.qweb;
  var _t = core._t;
  var _lt = core._lt;

  var OrgChartDepartment = Widget.extend(ControlPanelMixin, {
    init: function(parent, context) {
      this._super(parent, context);
        var self = this;
        if (context.tag == 'org_chart_organization.org_chart_department') {
            self._rpc({
                model: 'org.chart.department',
                method: 'get_department_data',
            }, []).then(function(result){
                department_data = result;
            }).done(function(){
                self.render();
                self.href = window.location.href;
            });
        }
    },
    willStart: function() {
      return $.when(ajax.loadLibs(this), this._super());
    },
    start: function() {
      var self = this;
      return this._super();
    },
    render: function() {
        var super_render = this._super;
        var self = this;
        var org_chart = QWeb.render('org_chart_organization.org_chart_template', {
            widget: self,
        });
        $( ".o_control_panel" ).addClass( "o_hidden" );
        $(org_chart).prependTo(self.$el);
        return org_chart;
    },
    reload: function () {
      window.location.href = this.href;
    },
  });

  core.action_registry.add('org_chart_organization.org_chart_department', OrgChartDepartment);

  return OrgChartDepartment;

});
