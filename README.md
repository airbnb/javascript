iAdvize JavaScript Conventions [![Circle CI](https://circleci.com/gh/iadvize/javascript-convention/tree/master.svg?style=svg)](https://circleci.com/gh/iadvize/javascript-convention/tree/master)
==============================

# Code Style

We use this [.jscsrc](https://github.com/iadvize/javascript-convention/blob/master/.jscsrc) file for it (JavaScript Code Style checker). **[Human readable conventions are available here](https://circle-artifacts.com/gh/iadvize/javascript-convention/7/artifacts/0/home/ubuntu/javascript-convention/jscs.html)**, we used [jscs2doc](https://github.com/FGRibreau/jscs2doc) to generate it.


# How to setup

- [iAdvize Private NPM](/npm.md)
- [New Relic Browser into your project](/newrelic.md)


# Automatic convention enforcement

Add a `.checkbuild` file at the root directory of your project with the following content:

```js
{
  "extends": [".checkbuildrc_base"],
  "urls": ["https://raw.githubusercontent.com/iadvize/javascript-convention/master/.checkbuildrc_base"]
}
```

this will ensure your project follows iAdvize JavaScript conventions.

# Philosophy

Here is the main principle to keep in mind with every conventions we have to create:

[![development-principles-philosophy-129-638](https://cloud.githubusercontent.com/assets/138050/13495211/b054921a-e149-11e5-9299-0aa87e75c7ad.jpg)](https://www.uslide.io/presentations/Aw6sX5ug-Tfzw5rNXAmdJg)

In other word, don't create conventions that **are not** or **can't be** **automatically** enforced. You will forget, someone will forget. We are human, we are unreliable. Here is two talks on that subject: [Development Principles and Philosophy](https://www.uslide.io/presentations/Aw6sX5ug-Tfzw5rNXAmdJg) and [Automatic constraints as a team maturity accelerator for startups](http://fr.slideshare.net/FGRibreau/automatic-constraints-as-a-team-maturity-accelerator-for-startups)

[![automatic-constraints-as-a-team-maturity-accelerator-for-startups-1-638](https://cloud.githubusercontent.com/assets/138050/13495378/9a8e69aa-e14a-11e5-8970-52e004f5d22c.jpg)](http://fr.slideshare.net/FGRibreau/automatic-constraints-as-a-team-maturity-accelerator-for-startups)
