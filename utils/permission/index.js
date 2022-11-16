const ACCESSIBLE_API_ENDPOINTS = [
  'GET_getCategories',
  'GET_getProductsByCategory',
  'GET_getProductBySlug',
  'GET_getProductOption',
  'GET_getCart',
  'POST_createCart',
  'POST_addCartItem',
  'PUT_updateCartItem',
  'PUT_updateCartWithCustomerId',
  'DELETE_deleteCartItem',
  'GET_getAllOrders',
  'GET_getAllAddresses',
  'PUT_updateAddress',
  'POST_addAddress',
  'DELETE_deleteAddress',
  'GET_searchProductByKey',
  'GET_searchProductById',
  'POST_customerLogin',
  'POST_customerRegister',
  'POST_customerLogOut',
  'GET_getCheckout',
  'POST_setConsignmentToCheckout',
  'PUT_updateConsignmentToCheckout',
  'PUT_updateShippingOption',
  'POST_setBillingAddressToCheckout',
  'POST_createOrder',
  'GET_getPaymentMethodByOrder',
  'POST_processPayment',
  'POST_addCoupons',
  'GET_getProductOption',
  'GET_storefront',
  'GET_getHomePageContentWidgets',
  'POST_createWishlist',
  'POST_addToWishlistItem',
  'GET_getWishlist',
  'GET_getProductsByIds',
  'DELETE_deleteWishlistItem'
];

module.exports.checkApiAccessPermission = (permission) => {
  if (!ACCESSIBLE_API_ENDPOINTS.includes(permission)) {
    throw new Error('permission error');
  }
};
