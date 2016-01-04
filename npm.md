# npm at iAdvize

### How to setup iAdvize npm private registry in my environment?

- Update your npm version with `npm i npm@latest -g` because [scoped package require at least npm v2.7.0](https://docs.npmjs.com/getting-started/scoped-packages#update-npm-and-log-in).
- Login to [artifactory](https://iadvize.artifactoryonline.com/iadvize/webapp/). Ask your own swarm Lead Developer (or fallback on @FGRibreau) if you don't have an access.
- Go to your artifactory [profile](https://iadvize.artifactoryonline.com/iadvize/webapp/#/profile) to retrieve your `API_KEY`.
- Run

```shell
curl -uLOGIN:ENCRYPTED_PWD https://iadvize.artifactoryonline.com/iadvize/api/npm/iadvize-npm/auth/iadvize >> ~/.npmrc
```

this will add the @iadvize scope to your `~/.npmrc`. Your `npmrc` should contain something like this

```js
@iadvize:registry=https://iadvize.artifactoryonline.com/iadvize/api/npm/iadvize-npm/
//iadvize.artifactoryonline.com/iadvize/api/npm/iadvize-npm/:_password=an-awesome-and-secure-password-lol
//iadvize.artifactoryonline.com/iadvize/api/npm/iadvize-npm/:username=fgribreau
//iadvize.artifactoryonline.com/iadvize/api/npm/iadvize-npm/:email=fg@iadvize.com
//iadvize.artifactoryonline.com/iadvize/api/npm/iadvize-npm/:always-auth=true
```

- then:

```shell
npm config set @iadvize:registry https://iadvize.artifactoryonline.com/iadvize/api/npm/iadvize-npm
```

- finally check that your setup is complete by trying to install a private npm package (see below).

### How to install a private iAdvize package?

Same as a usual `npm install`

```
npm install @iadvize/health-check-library
```

### How and where to publish a public npm module?

\#tradeoff We **would like** to use scoped package and artifactory as well for that **BUT**, **currently** they are not configured on npm so include the public git url inside your package.json. 

If you really need to want your package published publicly under @iadvize scope, contact your lead to configure artifactory accordingly and don't forget to update this documentation!

### How and where to publish a private iAdvize npm package?

Your package.json should have a `name` attribute prefixed `@iadvize/`


### How to use iAdvize private npm repository with CleverCloud?

Copy/paste the npmrc file from [my-first-node-service/clevercloud/npmrc](https://github.com/iadvize/my-first-nodejs-service/commit/3b05aff9d03cd1ef63be035b707b5ccd689dab21) into your own project `clevercloud/npmrc`. Don't forget to specify the right scoped package definition inside `package.json` and at `require` time.
