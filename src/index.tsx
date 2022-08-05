import React from "react";
import { shouldComponentUpdate } from "react-window";

// Lớp wrap lại Component với việc kiểm tra kĩ hơn trạng thái mounted của Component

class SafeComponent<P, S> extends React.Component<P, S> {
  private mounted: boolean = true;
  displayName: string;

  public getMounted(): boolean {
    return this.mounted;
  }

  protected setMounted(mounted: boolean): void {
    this.mounted = mounted;
  }

  constructor(props: P | Readonly<P>) {
    super(props);
    this.displayName = "";
    this.setMounted(true);
  }

  public _componentDidMount?(): void {}

  componentDidMount?(): void {
    this.setMounted(true);
    this._componentDidMount?.call(this);
  }

  public _componentWillUnmount?(): void {}

  componentWillUnmount?(): void {
    this.setMounted(false);
    this._componentWillUnmount?.call?.(this);
  }

  public callbackSafe(cb?: (...arg: any[]) => void, ...args: any[]) {
    if (!this.mounted) return;
    cb && cb?.call?.(this, ...args);
  }

  public setStateSafe<K extends keyof S>(
    state:
      | ((prevState: Readonly<S>, props: Readonly<P>) => Pick<S, K> | S | null)
      | (Pick<S, K> | S | null),
    callback?: () => void
  ): void {
    if (!this.mounted) return;
    this.setState(state, callback);
  }

  public renderContent(): React.ReactNode {
    return null;
  }

  render() {
    return this.renderContent();
  }
}

SafeComponent.prototype.shouldComponentUpdate = shouldComponentUpdate;

export { SafeComponent };
