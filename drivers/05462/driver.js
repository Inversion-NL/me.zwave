"use strict";

const path			= require('path');
const ZwaveDriver	= require('homey-zwavedriver');

// http://www.pepper1.net/zwavedb/device/18

module.exports = new ZwaveDriver( path.basename(__dirname), {
	debug: true,
	capabilities: {
		onoff:
		[
				{
					command_class			: 'COMMAND_CLASS_SWITCH_BINARY',
					command_get				: 'SWITCH_BINARY_GET',
					command_set				: 'SWITCH_BINARY_SET',
					command_set_parser		: value => {
						return { 'Switch Value': value }
					}
				},
				{
					command_class			: "COMMAND_CLASS_SWITCH_BINARY",
					command_report			: 'SWITCH_BINARY_REPORT',
					command_report_parser	: report => {
						Homey.log('[ZME DEBUG] report:', report);
						if( typeof report['Value'] === 'string' ) {
							var state_on = false;

							Homey.log('[ZME DEBUG] Value:', report['Value'])

							if (report['Value'] === 'on/enable') {
								state_on = true;
								Homey.log('[ZME DEBUG] state_on:', state_on);
							} else {
								state_on = false;
								Homey.log('[ZME DEBUG] state_on:', state_on);
							}

							return state_on;
						} else {
							Homey.log('[ZME DEBUG] Value != string, using -> Value (Raw) [0]:', report['Value (Raw)'][0])
							return report['Value (Raw)'][0] > 0;
						}
					}
				}
		]
	},
	settings: {
		"led_mode" : {
			"index" : 1,
			"size" : 1,
			"parser" : function (input) {
				return new Buffer([parseInt(input)]);
			},
		},
			"switch_off_after": {
			"index": 2,
			"size": 2,
		},
		"invert_buttons" : {
			"index" : 11,
			"size" : 1,
			"parser" : function (input) {
				return new Buffer([parseInt(input)]);
			},
		},
			"switch_by_buttons": {
			"index": 12,
			"size": 1,
		},
		"action_on_single_press_or_hold" : {
			"index" : 13,
			"size" : 1,
			"parser" : function (input) {
				return new Buffer([parseInt(input)]);
			},
		},
		"action_on_double_press_or_hold" : {
			"index" : 14,
			"size" : 1,
			"parser" : function (input) {
				return new Buffer([parseInt(input)]);
			},
		},
		"switch_all_commands" : {
			"index" : 15,
			"size" : 1,
			"parser" : function (input) {
				return new Buffer([parseInt(input)]);
			},
		},
      "button_down_press": {
			"index": 16,
			"size": 1,
		},
			"energy_consumption": {
			"index": 20,
			"size": 2,
			"parser": function( input ) {
				return new Buffer([ parseInt(input) ]);
			},
		},
	}
})
