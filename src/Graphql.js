import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

const API_URL = "https://mty-backend.herokuapp.com";

const http_link = createHttpLink({
	uri:`${API_URL}/graphql`
})

export default new ApolloClient({
	link:http_link,
	cache:new InMemoryCache()
})
