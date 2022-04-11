var getUserRepos = function() {
    fetch("https://api.github.com/users/octocat/repos");
    //fetch("https://api.github.com/users/octocat/repos");
};

getUserRepos();