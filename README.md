# Prairie Dev Con 2019 Beyond NGRX

this repo is broken into different branches that exemplifiy the different types of state management systems.

The branches are divided as follows:

| State                 | Before                     | After                     |
| --------------------- | -------------------------- | ------------------------- |
| Single Component      | single-component           | cant get worse            |
| Parent - Child        | pc-before                  | pr-after                  |
| Services              | services-before            | services-after            |
| Container - Presenter | container-presenter-before | container-presenter-after |
| ngrx                  | ngrx                       | hahah lol                 |

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-eu3tlx)

## parent - child relationship

In this example there are two components, a parent and child. The goal of the exercise is as follows

- The parent sets a number, passese it to the child. done!
- The child then increments the number displaying it. done!
- The child then passes that update number back to the parent. done!
