import {useFetch} from "./useFetchCustomHook";
export const FetchHookComponent = ({user}) => {

    const { data, loading, error } = useFetch(`https://api.github.com/users/${user}`);
    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>{JSON.stringify(error)}</h1>
    if(data) return <img src={data.avatar_url}></img>
}