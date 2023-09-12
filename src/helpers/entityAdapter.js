import isArray from 'lodash/isArray';
import toInteger from 'lodash/toInteger';
import toNumber from 'lodash/toNumber';

export default class EntityAdapter {
	RULES = {
		noCondition: 'noCondition',
		id: 'id',
		number: 'number',
		positiveNumber: 'positiveNumber',
		intOrNull: 'intOrNull',
		numberOrNull: 'numberOrNull',
		nullOrNumber: 'nullOrNumber',
		string: 'string',
		bool: 'bool',
		date: 'date',
		time: 'time',
		dateTime: 'dateTime',
		fullDate: 'fullDate',
		fullMsDate: 'fullMsDate',
		arrayID: 'arrayID',
		arrayNumber: 'arrayNumber',
		arrayDate: 'arrayDate',
		arrayString: 'arrayString',
		arrayObject: 'arrayObject',
		ISOString: 'ISOString',
		object: 'object',
		left_menu: 'left_menu',
	};

	fields = [];

	values = [];

	excludes = [];

	addValue(paramsName, value) {
		this.values.push({
			paramsName,
			value,
		});
	}

	addField(rule, objectName, paramsName = null) {
		this.fields.push({
			rule,
			objectName,
			paramsName: paramsName || objectName,
		});
	}

	addExcludeField(fieldName) {
		this.excludes.push(fieldName);
	}

	adapt(rawObject) {
		return this.processData(rawObject, 'paramsName', 'objectName');
	}

	adaptList(rawList) {
		if (!isArray(rawList)) {
			return [];
		}

		return rawList.map(rawObject => {
			return this.adapt(rawObject);
		});
	}

	prepare(rawObject) {
		const isPreparing = true;

		return this.processData(rawObject, 'objectName', 'paramsName', isPreparing);
	}

	prepareList(rawList) {
		if (!isArray(rawList)) {
			return [];
		}

		return rawList.map(rawObject => {
			return this.prepare(rawObject);
		});
	}

	processData(rawObject, sourceName, targetName) {
		const result = {};
		this.values.forEach(item => {
			const fieldName = item[targetName];
			result[fieldName] = item.value;
		});

		this.fields.forEach(field => {
			const { rule } = field;
			const fieldName = field[targetName];
			const valueName = field[sourceName];
			const value = rawObject[valueName];

			if (this.excludes.includes(valueName)) {
				return;
			}

			switch (rule) {
				case this.RULES.id:
					result[fieldName] = toInteger(value);
					break;

				case this.RULES.number:
					result[fieldName] = toNumber(value) || 0;
					break;

				case this.RULES.positiveNumber:
					result[fieldName] = Math.max(0, toNumber(value) || 0);
					break;

				case this.RULES.intOrNull:
					result[fieldName] = value === 0 || toInteger(value) > 0 ? toInteger(value) : null;
					break;

				case this.RULES.nullOrNumber:
					result[fieldName] = value > 0 ? toInteger(value) : null;
					break;

				case this.RULES.numberOrNull:
					result[fieldName] = value === 0 || toNumber(value) > 0 ? toNumber(value) : null;
					break;

				case this.RULES.string:
					result[fieldName] = value ? String(value) : '';
					break;

				case this.RULES.bool:
					result[fieldName] = Boolean(value);
					break;

				case this.RULES.arrayID:
					result[fieldName] = this.getArrayID(value);
					break;

				case this.RULES.arrayNumber:
					result[fieldName] = this.getArrayNumber(value);
					break;

				case this.RULES.arrayString:
					result[fieldName] = this.getArrayString(value);
					break;

				case this.RULES.arrayObject:
					result[fieldName] = this.getArrayObject(value);
					break;

				case this.RULES.object:
					result[fieldName] = { ...value };
					break;

				default:
					result[fieldName] = value;
			}
		});

		return result;
	}

	getArrayID(rawArray) {
		if (!isArray(rawArray)) {
			return [];
		}

		return rawArray.map(item => {
			return toInteger(item);
		});
	}

	getArrayNumber(rawArray) {
		if (!isArray(rawArray)) {
			return [];
		}

		return rawArray.map(item => {
			return toNumber(item) || 0;
		});
	}

	getArrayString(rawArray) {
		if (!isArray(rawArray)) {
			return [];
		}

		return rawArray.map(item => {
			return String(item);
		});
	}

	getArrayObject(rawArray) {
		if (!isArray(rawArray)) {
			return [];
		}

		return rawArray;
	}

	clearExcludes() {
		this.excludes = [];
	}
}
