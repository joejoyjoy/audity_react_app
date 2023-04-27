import { registerLoginUserAPI } from '@/api/user';
import * as UserTypes from './user.types'

export async function registerLoginUserAction(dispatch: any, user: any) {
	try {
		const response = await registerLoginUserAPI({ userId: user.sub }, user.__raw)

		if (response.status === 200 || response.status === 201) {
			return dispatch({
				type: UserTypes.REGISTER_LOGIN_USER,
				payload: {
					auth0User: user,
					user: response.user
				}
			})
		} else {
			throw new Error()
		}
	} catch (err) {
		console.log(err);
	}
}