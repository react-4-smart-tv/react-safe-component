import React from "react";
declare class SafeComponent<P, S> extends React.Component<P, S> {
    private mounted;
    displayName: string;
    getMounted(): boolean;
    protected setMounted(mounted: boolean): void;
    constructor(props: P | Readonly<P>);
    _componentDidMount?(): void;
    componentDidMount?(): void;
    _componentWillUnmount?(): void;
    componentWillUnmount?(): void;
    callbackSafe(cb?: (...arg: any[]) => void, ...args: any[]): void;
    setStateSafe<K extends keyof S>(state: ((prevState: Readonly<S>, props: Readonly<P>) => Pick<S, K> | S | null) | (Pick<S, K> | S | null), callback?: () => void): void;
    renderContent(): React.ReactNode;
    render(): React.ReactNode;
}
export { SafeComponent };
