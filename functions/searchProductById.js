const { customAxios } = require('../api/utils/axios');
const permission = require('./middleware/permission');

const searchProductById = async ({ queryStringParameters }, context) => {
  const { id } = queryStringParameters;
  const { data, status } = await customAxios('api').get(
    `/stores/${process.env.STORE_HASH}/v3/catalog/products?id:in=${id}&include=primary_image`
  );
  return {
    body: JSON.stringify(data),
    statusCode: status
  };
};

exports.handler = (event, context) =>
  permission(searchProductById)(event, context);
