import { Action } from '@ngrx/store';

export enum UnitsActionTypes {
  LoadUnits = '[Units] Load',
  LoadUnitsSuccess = '[Units] Load Success',
  LoadUnitsFail = '[Units] Load Fail',
  CreateUnits = '[Units] Create',
  CreateUnitsSuccess = '[Units] Create Success',
  CreateUnitsFail = '[Units] Create Fail'
}

export class LoadUnits implements Action {
  readonly type = UnitsActionTypes.LoadUnits;
}

export class LoadUnitsSuccess implements Action {
  readonly type = UnitsActionTypes.LoadUnitsSuccess;
  constructor(public payload: any) {}
}

export class LoadUnitsFail implements Action {
  readonly type = UnitsActionTypes.LoadUnitsFail;
  constructor(public payload: any) {}
}

export class CreateUnits implements Action {
  readonly type = UnitsActionTypes.CreateUnits;
  constructor(public payload: any) {}
}

export class CreateUnitsSuccess implements Action {
  readonly type = UnitsActionTypes.CreateUnitsSuccess;
  constructor(public payload: any) {}
}

export class CreateUnitsFail implements Action {
  readonly type = UnitsActionTypes.CreateUnitsFail;
  constructor(public payload: any) {}
}

export type UnitsActions =
  | LoadUnits
  | LoadUnitsSuccess
  | LoadUnitsFail
  | CreateUnits
  | CreateUnitsSuccess
  | CreateUnitsFail;
