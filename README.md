# Prairie Dev Con 2019 Beyond NGRX

this repo is broken into different branches that exemplifiy the different types of state management systems.

The branches are divided as follows:

| State                 | Before                  | After                  |
| --------------------- | ----------------------- | ---------------------- |
| Single Component      | single-component        | cant get worse         |
| Parent - Child        | pc-before               | pr-after               |
| Services              | services-before         | services-after         |
| Container - Presenter | single-component-before | single-component-after |
| ngrx                  | ngrx                    | hahah lol              |

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-eu3tlx)

## Services

In this example there are many child components that all need to communicate with eachotehr and the parent. Children components would consider each other 'siblings'.

In this exercise the goal is if any (parent or child) component updates the 'current' value, it gets updated throughout.
