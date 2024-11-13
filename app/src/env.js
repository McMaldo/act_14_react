const BASE_URL= import.meta.env.VITE_API_URL;

const ENDPOINT = {
	BASE_URL: BASE_URL,

	GET_PLATE_ALL: `${BASE_URL}plate/all`,
	GET_PLATE_BY_NAME: `${BASE_URL}plate/`,

	POST_USER_LOGIN: `${BASE_URL}user/login`,
	POST_USER_REGISTER: `${BASE_URL}user/register`
}

export default ENDPOINT;