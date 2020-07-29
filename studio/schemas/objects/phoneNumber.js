import { MdPhone } from 'react-icons/md';

const areaCodePattern = /^(\(0[\d]{1,}\)|\+\d{1,})$/;
const phoneNumberPattern = /^\d[\d,\s]{5,}\d$/;

export default {
  name: 'phoneNumber',
  title: 'Phone Number',
  type: 'object',
  preview: {
    select: {
      label: 'label',
      regionCode: 'regionCode',
      number: 'number',
    },
    prepare(selection) {
      const { label, regionCode, number } = selection;
      const labelValue = label ? `${label}: ` : '';
      return {
        title: `${labelValue} ${regionCode} ${number}`,
        media: MdPhone,
      };
    },
  },
  fieldsets: [
    {
      name: 'ph',
      title: ' ',
      options: {
        columns: 2,
      },
    },
  ],
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'regionCode',
      title: 'Country/Area Code',
      fieldset: 'ph',
      type: 'string',
      validation: (Rule) =>
        Rule.custom((value) => {
          const valid = value !== undefined && Boolean(value.match(areaCodePattern));
          return valid ? valid : "Must be '+xx' International or (xx) Australian format.";
        }),
    },
    {
      name: 'number',
      fieldset: 'ph',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) =>
        Rule.custom((value) => {
          const valid = value !== undefined && Boolean(value.match(phoneNumberPattern));
          return valid ? valid : 'Numbers only, please!';
        }),
    },
  ],
};
