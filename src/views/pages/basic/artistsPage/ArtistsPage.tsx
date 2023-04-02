import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getArtistApi } from '@/api/music/artists';
import ArtistsBComponent from '@/views/components/basic/artistsBComponent/ArtistsBComponent';
import HelmetSEO from "@/views/utils/HelmetSEO";

const ArtistsPage = () => {
	const [artists, setArtists] = useState([]);
	const params: any = useParams();

	useEffect(() => {
		let isMounted = true;
		getArtistApi().then((res: any) => {
			isMounted && res && setArtists(res);
		})
		return () => { isMounted = false }
	}, [])

	return (
		isNaN(parseInt(params.artistId)) ? (
			<HelmetSEO
				title='Artists | Audity'
				description='Audity Artists Page'
			>
				<ArtistsBComponent artists={artists} />
			</HelmetSEO>
		) : (
			<Outlet />
		)
	)
}

export default ArtistsPage;