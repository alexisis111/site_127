const { copyStaticAssets, runBuild } = require('next-on-netlify');

runBuild();
copyStaticAssets();