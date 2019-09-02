module.exports = app => {
  const regex = /(PM|pm)-[0-9]+/g;

  app.on('pull_request.reopened',  async context => {
    console.log('pull req opened');
    try{
      const config = await context.config('jira-comment-app.yml')

      if(!config || !config.organization || !config.active){
        app.log('please check correct settings for .github/jira-comment-app.yml')
        return;
      }
      var jiraPrefix = `https://${config.organization}.atlassian.net/browse/`
      const pmCode = context.payload.pull_request.head.ref.match(regex);
      const result = jiraPrefix + pmCode;
      const issueComment = context.issue({
        body: `Checkout the issue here: <a href="${result}">${result}</a>`
      });
      return context.github.issues.createComment(issueComment);
    }
    catch(e){
      return console.log(e);
    }
  })
};
