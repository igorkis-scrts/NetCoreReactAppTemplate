import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory, History } from "history";
import { applyMiddleware, compose, createStore, Reducer, Store } from "redux";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";

import { configureMapper } from "@config/mapper/configureMapper";
import { RootSagaBase } from "@utils/saga/RootSagaBase";
// import { HttpInterceptor } from "@utils/http/HttpInterceptor";

export function configureApp<TReducers>(
    createReducers: (history: History) => Reducer<TReducers>,
    rootSaga: RootSagaBase
): {
    store: Store<TReducers>,
    history: History
} {
    const history: History = createBrowserHistory();
    const sagaMiddleware: SagaMiddleware = createSagaMiddleware();
    const middleware = applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware
    );

    const composeEnhancer = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;
    const store: Store<TReducers> = createStore(
        createReducers(history),
        composeEnhancer(middleware)
    );

    rootSaga.run(sagaMiddleware);

    configureMapper();

    // new HttpInterceptor(store);

    return { store, history };
}
