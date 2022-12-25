import { Product } from "../../models/Product";

export enum ShopActionType {
    ADD = 'add',
    DELETE = 'deleteC',
    UPDATE = 'update',
    UPDATEQTY = 'addQty',
    UPDATEITEMS = 'totalItems',
    HAVE = 'addWL',
    REMOVE = 'remove',
  }
  
  export type ShopAction = {
    type: ShopActionType;
    payload: any;
  };
  
  export const add = (product: Product): ShopAction => ({
    type: ShopActionType.ADD,
    payload: product,
  });
  
  export const deleteC = (product: Product): ShopAction => ({
    type: ShopActionType.DELETE,
    payload: product,
  });

  export const update = (total: number): ShopAction => ({
    type: ShopActionType.UPDATE,
    payload: total,
  });

  export const addQty = (priceProd: number): ShopAction => ({
    type: ShopActionType.UPDATEQTY,
    payload: priceProd,
  });
  
  export const totalItems = (totalitems: number): ShopAction => ({
    type: ShopActionType.UPDATEITEMS,
    payload: totalitems,
  });

  export const addWL = (product: Product): ShopAction => ({
    type: ShopActionType.HAVE,
    payload: product,
  });
  
  export const remove = (product: Product): ShopAction => ({
    type: ShopActionType.REMOVE,
    payload: product,
  });


 