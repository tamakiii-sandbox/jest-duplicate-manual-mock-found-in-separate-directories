'use strict';

import { config } from '../config/bbb';

export function doit() {
	return 'b < name is: ' + config.name;
};