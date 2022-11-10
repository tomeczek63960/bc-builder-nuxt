import HelloWorldComponent from '@builderComponents/HelloWorld.vue';
import BigcommerceProductComponent from '@builderComponents/BigcommerceProductComponent.vue';
import Carousel from '@builderComponents/Carousel.vue';

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
    component: Carousel,
    name: 'Carousel',
    canHaveChildren: true,
    image: url,
    inputs: [
      {
        name: 'slider',
        type: 'list',
        subFields: [
          {
            name: 'image',
            type: 'file'
          },
          {
            name: 'content',
            type: 'uiBlocks',
            defaultValue: []
          }
        ]
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
