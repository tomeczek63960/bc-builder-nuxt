import HelloWorldComponent from '@builderComponents/HelloWorld.vue';
import BigcommerceProductComponent from '@builderComponents/BigcommerceProductComponent.vue';

const url =
  'https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png';

export const REGISTERED_COMPONENTS = [
  {
    component: HelloWorldComponent,
    name: 'Hello World',
    canHaveChildren: true,
    image: url,
    inputs: [
      {
        name: 'text',
        type: 'string',
        defaultValue: 'Helo world component default text'
      }
    ]
  },
  {
    component: BigcommerceProductComponent,
    name: 'Bigcommerce product',
    image: url,
    inputs: [
      {
        name: 'product',
        type: 'BigCommerceProduct'
      }
    ]
  }
];
