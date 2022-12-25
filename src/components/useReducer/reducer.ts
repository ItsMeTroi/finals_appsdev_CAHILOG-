import { ShopAction, ShopActionType } from './actions';
import { ShopState } from "./state";

export const shopReducer = (state: ShopState, action: ShopAction) => {
  switch (action.type) {
    case ShopActionType.ADD:
      return {
        ...state,
        products: action.payload,
      };
    case ShopActionType.DELETE:
      return {
        ...state,
        products: action.payload,
      };

    case ShopActionType.UPDATE:
      return {
        ...state,
        total:  action.payload,
      };

      case ShopActionType.HAVE:
        return {
          ...state,
          saved: action.payload,
        };
        case ShopActionType.REMOVE:
          return {
            ...state,
            saved: action.payload,
          };

          case ShopActionType.UPDATEQTY:
            return {
              ...state,
              products: action.payload,
            };
            case ShopActionType.UPDATEITEMS:
            return {
              ...state,
              totalitems: action.payload,
            };
            
            
           
    default:
      return state;
  }
};
