'use strict';

import { config } from '../config/aaa';

export function doit() {
	return 'a < type is: ' + config.type;
};