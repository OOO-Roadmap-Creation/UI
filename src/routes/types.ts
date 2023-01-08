export interface RouteInterface {
    [key: string]: {
        component: () => JSX.Element;
    };
}
