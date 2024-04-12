type State = {
  monthl
};

class ShipComponentState {
  private static _instance: ShipComponentState | undefined;

  private _states: Record<string, State>;

  private constructor() {
    this._states = {};
  }

  public static getInstance(): ShipComponentState {
    if (!ShipComponentState._instance) {
      ShipComponentState._instance = new ShipComponentState();
    }

    return ShipComponentState._instance;
  }

  public Get(id: string): State {
    if typeof this._states[id] === "undefined" {
      this._states[id] = {

      }
    }

    return this._states["id"]
  }

  public SetMonths() {
    //
  }
}

window.states.ShipComponentState = ShipComponentState;
