# RxjsCaching

This project demonstrates caching api responses using RxJS, and the shareReplay operator.
The shareReplay operator allows replaying of a specified number of next() calls from an observable. This useful for replaying observable results to late subscribers, or in this case, replaying data for cache purposes.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
