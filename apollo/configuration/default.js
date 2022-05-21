export default () => ({
    httpEndpoint: 'https://api.github.com/graphql',
  
    getAuth: () => `Bearer ${process.env.GH_TOKEN}`,
  });
  