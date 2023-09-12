import { cloneDeep, keys } from 'lodash';

export function fill(source, target, withCreatingKeys = false) {
	const sourceKeys = keys(source);
	const targetKeys = keys(target);
	const result = cloneDeep(target);
	sourceKeys.forEach(key => {
		if (!targetKeys.includes(key) && !withCreatingKeys) {
			return;
		}
		result[key] = source[key];
	});

	return result;
}
