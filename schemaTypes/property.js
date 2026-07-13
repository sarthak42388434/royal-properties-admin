export default {
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Property Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'propertyType',
      title: 'Property Type',
      type: 'string',
      options: {
        list: [
          'Apartment',
          'Villa',
          'Plot',
          'Commercial',
          'Office',
        ],
      },
    },
    {
      name: 'purpose',
      title: 'Purpose',
      type: 'string',
      options: {
        list: [
          'For Sale',
          'For Rent',
          'Investment',
          'Residential',
          'Commercial',
        ],
      },
    },
    {
      name: 'bedrooms',
      title: 'Bedrooms',
      type: 'number',
    },
    {
      name: 'bathrooms',
      title: 'Bathrooms',
      type: 'number',
    },
    {
      name: 'area',
      title: 'Area (Sq Ft)',
      type: 'number',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Available', 'Sold', 'Rented'],
      },
    },
    {
      name: 'featured',
      title: 'Featured Property',
      type: 'boolean',
    },
    {
      name: 'images',
      title: 'Property Images',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
}
