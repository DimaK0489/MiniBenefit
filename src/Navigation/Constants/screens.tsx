import Category from '../../Screens/Category';
import Home from '../../Screens/Home';
import AllDiscount from '../../Screens/AllDiscount';
import Stocks from '../../Screens/Stocks';
import Sale from '../../Screens/Sale';
import Delivery from '../../Screens/Delivery';
import Entertainment from '../../Screens/Entertainment';
import {Novelties} from '../../Screens/Novelties/Novelties';
import { InfoBenefit } from "../../Screens/InfoBenefit/InfoBenefit";

export enum SCREEN {
  CATEGORY = 'Category',
  HOME = 'Home',
  ALL_DISCOUNT = 'AllDiscount',
  STOCKS = 'Stocks',
  SALE = 'Sale',
  DELIVERY = 'Delivery',
  ENTERTAINMENT = 'Entertainment',
  NOVELTIES = 'Novelties',
  INFO_BENEFIT = 'InfoBenefit',
}

export const screens = {
  [SCREEN.CATEGORY]: Category,
  [SCREEN.HOME]: Home,
  [SCREEN.ALL_DISCOUNT]: AllDiscount,
  [SCREEN.STOCKS]: Stocks,
  [SCREEN.SALE]: Sale,
  [SCREEN.DELIVERY]: Delivery,
  [SCREEN.ENTERTAINMENT]: Entertainment,
  [SCREEN.NOVELTIES]: Novelties,
  [SCREEN.INFO_BENEFIT]: InfoBenefit,
};
