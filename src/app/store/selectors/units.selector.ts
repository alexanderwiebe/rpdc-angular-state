import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UnitsState } from '../reducers/units.reducer';
import { AppState } from '../reducers';

export const getUnitsState = createFeatureSelector<UnitsState>('units');

export const {
  selectIds: getUnitIds,
  selectEntities: getUnitEntities,
  selectAll: getAllUnit
} = adapter.getSelectors(getUnitsState);

export const getUnits = createSelector(
  getUnitsState,
  (state: any) => state.entities
);

export const getUnitsFromRoot = (state: AppState) => {
  return state.units.entities;
};
