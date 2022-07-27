import Layout from '../../components/Layout';
import MovieDetails from '../../components/MovieDetails';
import { useRouter } from 'next/router';

export default function movie(props) { //static generations

    const router = useRouter();

    const id = router.query.movie;

    return (
        <Layout>
            <head>
                <title>TMDB | Details</title>
            </head>
            <MovieDetails id={id}></MovieDetails>
        </Layout>
    )
}
export async function getServerSideProps(context) { //server-side-rendering 
    return {
        props: {},
    }
}