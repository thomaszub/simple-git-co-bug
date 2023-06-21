const { simpleGit, CleanOptions } = require('simple-git')

simpleGit().clean(CleanOptions.FORCE)
simpleGit().checkout(["-f", "dev", "--"]).then(console.log)
