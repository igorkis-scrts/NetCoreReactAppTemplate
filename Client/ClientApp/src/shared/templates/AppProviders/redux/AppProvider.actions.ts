import { createAction } from "@utils/redux/createAction";

import { AppProviderStore } from "./AppProvider.store";

export class AppProviderActions {
    private static readonly PREFIX = "APP_PROVIDER_";

    public static readonly UPDATE_STORE = AppProviderActions.PREFIX + "UPDATE_STORE";

    public static readonly INCREMENT_INITIALIZED_ACTIONS = AppProviderActions.PREFIX + "INCREMENT_INITIALIZED_ACTIONS";

    public static readonly INITIALIZE_APP = AppProviderActions.PREFIX + "INITIALIZE_APP";

    public static updateStore = (store: Partial<AppProviderStore>) =>
        createAction(AppProviderActions.UPDATE_STORE, store);

    public static incrementInitializedActions = () => createAction(AppProviderActions.INCREMENT_INITIALIZED_ACTIONS);

    public static initializedApp = () => createAction(AppProviderActions.INITIALIZE_APP);
}
