export const addListing = (listing) => {
	return {
		type: 'ADD_LISTING',
		value: listing
	}
}

export const removeListing = (index) => {
	return {
		type: 'REMOVE_LISTING',
		value: index
	}
}

export const userLogin = () => {
	return {
		type: 'LOGIN',
		value: true
	}
}

export const authenticate = (user, boolean) => {
	return {
		type: "AUTHENTICATE",
		value: {
			boolean: boolean,
			user: user
		}
	};
};