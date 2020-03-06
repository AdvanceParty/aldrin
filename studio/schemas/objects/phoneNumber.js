const areaCodePattern = /^(\(0[\d]{1,}\)|\+\d{1,})$/;
const phoneNumberPattern = /^\d[\d,\s]{5,}\d$/;

export default {
  name: 'phoneNumber',
  title: 'Phone Number',
  type: 'object',
  preview: {
    select: {
      regionCode: 'regionCode',
      number: 'number'
    },
    prepare(selection) {
      const { regionCode, number } = selection;
      title: `${regionCode} ${number}`;
    }
  },
  fields: [
    {
      name: 'regionCode',
      title: 'Country or Area Code',
      type: 'string',
      validation: Rule =>
        Rule.custom(value => {
          const valid =
            value !== undefined && Boolean(value.match(areaCodePattern));
          return valid
            ? valid
            : "Must be '+xx' International or (xx) Australian format.";
        })
    },
    {
      name: 'number',
      title: 'Phone Number',
      type: 'string',
      validation: Rule =>
        Rule.custom(value => {
          const valid =
            value !== undefined && Boolean(value.match(phoneNumberPattern));
          return valid ? valid : 'Numbers only, please!';
        })
    }
  ]
};
