import { useReducer, useMemo, useEffect, useContext } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import MyLibraryContext from './MyLibraryContext'
import UserContext from 'context/user/UserContext';
import initialMyLibraryState from './initialMyLibraryState'
import myLibraryReducer from 'reducers/myLibrary/myLibrary.reducer'
import * as action from "reducers/myLibrary/myLibrary.actions";
import { ChildrenProps } from 'interfaces/global';

export default function MyLibraryProvider(props: ChildrenProps) {
	const [userState, dispatch] = useReducer(myLibraryReducer, initialMyLibraryState)
	const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0()
	const {dbUser} = useContext(UserContext)

	useEffect(() => {
		const initMyLibrary = async () => {
			const token = await getAccessTokenSilently()
			if (!isLoading && isAuthenticated && token && dbUser) {
				action.initMyLibraryAction(dispatch, token, dbUser._id)
			}
		}
		initMyLibrary()
	}, [isAuthenticated, dbUser])

	const memoProvider = useMemo(
		() => ({
			...userState
		}), [
		userState
	]
	);

	return (
		<MyLibraryContext.Provider value={memoProvider}>
			{props.children}
		</MyLibraryContext.Provider>
	)
}