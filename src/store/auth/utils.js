import EntityAdapter from '~/helpers/entityAdapter';

const userFields = {
	id: 'id',
	userName: 'username',
	firstName: 'first_name',
	lastName: 'last_name',
	email: 'email',
	statusID: 'status_id',
	userRoles: 'user_roles',
	roles: 'roles',
	adminType: 'admin_type',
	avatar: 'avatar',
	langID: 'language_id',
	websiteID: 'website_id',
	websiteIDs: 'website_ids',
	partnerID: 'partner_id',
	partnerIDs: 'partner_ids',
};

const userAdapter = createUserAdapter();

// Adapt ------------------------------------------------------------------------------------------

export function adaptUser(rawData = {}) {
	const adaptedData = userAdapter.adapt(rawData);

	if (!adaptedData.userName) {
		adaptedData.userName = adaptedData.email;
	}
	adaptedData.name = adaptedData.userName;
	adaptedData.fullName = `${adaptedData.firstName} ${adaptedData.lastName}`;

	return {
		adaptedData,
	};
}

// Adapters ---------------------------------------------------------------------------------------

function createUserAdapter() {
	const adapter = new EntityAdapter();
	const rules = adapter.RULES;

	adapter.addField(rules.id, 'id', userFields.id);
	adapter.addField(rules.id, 'statusID', userFields.statusID);
	adapter.addField(rules.id, 'langID', userFields.langID);
	adapter.addField(rules.id, 'websiteID', userFields.websiteID);
	adapter.addField(rules.id, 'partnerID', userFields.partnerID);
	adapter.addField(rules.id, 'adminType', userFields.adminType);

	adapter.addField(rules.string, 'userName', userFields.userName);
	adapter.addField(rules.string, 'firstName', userFields.firstName);
	adapter.addField(rules.string, 'lastName', userFields.lastName);
	adapter.addField(rules.string, 'email', userFields.email);
	adapter.addField(rules.string, 'avatar', userFields.avatar);

	adapter.addField(rules.arrayString, 'userRoles', userFields.userRoles);
	adapter.addField(rules.arrayID, 'roles', userFields.roles);
	adapter.addField(rules.arrayID, 'websiteIDs', userFields.websiteIDs);
	adapter.addField(rules.arrayID, 'partnerIDs', userFields.partnerIDs);

	return adapter;
}
