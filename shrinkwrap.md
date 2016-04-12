Shrinkwrap - How we lock down dependency versions @iAdvize
==========================================================

Shrinkwrap is required for **frontend** applications as well as **backend** applications.

`npm shrinkwrap` **locks down the versions of a package's dependencies** (**and every sub-packages**) so that you can control exactly which versions of each dependency will be used when your package is installed. The `package.json` file is still required if you want to use `npm install`.

By default (**it's not the behaviour we want**), npm install recursively installs the target's dependencies (as specified in package.json), choosing **the latest available version** that satisfies the dependency's semver pattern. In some situations, particularly when shipping software where each change is tightly managed, **it's desirable to fully specify each version of each dependency recursively so that subsequent builds and deploys do not inadvertently pick up newer versions of a dependency that satisfy the semver pattern** (that's what we want!). Specifying specific semver patterns in each dependency's package.json would facilitate this, but that's not always possible or desirable, as when another author owns the npm package. It's also possible to check dependencies directly into source control, but that may be undesirable for other reasons (we are not there yet, and we may never need this, it's the most extreme option).


# How to start a new project

- setup your `package.json`, install dependencies
- run `npm shrinkwrap`
- commit `npm-shrinkwrap.json`
- add a the following script in package.json:

```
{
  "scripts":{
    "postinstall": "npm outdated"
  }
}
```

- add **be sure** to have a [`.checkbuild`](https://github.com/iadvize/my-first-nodejs-service/blob/master/.checkbuild) file inside your root folder with `david` activated. Check-build MUST run at each build in our CI because it will notify you (thanks to david) when new versions are available.


# How to add a new dependency

- `npm i my-new-dependency -s`
- `npm shrinkwrap`
- commit both updated `package.json` and `npm-shrinkwrap.json`
- push, done.

# How to upgrade a dependency

Now let say `npm outdated` displayed a new available version or you proactively (:heart:) received a notification from the CI thanks to the awesome check-build tool.

```
Package  Current  Wanted      Latest  Location
async      1.5.2   1.5.2  2.0.0-rc.3  iadvize-my-first-nodejs-service
```

Here we can upgrade async to 2.0.0-rc.3:

- npm i async@2.0.0-rc.3 -S
- npm shrinkwrap
- `npm test` (because you have tests right?), update implementation if necessary
- commit both updated `package.json` and `npm-shrinkwrap.json`
- push, done.
