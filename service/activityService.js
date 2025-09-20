const getActivityService = async(username) => {
    try {
        const fetchUrl = `https://api.github.com/users/${username}/events`

        const payload = await fetch(fetchUrl);
        const data = await payload.json();

        if(data.status === 404) {
            throw new Error('user tidak ditemukan');
        };

        const activity = data.map((event) => {
            switch(event.type) {
                case 'WatchEvent':
                    return `Starred ${event.repo.name}`;
                case 'PushEvent':
                    return `Pushed ${event.payload.commits.length} to ${event.repo.name}`;
                case 'PullRequestEvent':
                    return `Pull Request to ${event.repo.name}`;
                case 'IssueCommentEvent': 
                    return `Commented to ${event.repo.name}`;
                case 'IssuesEvent': 
                    return `Opened a new issue in ${event.repo.name}`;
                default: 
                    return `Performed ${event.type} in ${event.repo.name}`;
            };
        });

        return activity;

    } catch(error) {
        console.error(error);
    };
};

module.exports = {
    getActivityService
}