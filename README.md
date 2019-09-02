# Jira link comment app

Tired of copying Atlassian Jira issue link to your github pull requests every time ?
Install this app and never bother to copy paste the link every time

## setup
create a file in your repo under .github/jira-comment-app.yml with following config
```shell
active: true
organization: <Your jira organization name goes here> 
# for example, for this account https://myorganization.atlassian.net/ the settings would be organization: myorganization
```

## usage
when creating branches in your Github repository use jira code for example
```shell
bug_fix_for_pm-1334
```
please note that the code should follow jira id format ```pm-1234```

## Contributing

If you have suggestions for how my-first-app could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2019 Girish Sivadanam <giri3sg@gmail.com>
