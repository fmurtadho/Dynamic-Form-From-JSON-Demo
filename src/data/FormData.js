export const formData = [
  {
    id: "name",
    label: "Text",
    placeholder: "Enter full name",
    type: "text",
    validationType: "string",
    value: "",
    validations: [
      {
        type: "required",
        params: ["name is required"],
      },
      {
        type: "min",
        params: [5, "name cannot be less than 5 characters"],
      },
      {
        type: "max",
        params: [10, "name cannot be more than 10 characters"],
      },
    ],
  },
  {
    id: "city",
    label: "Select / Dropdown",
    placeholder: "Choose City",
    type: "select",
    validationType: "string",
    value: "",
    validations: [
      {
        type: "required",
        params: ["options is required"]
      }
    ],
    options: ["Bandung", "Jakarta", "Bekasi"]
  },
  {
    id: "textarea",
    label: "Text Area",
    placeholder: "Input Text Area",
    type: "textarea",
    validationType: "string",
    value: "",
    validations: [
      {
        type: "required",
        params: ["Text Area is required error demo"]
      }
    ]
  },
  {
    id: "radio",
    label: "Radio",
    placeholder: "Radio Demo",
    type: "radio",
    validationType: "string",
    value: "",
    validations: [
      {
        type: "required",
        params: ["Radio is required error demo"]
      }
    ],
    options: ["Radio A", "Radio B", "Radio C"]
  },
  {
    id: "checkbox",
    label: "Check Box",
    placeholder: "Check Box Demo",
    type: "checkbox",
    validationType: "string",
    value: "",
    validations: [
      {
        type: "required",
        params: ["Check Box is required error demo"]
      }
    ],
    options: ["Options A", "Options B"]
  },
  {
    id: "upload",
    label: "Upload",
    placeholder: "Upload Demo",
    type: "upload",
    validationType: "string",
    value: "",
    validations: [
      {
        type: "required",
        params: ["Upload is required error demo"]
      }
    ]
  },
];
