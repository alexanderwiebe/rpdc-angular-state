import { UnitsActions, UnitsActionTypes } from '../actions';
import { Unit } from '../../core/models/units.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const adapter: EntityAdapter<Unit> = createEntityAdapter<Unit>({
  selectId: (unit: Unit) => unit.id
});

export interface UnitsState extends EntityState<Unit> {
  loaded: boolean;
  loading: boolean;
}

export const initialState: UnitsState = adapter.getInitialState({
  loaded: false,
  loading: false
});

export function reducer(
  state = initialState,
  action: UnitsActions
): UnitsState {
  switch (action.type) {
    case UnitsActionTypes.LoadUnits: {
      return {
        ...state,
        loading: true
      };
    }

    case UnitsActionTypes.LoadUnitsSuccess: {
      return adapter.upsertMany(action.payload, { ...state });
    }

    case UnitsActionTypes.LoadUnitsFail: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    case UnitsActionTypes.CreateUnitsSuccess: {
      return adapter.addOne(
        {
          ...action.payload
        },
        {
          ...state
        }
      );
    }

    default:
      return state;
  }
}
