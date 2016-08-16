"use strict";
        
const path = require('path');
const ZwaveDriver = require('homey-zwavedriver');
        
// http://www.pepper1.net/zwavedb/device/119
// Product Name:	Flush-Mountable Blind Control v1.3
// Brand Name:  	Z-Wave.Me
// Product Line:	Düwi modification

        module.exports = new ZwaveDriver(path.basename(__dirname), {
            debug: true,
            capabilities: {
                'onoff': {
                    'command_class': 'COMMAND_CLASS_SWITCH_MULTILEVEL',
                    'command_get': 'SWITCH_MULTILEVEL_GET',
                    'command_set': 'SWITCH_MULTILEVEL_SET',
                    'command_set_parser': function (value) {
                        return {
                            'Value': value ? 'on/enable' : 'off/disable',
                            'Dimming Duration': 1
                        }
                    },
                    'command_report': 'SWITCH_MULTILEVEL_REPORT',
                    'command_report_parser': function (report) {
                        return report['Value (Raw)'][0] > 0;
                    }
                },
                'dim': {
                    'command_class': 'COMMAND_CLASS_SWITCH_MULTILEVEL',
                    'command_get': 'SWITCH_MULTILEVEL_GET',
                    'command_set': 'SWITCH_MULTILEVEL_SET',
                    'command_set_parser': function (value) {
                        return {
                            'Value': Math.min(value * 100, 99),
                            'Dimming Duration': 1
                        }
                    },
                    'command_report': 'SWITCH_MULTILEVEL_REPORT',
                    'command_report_parser': function (report) {
                        return report['Value (Raw)'][0] / 100;
                    }
                }
            },
            settings: {
                "led_mode": {
                    "index": 1,
                    "size": 1,
                    "parser": function (input) {
                        return new Buffer([parseInt(input)]);
                    }
                },
                "auto_close_after": {
                    "index": 2,
                    "size": 2,
                    "parser": function (input) {
                        return new Buffer([parseInt(input)]);
                    }
                },
                "what_to_do_on_RF_close_command": {
                    "index": 3,
                    "size": 1,
                    "parser": function (input) {
                        return new Buffer([parseInt(input)]);
                    }
                },
                "full_close_time": {
                    "index": 4,
                    "size": 1,
                    "parser": function (input) {
                        return new Buffer([parseInt(input)]);
                    }
                },
                "full_open_time": {
                    "index": 5,
                    "size": 1,
                    "parser": function (input) {
                        return new Buffer([parseInt(input)]);
                    }
                },
                "node_id_of_the_blocking_device": {
                    "index": 6,
                    "size": 1,
                    "parser": function (input) {
                        return new Buffer([parseInt(input)]);
                    }
                },
                "on_which_command_from_blocking_node_to_enable_the_protection": {
                    "index": 7,
                    "size": 1,
                    "parser": function (input) {
                        return new Buffer([parseInt(input)]);
                    }
                },
                "stop_or_revert_if_opposite_button_is_pressed": {
                    "index": 8,
                    "size": 1,
                    "parser": function (input) {
                        return new Buffer([parseInt(input)]);
                    }
                },
                "invert_open_and_close_relays": {
                    "index": 9,
                    "size": 1,
                    "parser": function (input) {
                        return new Buffer([parseInt(input)]);
                    }
                },
                "typical_click_timeout": {
                    "index": 10,
                    "size": 1,
                    "parser": function (input) {
                        return new Buffer([parseInt(input)]);
                    }
                },
                "invert_buttons": {
                    "index": 11,
                    "size": 1,
                    "parser": function (input) {
                        return new Buffer([parseInt(input)]);
                    }
                },
                "switch_by_buttons": {
                    "index": 12,
                    "size": 1,
                    "parser": function (input) {
                        return new Buffer([parseInt(input)]);
                    }
                },
                "action_on_button_single_press_or_hold": {
                    "index": 13,
                    "size": 1,
                    "parser": function (input) {
                        return new Buffer([parseInt(input)]);
                    }
                },
                "send_the_following_switch_all_commands": {
                    "index": 15,
                    "size": 1,
                    "parser": function (input) {
                        return new Buffer([parseInt(input)]);
                    }
                }
            }
        })
