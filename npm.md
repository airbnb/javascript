# How to setup iAdvize npm private registry in my environment?

- Update your npm version with `npm i npm@latest -g` because [scoped package require at least npm v2.7.0](https://docs.npmjs.com/getting-started/scoped-packages#update-npm-and-log-in).
- Login to [artifactory](https://iadvize.artifactoryonline.com/iadvize/webapp/)
- Go to your artifactory [profile](https://iadvize.artifactoryonline.com/iadvize/webapp/#/profile) to retrieve your `API_KEY`.
- Run

```shell
curl -u LOGIN:API_KEY https://iadvize.artifactoryonline.com/iadvize/api/npm/iadvize-npm/auth/iadvize >> ~/.npmrc
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

# How to install a private iAdvize package?

Same as a usual `npm install`

```
npm install @iadvize/health-check-library
```

# How and where to publish a public npm module?

Simply use the official npm repository for that. Don't prefix your package name with a scope and use `npm publish`.

# How and where to publish a private iAdvize npm package?

Your package.json should have a `name` attribute prefixed `@iadvize/`
