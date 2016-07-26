# Guide de pratique d'Airbnb pour React/JSX

*Une approche la plus raisonnable possible pour React et JSX*

## Table des matières

  1. [Règles de base](#basic-rules)
  1. [Class vs `React.createClass` vs stateless](#class-vs-reactcreateclass-vs-stateless)
  1. [Nommage](#naming)
  1. [Déclaration](#declaration)
  1. [Alignement](#alignment)
  1. [Guillemets](#quotes)
  1. [Espacement](#spacing)
  1. [Props](#props)
  1. [Refs](#refs)
  1. [Parenthèses](#parentheses)
  1. [Tags](#tags)
  1. [Méthodes](#methods)
  1. [Ordonnancement](#ordering)
  1. [`isMounted`](#ismounted)

## Règles de base

  - Seulement un composant React par fichier.
    - Cependant, de multiple composants dits [Stateless ou Pure](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions) sont autorisés. eslint: [`react/no-multi-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md#ignorestateless).
  - Toujours utiliser la syntaxe JSX.
  - Ne pas utiliser `React.createElement` jusqu'à ce que vous initialisez l'app depuis un fichier qui n'est pas du JSX.

## Class vs `React.createClass` vs stateless

  - Si vous avez un state interne et/ou des refs, préférez `class extends React.Component` plutôt que `React.createClass` sauf si vous avez réellement besoin d'utiliser des mixins. eslint: [`react/prefer-es6-class`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md) [`react/prefer-stateless-function`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md)

    ```jsx
    // mauvaise pratique
    const Listing = React.createClass({
      // ...
      render() {
        return <div>{this.state.hello}</div>;
      }
    });

    // bonne pratique
    class Listing extends React.Component {
      // ...
      render() {
        return <div>{this.state.hello}</div>;
      }
    }
    ```

    Et si vous n'avez pas de state ou de refs, utilisez plutôt des fonctions basiques (sans l'opérateur `=>`) plutôt que des classes:

    ```jsx
    // mauvaise pratique
    class Listing extends React.Component {
      render() {
        return <div>{this.props.hello}</div>;
      }
    }

    // mauvaise pratique
    const Listing = ({ hello }) => (
      <div>{hello}</div>
    );

    // bonne pratique
    function Listing({ hello }) {
      return <div>{hello}</div>;
    }
    ```

## Nommage

  - **Extensions**: Utilisez l'extension `.jsx` pour les comosants React.
  - **Nom des fichiers**: Utilisez la PascalCase pour vos fichiers. Exemple: `ReservationCard.jsx`.
  - **Nom des références**: Utilisez la PascalCase pour les composants React et la camelCase pour leurs instances. eslint: [`react/jsx-pascal-case`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

    ```jsx
    // mauvaise pratique
    import reservationCard from './ReservationCard';

    // bonne pratique
    import ReservationCard from './ReservationCard';

    // mauvaise pratique
    const ReservationItem = <ReservationCard />;

    // bonne pratique
    const reservationItem = <ReservationCard />;
    ```

  - **Nommage des compsants**: Utilisez le nom du fichier comme nom de composant. Par exemple, `ReservationCard.jsx` devrait avoir pour nom de référence `ReservationCard`. Cependant, pour les composants root d'un répertoire, utilisez `index.jsx` comme nom de fichier et utilisez le nom du répertoire comme nom de composant:

    ```jsx
    // mauvaise pratique
    import Footer from './Footer/Footer';

    // mauvaise pratique
    import Footer from './Footer/index';

    // bonne pratique
    import Footer from './Footer';
    ```

## Déclaration

  - Ne pas utiliser `displayName` pour nommer ses composants. À la place, nommez le composant par référence.

    ```jsx
    // mauvaise pratique
    export default React.createClass({
      displayName: 'ReservationCard',
      // votre code
    });

    // bonne pratique
    export default class ReservationCard extends React.Component {
    }
    ```

## Alignement

  - Suivez ces styles d'alignement pour la syntaxe JSX. eslint: [`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

    ```jsx
    // mauvaise pratique
    <Foo superLongParam="bar"
         anotherSuperLongParam="baz" />

    // bonne pratique
    <Foo
      superLongParam="bar"
      anotherSuperLongParam="baz"
    />

    // si la propriété rentre sur une ligne, gardez la sur la même ligne
    <Foo bar="bar" />

    // les compsants enfants seront identés correctement
    <Foo
      superLongParam="bar"
      anotherSuperLongParam="baz"
    >
      <Quux />
    </Foo>
    ```

## Guillemets

  - Toujours utiliser les guillemets (`"`) pour les attributs JSX. Utilisez la single quote (`'`) pour tout le reste. eslint: [`jsx-quotes`](http://eslint.org/docs/rules/jsx-quotes)

  > Pourquoi? Les attributs JSX [ne peuvent contenir des guillements d'échappements](http://eslint.org/docs/rules/jsx-quotes), de plus les guillemets permettent d'utiliser un vocabulaire plus large comme `"don't"` ce qui rend les choses plus simple.
  > Les attributs HTML classiques utilisent eux aussi des guillemets plutôt que des single quote donc les attributs JSX utilisent aussi cette convention.

    ```jsx
    // mauvaise pratique
    <Foo bar='bar' />

    // bonne pratique
    <Foo bar="bar" />

    // mauvaise pratique
    <Foo style={{ left: "20px" }} />

    // bonne pratique
    <Foo style={{ left: '20px' }} />
    ```

## Espacement

  - Toujours inclure un espace en fermant un tag JSX.

    ```jsx
    // mauvaise pratique
    <Foo/>

    // très mauvaise pratique
    <Foo                 />

    // mauvaise pratique
    <Foo
     />

    // bonne pratique
    <Foo />
    ```

  - N'insérez pas des espaces entre les accolades d'un attribut JSX. eslint: [`react/jsx-curly-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)

    ```jsx
    // mauvaise pratique
    <Foo bar={ baz } />

    // bonne pratique
    <Foo bar={baz} />
    ```

## Props

  - Toujours utiliser la camelCase pour les noms de propriétés.

    ```jsx
    // mauvaise pratique
    <Foo
      UserName="hello"
      phone_number={12345678}
    />

    // bonne pratique
    <Foo
      userName="hello"
      phoneNumber={12345678}
    />
    ```

  - Ommettre la valeur de la propriété lorsque sa valeur vaut explicitement `true`. eslint: [`react/jsx-boolean-value`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)

    ```jsx
    // mauvaise pratique
    <Foo
      hidden={true}
    />

    // bonne pratique
    <Foo
      hidden
    />
    ```

  - Toujours inclure un attribut `alt` sur les tags `<img>`. Si l'image n'est qu'une image de présentation, `alt` peut être une chaîne de caractère vide ou le tag `<img>` doit avoir comme attribut `role="presentation"`. eslint: [`jsx-a11y/img-has-alt`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-has-alt.md)

    ```jsx
    // mauvaise pratique
    <img src="hello.jpg" />

    // bonne pratique
    <img src="hello.jpg" alt="Me waving hello" />

    // bonne pratique
    <img src="hello.jpg" alt="" />

    // bonne pratique
    <img src="hello.jpg" role="presentation" />
    ```

  - Ne pas utiliser de mots génériques comme "image", "photo", ou "picture" dans l'attribut `alt` d'un tag `<img>`. eslint: [`jsx-a11y/img-redundant-alt`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md)

  > Pourquoi? Les lecteurs d'écrans (pour les malvoyants par exemple) déclarent déjà un tag `img` comme étant une image, il n'y a donc pas besoin d'inclure cette information à nouveau dans l'attribut `alt`.

    ```jsx
    // mauvaise pratique
    <img src="hello.jpg" alt="Picture of me waving hello" />

    // bonne pratique
    <img src="hello.jpg" alt="Me waving hello" />
    ```

  - Utilisez seulement des [ARIA roles](https://www.w3.org/TR/wai-aria/roles#role_definitions) valides et non-abstraits. eslint: [`jsx-a11y/aria-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md)

    ```jsx
    // mauvaise pratique - il ne s'agit pas d'un role ARIA
    <div role="datepicker" />

    // mauvaise pratique - role ARIA abstrait
    <div role="range" />

    // bonne pratique
    <div role="button" />
    ```

  - Ne pas utilisez les `accessKey` sur les éléments. eslint: [`jsx-a11y/no-access-key`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md)

  > Pourquoi? Des incohérences entre les raccourcis claviers et les commandes du clavier utilisées par les personnes qui ont besoin de lecteurs d'écrans peuvent rendre l'accessibilité compliquée.

  ```jsx
  // mauvaise pratique
  <div accessKey="h" />

  // bonne pratique
  <div />
  ```

  - Eviter d'utiliser l'index d'un tableau comme valeur de la propriété `key`, utilisez plutôt un identifiant unique. ([pourquoi?](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318))

  ```jsx
  // mauvaise pratique
  {todos.map((todo, index) =>
    <Todo
      {...todo}
      key={index}
    />
  )}

  // bonne pratique
  {todos.map(todo => (
    <Todo
      {...todo}
      key={todo.id}
    />
  ))}
  ```

## Refs

  - Toujours utiliser des callbacks pour vos refs. eslint: [`react/no-string-refs`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)

    ```jsx
    // mauvaise pratique
    <Foo
      ref="myRef"
    />

    // bonne pratique
    <Foo
      ref={(ref) => this.myRef = ref}
    />
    ```

## Parenthèses

  - Entourez vos tags JSX de parenthèses lorsqu'ils ne restent pas sur une seule ligne. eslint: [`react/wrap-multilines`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md)

    ```jsx
    // mauvaise pratique
    render() {
      return <MyComponent className="long body" foo="bar">
               <MyChild />
             </MyComponent>;
    }

    // bonne pratique
    render() {
      return (
        <MyComponent className="long body" foo="bar">
          <MyChild />
        </MyComponent>
      );
    }

    // bonne pratique, lorsque cela tient sur une seule ligne
    render() {
      const body = <div>hello</div>;
      return <MyComponent>{body}</MyComponent>;
    }
    ```

## Tags

  - Toujours utiliser un seule tag ouvrant/fermant lorsque celui-ci n'a pas de tag enfant. eslint: [`react/self-closing-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)

    ```jsx
    // mauvaise pratique
    <Foo className="stuff"></Foo>

    // bonne pratique
    <Foo className="stuff" />
    ```

  - Si votre composant a des propriétés sur plusieurs lignes, fermer le tag de ce composant sur une nouvelle ligne à part. eslint: [`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

    ```jsx
    // mauvaise pratique
    <Foo
      bar="bar"
      baz="baz" />

    // bonne pratique
    <Foo
      bar="bar"
      baz="baz"
    />
    ```

## Méthodes

  - Utilisez les fonctions "arrow" (utilisant la syntaxe `=>`) pour traiter les variables locales.

    ```jsx
    function ItemList(props) {
      return (
        <ul>
          {props.items.map((item, index) => (
            <Item
              key={item.key}
              onClick={() => doSomethingWith(item.name, index)}
            />
          ))}
        </ul>
      );
    }
    ```

  - Lorsque vous souhaitez attacher la référence `this` avec la méthode `bind` dans la méthode `render`, faites le plutôt dans le constructeur. eslint: [`react/jsx-no-bind`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)

  > Pourquoi? Un appel à `bind` dans la méthode `render` créé une toute nouvelle fonction pour chaque render.

    ```jsx
    // mauvaise pratique
    class extends React.Component {
      onClickDiv() {
        // faire quelque chose
      }

      render() {
        return <div onClick={this.onClickDiv.bind(this)} />
      }
    }

    // bonne pratique
    class extends React.Component {
      constructor(props) {
        super(props);

        this.onClickDiv = this.onClickDiv.bind(this);
      }

      onClickDiv() {
        // faire quelque chose
      }

      render() {
        return <div onClick={this.onClickDiv} />
      }
    }
    ```

  - Ne pas utiliser d'underscore (`_`) pour préfixer les méthodes internes de vos composants React.

    ```jsx
    // mauvaise pratique
    React.createClass({
      _onClickSubmit() {
        // faire quelque chose
      },

      // faire autre chose
    });

    // bonne pratique
    class extends React.Component {
      onClickSubmit() {
        // faire quelque chose
      }

      // faire autroe chose
    }
    ```

  - Soyez sûr de retourner une valeur dans les méthodes `render`. eslint: [`require-render-return`](https://github.com/yannickcr/eslint-plugin-react/pull/502)

    ```jsx
    // mauvaise pratique
    render() {
      (<div />);
    }

    // bonne pratique
    render() {
      return (<div />);
    }
    ```

## Ordonnancement

  - Structure d'un composant avec la notation `class extends React.Component`:

  1. méthodes `static` optionnelles
  1. `constructor`
  1. `getChildContext`
  1. `componentWillMount`
  1. `componentDidMount`
  1. `componentWillReceiveProps`
  1. `shouldComponentUpdate`
  1. `componentWillUpdate`
  1. `componentDidUpdate`
  1. `componentWillUnmount`
  1. *clickHandlers or eventHandlers* comme `onClickSubmit()` ou `onChangeDescription()`
  1. *Méthode "getter" pour `render`* comme `getSelectReason()` ou `getFooterContent()`
  1. *Méthodes render optionnelles* comme `renderNavigation()` ou`renderProfilePicture()`
  1. `render`

  - Comment définir `propTypes`, `defaultProps`, `contextTypes`, etc...

    ```jsx
    import React, { PropTypes } from 'react';

    const propTypes = {
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      text: PropTypes.string,
    };

    const defaultProps = {
      text: 'Hello World',
    };

    class Link extends React.Component {
      static methodsAreOk() {
        return true;
      }

      render() {
        return <a href={this.props.url} data-id={this.props.id}>{this.props.text}</a>
      }
    }

    Link.propTypes = propTypes;
    Link.defaultProps = defaultProps;

    export default Link;
    ```

  - Structure d'un composant avec la notation `React.createClass`: eslint: [`react/sort-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md)

  1. `displayName`
  1. `propTypes`
  1. `contextTypes`
  1. `childContextTypes`
  1. `mixins`
  1. `statics`
  1. `defaultProps`
  1. `getDefaultProps`
  1. `getInitialState`
  1. `getChildContext`
  1. `componentWillMount`
  1. `componentDidMount`
  1. `componentWillReceiveProps`
  1. `shouldComponentUpdate`
  1. `componentWillUpdate`
  1. `componentDidUpdate`
  1. `componentWillUnmount`
  1. *clickHandlers or eventHandlers* comme `onClickSubmit()` ou `onChangeDescription()`
  1. *Méthode "getter" pour `render`* comme `getSelectReason()` ou `getFooterContent()`
  1. *Méthodes render optionnelles* comme `renderNavigation()` ou `renderProfilePicture()`
  1. `render`

## `isMounted`

  - Ne pas utiliser `isMounted`. eslint: [`react/no-is-mounted`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md)

  > Pourquoi? [`isMounted` est un anti-modèle][anti-pattern], n'est pas disponible avec les classes ES6. De plus il est en cours d'être officiellement déclaré comme déprécié.

  [anti-pattern]: https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html

## Traduction

  Ce guide à propos de JSX/React est aussi disponible dans d'autres langues:

  - ![en](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/United-Kingdom.png) **Anglais**: [airbnb/javascript](https://github.com/airbnb/javascript/tree/master/react)
  - ![cn](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/China.png) **Chinois (Simplifié)**: [JasonBoy/javascript](https://github.com/JasonBoy/javascript/tree/master/react)
  - ![pl](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Poland.png) **Polonais**: [pietraszekl/javascript](https://github.com/pietraszekl/javascript/tree/master/react)
  - ![kr](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/South-Korea.png) **Coréen**: [apple77y/javascript](https://github.com/apple77y/javascript/tree/master/react)
  - ![Br](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Brazil.png) **Brézilien**: [ronal2do/javascript](https://github.com/ronal2do/airbnb-react-styleguide)

**[⬆ remonter la page](#table-of-contents)**
