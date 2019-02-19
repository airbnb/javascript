Developer change log should contain an entry for each release/tag. Each entry should include the new tag version
according to [SemVer](http://semver.org/), the date the tag was created, each JIRA issue which work was done against,
and a summary of the work completed.

The format for an entry is as follows:

```markdown
* 1.0.0 (2014-10-30)
  * ABC-123
    * _Major_: description of the major change. Note the upper case letter 'M' in Major
    * _minor_: description of the minor change. Note the lower case letter 'm' in minor
    * _patch_: description of the patch change.
```

Consult the git commit log for complete details of a release/tag.

# Change log (most recent first)
* 3.0.1 (2019-02-19)
  * _minor_: reinstalled major version of eslint to update resolved version of eslint-scope to 3.7.3 per saas-55
* 2.2.0 (2017-03-14)
  * _minor_: Update 'valid-jsdoc' rule from error to warn
* 2.1.0 (2016-12-06)
  * _minor_: Enable eslint for VS code's eslint plugin
