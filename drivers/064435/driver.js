'use strict';

const path = require('path');
const ZwaveDriver = require('homey-zwavedriver');

// http://www.pepper1.net/zwavedb/device/154

module.exports = new ZwaveDriver( path.basename(__dirname), {
	capabilities: {
		'measure_battery': {
			'command_class': 'COMMAND_CLASS_BATTERY',
			'command_get': 'BATTERY_GET',
			'command_report': 'BATTERY_REPORT',
			'command_report_parser': report => {
				if (report['Battery Level'] === "battery low warning") return 1;
				
				return report['Battery Level (Raw)'][0];
			}
		}
	}
});

module.exports.on('initNode', function (token){
	const node = module.exports.nodes[token];
	let debouncer = 0;
	if (node) {
		node.instance.CommandClass['COMMAND_CLASS_CENTRAL_SCENE'].on('report', (command, report) => {
			if (command.name === 'CENTRAL_SCENE_NOTIFICATION') {
				if (report.Properties1['Key Attributes'] === 1) {
					if (debouncer === 0) {
						debouncer++;
						
						const button_value = {
							"scene": report.Properties1['Key Attributes'].toString()
						};
						
						Homey.manager('flow').triggerDevice('064435', null, button_value, node.device_data);
						
						setTimeout(() => debouncer = 0, 2000);
					}
				} else {
					const button_value = {
						"scene": report.Properties1['Key Attributes'].toString()
					};
					
					Homey.manager('flow').triggerDevice('064435', null, button_value, node.device_data);
				}
			}
		});
	}
});

Homey.manager('flow').on('trigger.064435', (callback, args, state) => {
	if (state.scene === args.scene) {
		callback(null, true);
		return;
	}
	callback(null, false);
});
