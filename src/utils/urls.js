const getGitHubApiUrl = (username, type) => {
    const urlBase = 'http://api.github.com/users'
    const internalUsername = username ? `/${username}` : '';
    const internalType = type ? `/${type}` : '';

    console.log(`${urlBase}${internalUsername}${internalType}`);

    return `${urlBase}${internalUsername}${internalType}`;
}

export default getGitHubApiUrl;